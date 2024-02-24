import { When } from '@wdio/cucumber-framework';
import {
    clickContinueToBookingForm,
    fillNotes,
    selectRentalDropoffLocation,
    selectRentalPickupLocation
} from '../page-objects/car-rental-detail-page';
import { delayMs } from '../page-objects/helpers/base-page';

When(/^user select "([^"]*)" at "([^"]*)" as the Pick-up Location$/, async function (pickupLocationType, address) {
    await selectRentalPickupLocation(pickupLocationType, address);
});

When(/^user select "([^"]*)" at "([^"]*)" as the Drop-off Location$/, async function (pickupLocationType, address) {
    await selectRentalDropoffLocation(pickupLocationType, address);
});

When(/^user fill notes "([^"]*)"$/, async function (notes) {
    await fillNotes(notes);
});

When('user click Continue button on rental detail page', async function () {
    await clickContinueToBookingForm();
    await delayMs(5000);
});
