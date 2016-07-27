var adapter = require("builder-docs-archetype-dev/spec-setup").adapter;
var expect = require("chai").expect;

var routes = require("../../../static-routes");

// Prefix all routes with /
routes = routes.map(function (r) {
  return r.indexOf("/") === 0 ? r : "/" + r;
});

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
            expect(res.value.length).to.eq(1);
          })
          // find every relative link
          .getAttribute("a[href]", "href").then(function (urls) {
            urls.forEach(function (u) {
              if (u.indexOf(global.TEST_FUNC_BASE_URL) === 0) {
                // if it's relative, ensure it's in static-routes
                expect(routes.indexOf(u.substr(global.TEST_FUNC_BASE_URL.length)))
                  .to.be.at.least(0);
              }
            });
          });
      });
    });
  });
});
