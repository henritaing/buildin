const AWS = require('aws-sdk');  // Using ES Module import syntax
const dynamoDB = new AWS.DynamoDB.DocumentClient();  // Initialize DynamoDB client

export const handler = async (event) => {
  // Parse the incoming event (form data)
  const { name, email, job, description } = JSON.parse(event.body);

  // Define the parameters to insert the data into DynamoDB
  const params = {
    TableName: 'FormSubmissions', // Replace with your DynamoDB table name
    Item: {
      id: AWS.util.uuid.v4(), // Generate a unique ID for the form submission
      name,
      email,
      job,
      description,
      timestamp: new Date().toISOString(), // Timestamp for when the data was submitted
    },
  };

  try {
    // Insert data into DynamoDB
    await dynamoDB.put(params).promise();

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (err) {
    // Return error response if something goes wrong
    console.error('Error writing to DynamoDB:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form', error: err.message }),
    };
  }
};
