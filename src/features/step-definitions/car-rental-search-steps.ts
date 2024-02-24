import { When } from '@wdio/cucumber-framework';
import { selectCarRentalByName, selectCarRentalProviderByName } from '../page-objects/car-rental-search-page';
import { waitUntilPageContainsText } from '../page-objects/helpers/base-page';

When(/^user select car with name contains "([^"]*)"$/, async function (carName) {
    await waitUntilPageContainsText('Car Rental Without Driver');
    await selectCarRentalByName(carName);
});

When(/^user select car rental provider with name contains "([^"]*)"$/, async function (providerName) {
    await waitUntilPageContainsText('Select Rental Provider');
    await selectCarRentalProviderByName(providerName);
});
