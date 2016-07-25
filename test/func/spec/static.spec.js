"use strict";

var { adapter } = require("../setup");
var { assert } = require("chai");

describe("Titles and links", function () {
  this.timeout(50000)

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
});
