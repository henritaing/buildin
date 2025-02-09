const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

const ddbClient = new DynamoDBClient({ region: process.env.TABLE_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

let tableName = "FormSubmissions";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// POST endpoint for form submissions
app.post("/items", async function(req, res) {
  // Validate required fields
  const requiredFields = ['name', 'email', 'job', 'description'];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.statusCode = 400;
      res.json({ error: `Missing required field: ${field}` });
      return;
    }
  }

  // Create item with additional metadata
  const item = {
    id: Date.now().toString(), // Use timestamp as ID
    createdAt: new Date().toISOString(),
    ...req.body
  };

  const putItemParams = {
    TableName: tableName,
    Item: item
  };

  try {
    await ddbDocClient.send(new PutCommand(putItemParams));
    res.json({
      success: true,
      message: 'Form submitted successfully',
      id: item.id
    });
  } catch (err) {
    console.error('DynamoDB error:', err);
    res.statusCode = 500;
    res.json({
      error: 'Could not save the form submission.',
      message: err.message
    });
  }
});

// GET endpoint to retrieve all submissions
app.get("/items", async function(req, res) {
  const params = {
    TableName: tableName,
    Select: 'ALL_ATTRIBUTES'
  };

  try {
    const data = await ddbDocClient.send(new ScanCommand(params));
    res.json(data.Items);
  } catch (err) {
    console.error('DynamoDB error:', err);
    res.statusCode = 500;
    res.json({
      error: 'Could not retrieve submissions.',
      message: err.message
    });
  }
});

app.listen(3000, function() {
  console.log("App started")
});

module.exports = app
