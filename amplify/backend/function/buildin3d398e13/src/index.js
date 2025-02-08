const AWS = require('aws-sdk');  
const dynamoDB = new AWS.DynamoDB.DocumentClient();  

export const handler = async (event) => {

  const { name, email, job, description } = JSON.parse(event.body);

  // Define the parameters to insert the data into DynamoDB
  const params = {
    TableName: 'FormSubmissions', 
    Item: {
      id: AWS.util.uuid.v4(), 
      name,
      email,
      job,
      description,
      timestamp: new Date().toISOString(), 
    },
  };

  try {
    // Insert data into DynamoDB
    await dynamoDB.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (err) {

    console.error('Error writing to DynamoDB:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting form', error: err.message }),
    };
  }
};
