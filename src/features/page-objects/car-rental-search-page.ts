import { clickElement } from './helpers/base-page';

export async function selectCarRentalByName(carName: string) {
    await clickElement(`(//*[contains(text(),"${carName}")])[1]/following::div[@role="button"][1][*[text()="Continue"]]`);
}

export async function selectCarRentalProviderByName(providerName: string) {
    await clickElement(`(//*[contains(text(),"${providerName}")])[1]/following::div[@role="button"][1][*[text()="Continue"]]`);
}
