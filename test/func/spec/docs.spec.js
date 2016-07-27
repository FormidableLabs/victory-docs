var adapter = require("builder-docs-archetype-dev/spec-setup").adapter;
var expect = require("chai").expect;

var routes = require("../../../static-routes");

/* eslint-disable no-console */

var validateRelative = function (abs) {
  console.log("abs, ", abs);
  // check if link belongs to our app
  if (abs.indexOf(global.TEST_FUNC_BASE_URL) === 0) {
    // strip base url out
    var rel = abs.substr(global.TEST_FUNC_BASE_URL.length);
    console.log("rel, ", rel);
    // trim trailing slash
    if (rel !== "/" && rel[rel.length - 1] === "/") {
      rel = rel.substr(0, rel.length - 1);
    }

    console.log("rel-post", rel);
    // ensure it's in static-routes
    expect(routes.indexOf(rel)).to.be.at.least(0);
  }
};

describe("Docs", function () {
  it("should render a page with proper title", function () {
    return adapter.client
      .url("/docs")
      .getTitle().then(function (title) {
        expect(title).to.eq("Victory | Documentation");
      });
  });

  // Render every static route
  routes.forEach(function (r) {
    describe("Route " + r, function () {
      it("should render with no broken links", function () {
        return adapter.client
          .url(r)
          .elements("#content").then(function (res) {
            expect(res.value.length).to.eq(1); // Not a 404
          })
          // find every link
          .getAttribute("a[href]", "href").then(function (urls) {
            urls.forEach(validateRelative);
          });
      });
    });
  });
});
