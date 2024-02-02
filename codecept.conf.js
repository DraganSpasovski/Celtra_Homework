const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',

  helpers: {
    Playwright: {
      url: "https://test.celtra.com/preview/f576e12f#overrides.deviceInfo.deviceType=Phone",
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
      waitForNavigation: 'domcontentloaded'

    }
  },
  multiple: {
    chrome: {
      browsers: ["chromium"]
    },
    firefox: {
      browsers: ["firefox"]
    },
    webkit: {
      browsers: ["webkit"]
    }
  },
  include: {
    I: './steps_file.js',
    locatorsPage: "./pages/locators.js",
  },
  name: 'testfolder',

  plugins: {
    testmatio:
    {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    }
  }
}