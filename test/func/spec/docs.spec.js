"use strict";

var adapter = require("../setup").adapter;
var assert = require("chai").assert;

var TIMEOUT = 50000;

describe("Titles and links", function () {
  this.timeout(TIMEOUT);

  it("should render docs page with proper title", function () {
    return adapter.client
      .url(global.TEST_FUNC_BASE_URL + "docs")
      .getTitle().then(function (title) {
        assert.strictEqual(title, "Victory | Documentation");
      });
  });

  it("should have correct relative links in navigation", function () {
    return adapter.client
      .url(global.TEST_FUNC_BASE_URL + "docs")
      .click("nav > ul > li:nth-child(4) > a")
      .getUrl().then(function (url) {
        assert.strictEqual(url, global.TEST_FUNC_BASE_URL + "docs/victory-animation");
      })
      .getTitle().then(function (title) {
        assert.strictEqual(title, "VictoryAnimation | Documentation");
      });
  });

  it("should render component playgrounds", function () {
    return adapter.client
      .url(global.TEST_FUNC_BASE_URL + "docs/victory-animation")
      .elements(".Interactive > .playground", function (err, res) {
        assert.strictEqual(true, res.value.length >= 1);
      });
  });
});
