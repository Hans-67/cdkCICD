import * as cdk from '@aws-cdk/core';
import { Runtime } from '@aws-cdk/aws-lambda';
//import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import * as path from 'path';
import {BucketDeployment, Source} from '@aws-cdk/aws-s3-deployment'
import { PolicyStatement } from '@aws-cdk/aws-iam';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
//import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apigw from '@aws-cdk/aws-apigateway';
import { CfnOutput } from '@aws-cdk/core';
import * as ssm from '@aws-cdk/aws-ssm';


export class CdkpipelinesDemoStack extends cdk.Stack {
  public readonly urlOutput: CfnOutput;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const main = new lambda.Function(this, "lambda", {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "index.handler",
      //code: lambda.Code.fromAsset(path.join(__dirname,'..',"lambda")),
      code: lambda.Code.fromAsset("lambda"),
    });
    // The code that defines your stack goes here
     const gw = new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: main
    });
    
    
    
    // const testSSM = new ssm.StringParameter(this, 'BucketObjectNameSSM', {
    //   description: "Artifact Object Name",
    //   parameterName: "/PreArtifact/object-name",
    //   stringValue: "test",
    // });
    
    
    this.urlOutput = new CfnOutput(this, 'Url', {
      value: gw.url,
    });
  }
}
