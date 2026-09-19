import type { Locator } from '@playwright/test';
import { logger } from '../logger/logger';
 
// common action wrappers and logging and error handing.
 
export class CommonActions {
    async fillText(locator: Locator, value: string, fieldName: string): Promise<void> {
        try {
            logger.info(`Entering value in ${fieldName}`);
            await locator.fill(value);
        } catch (error) {
            logger.error(`could not enter value in ${fieldName}`);
            throw error;
        }
    }
    async clickElement(locator: Locator, elementName: string): Promise<void> {
        try {
            logger.info(`Clicking ${elementName}`);
            await locator.click();
            logger.info(`${elementName} clicked successfully`);
        } catch (error) {
            logger.error(`Could not click ${elementName}`);
            throw error;
        }
    }
}