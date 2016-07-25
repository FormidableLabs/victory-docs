var adapter = require("builder-docs-archetype-dev/spec-helper").adapter;
var assert = require("chai").assert;

var TIMEOUT = 50000;

describe("Playgrounds", function () {
  this.timeout(TIMEOUT);

  it("should render component playgrounds", function () {
    return adapter.client
      .url(global.TEST_FUNC_BASE_URL + "docs/victory-animation")
      .elements(".Interactive > .playground", function (err, res) {
        assert.strictEqual(true, res.value.length >= 1);
      });
  });
});
