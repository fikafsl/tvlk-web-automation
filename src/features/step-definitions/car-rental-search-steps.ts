import { When } from '@wdio/cucumber-framework';
import { selectCarRentalByName, selectCarRentalProviderByName } from '../page-objects/car-rental-search-page';

When(/^user select car with name contains "([^"]*)"$/, async function (carName) {
    await selectCarRentalByName(carName);
});

When(/^user select car rental provider with name contains "([^"]*)"$/, async function (providerName) {
    await selectCarRentalProviderByName(providerName);
});
