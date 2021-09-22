import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";
import * as cp from "@aws-cdk/aws-codepipeline";
import { CdkpipelinesDemoStage } from './cdkpipelines-demo-stage';
import * as s3 from '@aws-cdk/aws-s3';
import * as ssm from '@aws-cdk/aws-ssm';
import * as cdk from '@aws-cdk/core';
//import * as codepipeline from '@aws-cdk/aws-codepipeline';

/**
 * The stack that defines the application pipeline
 */
export class CdkpipelinesDemoPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    // 由於要使用aws 原生的pipeline 裡面需要帶參數artifactBucket 因此建立此bucket
    const bucket = new s3.Bucket(this,'MySimpleAppBucket',{
      encryption: s3.BucketEncryption.S3_MANAGED,
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    
    // 因為cdk 提供的 pipeline 在建立deploy時會有問題，所以這邊先建立一個空的 原生的aws pipeline 
    const codePipeline = new cp.Pipeline(this, 'CDKPipeline', {
      artifactBucket: bucket
    })
    
    // 使用cdk CodePipeline 時，將前面建立的空的aws pipeline 放到這邊，因為已經有自訂，所以不需要原來提供的pipelineName: 'MyServicePipeline'
    const pipeline = new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      codePipeline,
      //pipelineName: 'MyServicePipeline',

       // How it will be built and synthesized
       synth: new ShellStep('Synth', {
         // Where the source can be found
         input: CodePipelineSource.gitHub('Hans-67/cdkCICD', 'main'),
         
         // Install dependencies, build and run cdk synth
         commands: [
           'npm ci',
           'npm run build',
           'npx cdk synth'
         ],
       }),
    });




    
    // This is where we add the application stages
    pipeline.addStage(new CdkpipelinesDemoStage(this, 'Prod', {
      env: { account: '994467015219', region: 'ap-northeast-1' }
    }));
    
    
    // 如果要export pipeline 需要使用codepipeline property is pipelineArn
    const pipelineArn = new ssm.StringParameter(this, 'pipelineArnSSM', {
      description: "pipeline's ARN",
      parameterName: "pipelineARN",
      stringValue: codePipeline.pipelineArn,
    });
    
   
    // 這邊是為了將 檔案被更新的bucket export到SSM，但實際上在這邊並沒有產生此bucket
    const bucketName = new ssm.StringParameter(this, 'BucketNameSSM', {
      description: "Bucket Name",
      parameterName: "BucketName",
      stringValue: "simpleappstack-mysimpleappbucket6b59014a-qzw3guyqvx1n",
    });
  }
}