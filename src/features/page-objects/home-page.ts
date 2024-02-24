import { clickElement } from './helpers/base-page';

export async function tapOnProductMenuIcon(menu: string) {
    switch (menu) {
        case 'Car Rental':
            await clickElement('//*[@data-id="IcProductDuotoneCarRentalFill"]');
            break;
        default:
            throw new Error(`Product menu ${menu} is not found`);
    }
}
