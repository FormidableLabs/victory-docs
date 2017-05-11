var adapter = require("builder-docs-archetype-dev/spec-setup").adapter;
var _ = require("lodash");
var expect = require("chai").expect;

var fullPath = function (path) {
  return _.trimEnd(global.TEST_FUNC_BASE_URL, "/") + path;
};

describe.only("Sidebar", function () {
  it("should render all headings", function () {
    return adapter.client
      .url(fullPath("/docs"))
      .getText(".Sidebar-Heading").then(function (res) {
        expect(res).to.eql(["Introduction", "Guides", "Documentation"]);
      });
  });
});
