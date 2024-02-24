import { config as configDotEnv } from 'dotenv';
import { CucumberJsJsonReporter } from 'wdio-cucumberjs-json-reporter';
import { generate } from 'multiple-cucumber-html-reporter';
import { removeSync } from 'fs-extra';

export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // NOTE: This is just a place holder and will be overwritten by each specific configuration
    specs: [],
    //
    // ============
    // Capabilities
    // ============
    // NOTE: This is just a place holder and will be overwritten by each specific configuration
    capabilities: [],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 55 * 1000,
    connectionRetryTimeout: 120 * 1000,
    connectionRetryCount: 3,
    services: [],
    framework: 'cucumber',
    reporters: ['spec', 'cucumberjs-json'],
    cucumberOpts: {
        // CucumberOption's timeout should be at least 5s longer than WDIO's waitforTimeout
        timeout: 65 * 1000,
        require: ['./src/features/step-definitions/**/*.ts'],
        backtrace: true
    },
    //
    // =====
    // Hooks
    // =====
    // Gets executed before test execution begins.
    before: () => {
        configDotEnv();
    },
    // Gets executed after a Cucumber Scenario.
    afterScenario: async (world, result) => {
        if (!result.passed) {
            CucumberJsJsonReporter.attach(await driver.takeScreenshot(), 'image/png');
        }
        await browser.reset();
    },
    // Gets executed once before all workers get launched.
    onPrepare: () => {
        try {
            removeSync('.tmp/');
        } catch {
            // Do nothing
        }
    },
    // Gets executed after all workers got shut down and the process is about to exit.
    onComplete: () => {
        generate({
            jsonDir: '.tmp/json/',
            reportPath: '.tmp/report/',
            pageTitle: 'Traveloka Web HTML Reporter',
            reportName: 'Traveloka Web HTML Reporter',
            displayDuration: true,
            displayReportTime: true
        });
    }
};
