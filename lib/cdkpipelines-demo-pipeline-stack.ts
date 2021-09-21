import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";
import { CdkpipelinesDemoStage } from './cdkpipelines-demo-stage';
import * as ssm from '@aws-cdk/aws-ssm';
//import * as codepipeline from '@aws-cdk/aws-codepipeline';

/**
 * The stack that defines the application pipeline
 */
export class CdkpipelinesDemoPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      pipelineName: 'MyServicePipeline',

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
    // ...
    pipeline.addStage(new CdkpipelinesDemoStage(this, 'Prod', {
      env: { account: '994467015219', region: 'ap-northeast-1' }
    }));
    
    
    const testSSM = new ssm.StringParameter(this, 'BucketObjectNameSSM', {
      description: "Artifact Object Name",
      parameterName: "pipelineARN",
      stringValue: "arn:aws:codepipeline:ap-northeast-1:994467015219:MyServicePipeline",
    });
    
    const testSSM1 = new ssm.StringParameter(this, 'preBucket', {
      description: "Artifact Object Name",
      parameterName: "preBucket",
      stringValue: "s3://cdkpipelinesdemopipeline-pipelineartifactsbucketa-1ol973x27pexc/",
    });
    
    const testSSM2 = new ssm.StringParameter(this, 'objectNameSSM', {
      description: "Artifact Object Name",
      parameterName: "objectName",
      stringValue: "MyServicePipeline",
    });
    
    const testSSM3 = new ssm.StringParameter(this, 'fileSSM', {
      description: "Artifact Object Name",
      parameterName: "filePathName",
      stringValue: "s3://simpleappstack-mysimpleappbucket6b59014a-qzw3guyqvx1n/cdk-trigger.txt",
    });
   
  }
}