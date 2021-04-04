exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./src/**/*.spec.ts'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://webtrader.roboforex.com',
    framework: 'mocha',
    mochaOpts: {
        timeout: 30000,
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    services: [
        'chromedriver',
    ],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
    before() {
        browser.setWindowSize(1280, 720);
    },
    afterTest: function (test: any, context: any, {error}: any) {
        if (error) {
            browser.takeScreenshot();
        }
    },
};
