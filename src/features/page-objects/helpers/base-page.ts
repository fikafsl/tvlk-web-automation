export async function openUrl(url: string) {
    return await browser.url(url);
}

export async function waitUntilElementIsDisplayed(locator: string) {
    await $(locator).waitForDisplayed({ timeoutMsg: `Element ${locator} is not displayed` });
    return $(locator);
}

export async function waitUntilTextIsDisplayed(text: string) {
    const locator = `/*//*[@text="${text}"]`;
    await $(locator).waitForDisplayed({ timeoutMsg: `Text ${text} is not displayed` });
    return $(locator);
}

export async function waitUntilPageContainsText(text: string) {
    const locator = `/*//*[contains(@text, '${text}')]`;
    await $(locator).waitForDisplayed({ timeoutMsg: `Page does not contain text ${text}` });
    return $(locator);
}

export async function pageShouldNotContainText(text: string) {
    const locator = `/*//*[contains(@text, '${text}')]`;
    const elements = await $$(locator);
    return !Boolean(elements.length);
}

export async function getTextFromElement(locator: string) {
    const elementText = await $(locator).getText();
    return elementText;
}

export async function elementTextShouldMatch(locator: string, expectedValue: string) {
    const elementText = await getTextFromElement(locator);
    if (elementText === expectedValue) {
        return true;
    }
    throw new Error(`Element text for ${locator}: ${elementText} is not matches the expected value ${expectedValue}`);
}

export async function elementShouldContainText(locator: string, text: string) {
    const element = await $(locator);
    await expect(element).toHaveTextContaining(text);
}

export async function clickElement(locator: string) {
    const element = await waitUntilElementIsDisplayed(locator);
    await element.click();
}

export async function clickElementIndex(locator: string, index: number) {
    const element = await $$(locator)[index];
    await element?.click();
}

export async function clickText(text: string) {
    const element = await waitUntilTextIsDisplayed(text);
    await element.click();
}

export async function inputText(locator: string, text: string) {
    const element = await waitUntilElementIsDisplayed(locator);
    await element.click();
    await element.clearValue();
    await element.setValue(text);
    //await element.addValue(text);
}

export const delayMs = async (ms: number) => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
};
