#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@aws-cdk/core");
const cdkpipelines_demo_pipeline_stack_1 = require("../lib/cdkpipelines-demo-pipeline-stack");
const app = new core_1.App();
new cdkpipelines_demo_pipeline_stack_1.CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
    env: { account: '994467015219', region: 'ap-northeast-1' },
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmVzLWRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGtwaXBlbGluZXMtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3Q0FBb0M7QUFDcEMsOEZBQXdGO0FBRXhGLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBRyxFQUFFLENBQUM7QUFFdEIsSUFBSSxnRUFBNkIsQ0FBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUU7SUFDdEUsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUU7Q0FDM0QsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBDZGtwaXBlbGluZXNEZW1vUGlwZWxpbmVTdGFjayB9IGZyb20gJy4uL2xpYi9jZGtwaXBlbGluZXMtZGVtby1waXBlbGluZS1zdGFjayc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcblxubmV3IENka3BpcGVsaW5lc0RlbW9QaXBlbGluZVN0YWNrKGFwcCwgJ0Nka3BpcGVsaW5lc0RlbW9QaXBlbGluZVN0YWNrJywge1xuICBlbnY6IHsgYWNjb3VudDogJzk5NDQ2NzAxNTIxOScsIHJlZ2lvbjogJ2FwLW5vcnRoZWFzdC0xJyB9LFxufSk7XG5cbmFwcC5zeW50aCgpOyJdfQ==