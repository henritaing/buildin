const AWS = require('aws-sdk');  // Use CommonJS require for AWS SDK
const dynamoDB = new AWS.DynamoDB.DocumentClient();  

const handler = async (event) => {
    const allowedOrigins = ['https://main.d37yh6mm3isrxo.amplifyapp.com', '*']; // You can restrict this to your frontend's URL for security

    // Handle the OPTIONS preflight request (CORS preflight)
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': allowedOrigins.join(','),
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: ''
        };
    }

    // Handle the POST request to submit the form
    if (event.httpMethod === 'POST') {
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
                headers: {
                    'Access-Control-Allow-Origin': allowedOrigins.join(','),
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                body: JSON.stringify({ message: 'Form submitted successfully' }),
            };
        } catch (err) {
            console.error('Error writing to DynamoDB:', err);
            return {
                statusCode: 500,
                headers: {
                    'Access-Control-Allow-Origin': allowedOrigins.join(','),
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                body: JSON.stringify({ message: 'Error submitting form', error: err.message }),
            };
        }
    }

    // If the HTTP method is not POST or OPTIONS, return a 405 Method Not Allowed response
    return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
};

module.exports = { handler };
