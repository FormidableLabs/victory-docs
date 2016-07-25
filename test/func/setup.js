var rowdy = require("rowdy");
var MochaAdapter = rowdy.adapters.mocha;

var config = require("rowdy/config");
config.options.driverLib = "webdriverio";
rowdy(config);

module.exports = {
  adapter: new MochaAdapter()
};
