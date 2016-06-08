require('core-js');
require('ts-helpers');
require('zone.js/dist/zone.js');
require('zone.js/dist/long-stack-trace-zone.js');
require('zone.js/dist/jasmine-patch.js');
require('zone.js/dist/async-test.js');
require('zone.js/dist/fake-async-test.js');

Error.stackTraceLimit = Infinity;

require('reflect-metadata');

const testContext = require.context('./spec', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');
testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
