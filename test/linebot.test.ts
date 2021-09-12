import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Linebot from '../lib/linebot-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Linebot.LinebotStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
