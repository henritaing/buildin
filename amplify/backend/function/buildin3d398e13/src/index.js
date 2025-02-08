const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {
    // Add detailed logging
    console.log('Full event:', JSON.stringify(event, null, 2));
    console.log('HTTP Method:', event.httpMethod);
    console.log('Request context:', JSON.stringify(event.requestContext, null, 2));
    console.log('Event body:', event.body);
    
    const allowedOrigins = ['https://main.d37yh6mm3isrxo.amplifyapp.com'];
    const headers = {
        'Access-Control-Allow-Origin': allowedOrigins.join(','),
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    // Check both possible locations for HTTP method
    const method = event.httpMethod || event.requestContext?.httpMethod;
    console.log('Detected method:', method);

    if (method === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({})
        };
    }

    if (method === 'POST') {
        try {
            console.log('Processing POST request');
            const bodyContent = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
            console.log('Parsed body:', bodyContent);

            const { name, email, job, description } = bodyContent;
            
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

    console.log('Method not allowed:', method);
    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({
            message: 'Method Not Allowed'
        })
    };
};

module.exports = { handler };