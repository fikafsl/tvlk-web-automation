import { When } from '@wdio/cucumber-framework';
import {
    clickCarRentalSearchButton,
    enterRentalLocation,
    selectRentalEndDateTime,
    selectRentalStartDateTime,
    tapOnCarRentalTabButton,
    userIsOnCarRentalTab
} from '../page-objects/car-rental-page';

When('user is on the Car Rental tab', async function () {
    await userIsOnCarRentalTab();
});

When(/^user select "([^"]*)" button on Car Rental search form$/, async function (tabButton) {
    await tapOnCarRentalTabButton(tabButton);
});

When(/^user select "([^"]*)" as the Rental Location$/, async function (location) {
    await enterRentalLocation(location);
});

When(/^user select the Rental Start Date as "([^"]*)" days from today at "([^"]*)"$/, async function (startDate, startTime) {
    await selectRentalStartDateTime(startDate, startTime);
});

When(/^user select the Rental End Date as "([^"]*)" days from today at "([^"]*)"$/, async function (endDate, endTime) {
    await selectRentalEndDateTime(endDate, endTime);
});

When('user click Search Car Rental button', async function () {
    await clickCarRentalSearchButton();
});
