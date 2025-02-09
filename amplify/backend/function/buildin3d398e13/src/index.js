const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {
    // Add debug logging right at the start
    console.log('=============== DEBUG START ===============');
    console.log('Event type:', typeof event);
    console.log('Full event:', JSON.stringify(event, null, 2));
    console.log('HTTP Method:', event.httpMethod);
    console.log('Request Method:', event.requestContext?.httpMethod);
    console.log('Body type:', typeof event.body);
    console.log('Body content:', event.body);
    console.log('=============== DEBUG END ===============');

    const allowedOrigins = ['https://main.d37yh6mm3isrxo.amplifyapp.com'];
    const headers = {
        'Access-Control-Allow-Origin': allowedOrigins.join(','),
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    // Check method from both possible locations
    const method = event.requestContext?.httpMethod || event.httpMethod;
    console.log('Detected method:', method);

    try {
        if (method === 'POST') {
            console.log('Processing POST request');
            let bodyContent;
            try {
                bodyContent = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
                console.log('Parsed body:', bodyContent);
            } catch (e) {
                console.error('Error parsing body:', e);
                throw new Error('Invalid request body');
            }

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
        }

        console.log(`Method ${method} not allowed`);
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({
                message: 'Method Not Allowed'
            })
        };
    } catch (err) {
        console.error('Error:', err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                message: 'Error processing request',
                error: err.message
            })
        };
    }
};

module.exports = { handler };