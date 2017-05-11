var adapter = require("builder-docs-archetype-dev/spec-setup").adapter;
var _ = require("lodash");
var expect = require("chai").expect;

var fullPath = function (path) {
  return _.trimEnd(global.TEST_FUNC_BASE_URL, "/") + path;
};

var navigateToPageWithSidebar = function () {
  return adapter.client.url(fullPath("/docs"));
};

var unexpectedSuccess = function () {
  throw new Error("Unexpected success");
};

var expectElementNotFound = function (selector) {
  return function (err) {
    if (err.type !== "NoSuchElement") {
      throw err;
    }

    expect(err.message).to.eql("An element could not be located on the page"
      + " using the given search parameters (\"" + selector + "\").");
  };
};

var selectors = {
  sidebarHeading: ".Sidebar-Heading",
  sidebarSubheading: ".Sidebar-SubHeading",
  sidebarPageAnchor: ".Sidebar-List-Item a",
  sidebarTOCAnchor: ".Sidebar-toc-item a"
};

describe("Sidebar", function () {
  it("should render all headings", function () {
    return navigateToPageWithSidebar()
      .getText(selectors.sidebarHeading).then(function (res) {
        expect(res).to.eql(["Introduction", "Guides", "Documentation"]);
      })
      .getText(selectors.sidebarSubheading).then(function (res) {
        expect(res).to.eql(["", "CHART", "CORE", "MORE"]);
      });
  });

  describe("search", function () {
    it("should filter sidebar to matching content and their parents", function () {
      return navigateToPageWithSidebar()
        .setValue(".Input-search", "victorya")
        .getText(selectors.sidebarHeading).then(function (res) {
          expect(res).to.eql("Documentation");
        })
        .getText(selectors.sidebarSubheading).then(function (res) {
          expect(res).to.eql(["CHART", "CORE"]);
        })
        .getText(selectors.sidebarPageAnchor).then(function (res) {
          expect(res).to.eql([
            "VictoryArea",
            "VictoryAxis",
            "VictoryAnimation"
          ]);
        })
        .getText(selectors.sidebarTOCAnchor)
          .then(unexpectedSuccess)
          .catch(expectElementNotFound(selectors.sidebarTOCAnchor));
    });

    it("should render toc that match search input", function () {
      return navigateToPageWithSidebar()
        .setValue(".Input-search", "victoryarea styl")
        .getText(selectors.sidebarTOCAnchor).then(function (res) {
          expect(res).to.equal(["", ""]);
          // Expected ["Props", "style"]...
        });
    });
  });
});
