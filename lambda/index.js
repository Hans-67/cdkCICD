// exports.handler = async function (event) {
//   console.log("request:", JSON.stringify(event, undefined, 2));
//    return {
//     statusCode: 200,
//     headers: { "Content-Type": "text/html" },
//     body: `<meta charset="utf-8"><h1>test CDK AWS Lambda by Hans!</h1>`,
//   };
// };

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: 'Hello from a Lambda Function',
    statusCode: 200,
  };
}