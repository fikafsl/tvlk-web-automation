import { clickElement, delayMs, inputText } from './helpers/base-page';

export async function selectRentalPickupLocation(locationTypeLabel: string, address: string) {
    await clickElement(`//*[@id="RENTAL_PICKUP_LOCATION"]//*[@role="radio"]//*[text()="${locationTypeLabel}"]`);
    await clickElement(
        `//*[@id="RENTAL_PICKUP_LOCATION"]//*[text()="${locationTypeLabel}"]/following::*[text()="Pick-up Location"]/following-sibling::div[1]`
    );
    await clickElement(`//*[@id="RENTAL_PICKUP_LOCATION"]//*[contains(text(),"${address}")][1]`);
}

export async function selectRentalDropoffLocation(locationTypeLabel: string, address: string) {
    await delayMs(5000);
    await clickElement(`//*[@id="RENTAL_DROPOFF_LOCATION"]//*[@role="radio"]//*[text()="${locationTypeLabel}"]`);
    await inputText(
        `//*[@id="RENTAL_DROPOFF_LOCATION"]//*[text()="${locationTypeLabel}"]/following::*[text()="Search location or address"]/following::input[1]`,
        address
    );
    await clickElement(`//*[@id="RENTAL_DROPOFF_LOCATION"]//*[@aria-label="${address}"][1]`);
    await delayMs(5000);
}

export async function fillNotes(notes: string) {
    await inputText('//*[@placeholder="Additional notes (optional)"]', notes);
}

export async function clickContinueToBookingForm() {
    await clickElement('//*[@role="button"][*[text()="Continue"]][1]');
}
