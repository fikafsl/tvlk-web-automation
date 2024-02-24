import dayjs from './helpers/dayjs';
import { clickElement, getTextFromElement, inputText, waitUntilElementIsDisplayed } from './helpers/base-page';

export async function userIsOnCarRentalTab() {
    await waitUntilElementIsDisplayed('//*[@data-testid="rental-search-form"]');
}

export async function tapOnCarRentalTabButton(tabLabel: string) {
    await clickElement(`//*[@data-testid="rental-search-form"]//*[text()="${tabLabel}"]`);
}

export async function enterRentalLocation(locationName: string) {
    await clickElement('//*[@data-testid="rental-search-form-location-input"]');
    await inputText('//*[@data-testid="rental-search-form-location-input"]', locationName);
    await clickElement(`//*[@aria-label="${locationName}"]`);
}

async function selectDate(date: Date) {
    const startDate = dayjs(date).format('D-M-YYYY');
    await clickElement(`//*[@data-testid="date-cell-${startDate}"]`);
}

async function selectTime(hour: number, minute: number) {
    await clickElement(`//*[text()="Hour"]/following-sibling::div//*[text()="${hour}"]`);
    await clickElement(`//*[text()="Minute"]/following-sibling::div//*[text()="${minute}"]`);
    await clickElement('//*[@role="button"]//*[text()="Done"]');
}

export async function selectRentalStartDateTime(dateDiff: string, time: string) {
    await clickElement('//*[@data-testid="rental-search-form-date-input-start"]');
    const startDate = dayjs(new Date()).add(Number(dateDiff), 'day');
    await selectDate(startDate.toDate());
    await clickElement('//*[@data-testid="rental-search-form-time-input-start"]');
    const [hour, minute] = time.split(':').map(Number);
    await selectTime(hour, minute);
}

export async function selectRentalEndDateTime(dateDiff: string, time: string) {
    await clickElement('//*[@data-testid="rental-search-form-date-input-end"]');
    const startDate = dayjs(new Date()).add(Number(dateDiff), 'day');
    await selectDate(startDate.toDate());
    await clickElement('//*[@data-testid="rental-search-form-time-input-end"]');
    const [hour, minute] = time.split(':').map(Number);
    await selectTime(hour, minute);
}

export async function clickCarRentalSearchButton() {
    await clickElement('//*[@data-testid="rental-search-form-cta"]');
}
