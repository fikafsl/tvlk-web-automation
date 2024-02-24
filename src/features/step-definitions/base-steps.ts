import { Given } from '@wdio/cucumber-framework';
import { openUrl } from '../page-objects/helpers/base-page';

Given(/^user visit URL "([^"]*)"$/, async function (url) {
    await openUrl(url);
});
