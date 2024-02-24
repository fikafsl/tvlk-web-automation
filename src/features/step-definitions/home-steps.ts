import { Given } from '@wdio/cucumber-framework';
import { tapOnProductMenuIcon } from '../page-objects/home-page';

Given(/^user select "([^"]*)" product on Homepage$/, async function (productMenu) {
    await tapOnProductMenuIcon(productMenu);
});
