const { join } = require('path');

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 2,
    capabilities: [{
        maxInstances: 1,
        browserName: process.env.BROWSER === 'edge' ? 'MicrosoftEdge' : 'firefox'
    }],
    logLevel: 'info',
    outputDir: './logs',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        process.env.BROWSER === 'edge' ? 'edgedriver' : 'geckodriver'
    ],

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: function () {
        const chai = require('chai');
        global.expect = chai.expect;
    }
};