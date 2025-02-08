const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    
    const allowedOrigins = ['https://main.d37yh6mm3isrxo.amplifyapp.com'];
    const headers = {
        'Access-Control-Allow-Origin': allowedOrigins.join(','),
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({})
        };
    }

    if (event.httpMethod === 'POST') {
        try {
            const { name, email, job, description } = JSON.parse(event.body);
            
            const params = {
                TableName: 'FormSubmissions-dev',
                Item: {
                    id: AWS.util.uuid.v4(),
                    name,
                    email,
                    job,
                    description,
                    timestamp: new Date().toISOString(),
                }
            };

            console.log('DynamoDB params:', JSON.stringify(params, null, 2));
            await dynamoDB.put(params).promise();
            console.log('Successfully wrote to DynamoDB');

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    message: 'Form submitted successfully'
                })
            };
        } catch (err) {
            console.error('Error:', err);
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({
                    message: 'Error submitting form',
                    error: err.message
                })
            };
        }
    }

    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({
            message: 'Method Not Allowed'
        })
    };
};

module.exports = { handler };