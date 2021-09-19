"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkpipelinesDemoPipelineStack = void 0;
const core_1 = require("@aws-cdk/core");
const pipelines_1 = require("@aws-cdk/pipelines");
const cdkpipelines_demo_stage_1 = require("./cdkpipelines-demo-stage");
//import * as codepipeline from '@aws-cdk/aws-codepipeline';
/**
 * The stack that defines the application pipeline
 */
class CdkpipelinesDemoPipelineStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const pipeline = new pipelines_1.CodePipeline(this, 'Pipeline', {
            // The pipeline name
            pipelineName: 'MyServicePipeline',
            // How it will be built and synthesized
            synth: new pipelines_1.ShellStep('Synth', {
                // Where the source can be found
                input: pipelines_1.CodePipelineSource.gitHub('Hans-67/cdkCICD', 'main'),
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
        pipeline.addStage(new cdkpipelines_demo_stage_1.CdkpipelinesDemoStage(this, 'Prod', {
            env: { account: '994467015219', region: 'ap-northeast-1' }
        }));
        
    
    }
}
exports.CdkpipelinesDemoPipelineStack = CdkpipelinesDemoPipelineStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmVzLWRlbW8tcGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGtwaXBlbGluZXMtZGVtby1waXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMEU7QUFDMUUsa0RBQWlGO0FBQ2pGLHVFQUFrRTtBQUNsRSw0REFBNEQ7QUFFNUQ7O0dBRUc7QUFDSCxNQUFhLDZCQUE4QixTQUFRLFlBQUs7SUFDdEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFFBQVEsR0FBRyxJQUFJLHdCQUFZLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNsRCxvQkFBb0I7WUFDcEIsWUFBWSxFQUFFLG1CQUFtQjtZQUVoQyx1Q0FBdUM7WUFDdkMsS0FBSyxFQUFFLElBQUkscUJBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLGdDQUFnQztnQkFDaEMsS0FBSyxFQUFFLDhCQUFrQixDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7Z0JBRTNELGdEQUFnRDtnQkFDaEQsUUFBUSxFQUFFO29CQUNSLFFBQVE7b0JBQ1IsZUFBZTtvQkFDZixlQUFlO2lCQUNoQjthQUNGLENBQUM7U0FDSixDQUFDLENBQUM7UUFFSCw4Q0FBOEM7UUFDOUMsTUFBTTtRQUNOLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSwrQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ3hELEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFO1NBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztDQUNGO0FBNUJELHNFQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCwgU2VjcmV0VmFsdWUsIFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBDb2RlUGlwZWxpbmUsIENvZGVQaXBlbGluZVNvdXJjZSwgU2hlbGxTdGVwIH0gZnJvbSBcIkBhd3MtY2RrL3BpcGVsaW5lc1wiO1xuaW1wb3J0IHsgQ2RrcGlwZWxpbmVzRGVtb1N0YWdlIH0gZnJvbSAnLi9jZGtwaXBlbGluZXMtZGVtby1zdGFnZSc7XG4vL2ltcG9ydCAqIGFzIGNvZGVwaXBlbGluZSBmcm9tICdAYXdzLWNkay9hd3MtY29kZXBpcGVsaW5lJztcblxuLyoqXG4gKiBUaGUgc3RhY2sgdGhhdCBkZWZpbmVzIHRoZSBhcHBsaWNhdGlvbiBwaXBlbGluZVxuICovXG5leHBvcnQgY2xhc3MgQ2RrcGlwZWxpbmVzRGVtb1BpcGVsaW5lU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3QgcGlwZWxpbmUgPSBuZXcgQ29kZVBpcGVsaW5lKHRoaXMsICdQaXBlbGluZScsIHtcbiAgICAgIC8vIFRoZSBwaXBlbGluZSBuYW1lXG4gICAgICBwaXBlbGluZU5hbWU6ICdNeVNlcnZpY2VQaXBlbGluZScsXG5cbiAgICAgICAvLyBIb3cgaXQgd2lsbCBiZSBidWlsdCBhbmQgc3ludGhlc2l6ZWRcbiAgICAgICBzeW50aDogbmV3IFNoZWxsU3RlcCgnU3ludGgnLCB7XG4gICAgICAgICAvLyBXaGVyZSB0aGUgc291cmNlIGNhbiBiZSBmb3VuZFxuICAgICAgICAgaW5wdXQ6IENvZGVQaXBlbGluZVNvdXJjZS5naXRIdWIoJ0hhbnMtNjcvY2RrQ0lDRCcsICdtYWluJyksXG4gICAgICAgICBcbiAgICAgICAgIC8vIEluc3RhbGwgZGVwZW5kZW5jaWVzLCBidWlsZCBhbmQgcnVuIGNkayBzeW50aFxuICAgICAgICAgY29tbWFuZHM6IFtcbiAgICAgICAgICAgJ25wbSBjaScsXG4gICAgICAgICAgICducG0gcnVuIGJ1aWxkJyxcbiAgICAgICAgICAgJ25weCBjZGsgc3ludGgnXG4gICAgICAgICBdLFxuICAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgLy8gVGhpcyBpcyB3aGVyZSB3ZSBhZGQgdGhlIGFwcGxpY2F0aW9uIHN0YWdlc1xuICAgIC8vIC4uLlxuICAgIHBpcGVsaW5lLmFkZFN0YWdlKG5ldyBDZGtwaXBlbGluZXNEZW1vU3RhZ2UodGhpcywgJ1Byb2QnLCB7XG4gICAgICBlbnY6IHsgYWNjb3VudDogJzk5NDQ2NzAxNTIxOScsIHJlZ2lvbjogJ2FwLW5vcnRoZWFzdC0xJyB9XG4gICAgfSkpO1xuICB9XG59Il19