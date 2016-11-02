var adapter = require("builder-docs-archetype-dev/spec-setup").adapter;
var expect = require("chai").expect;

var WAIT = 20000;

describe("Playgrounds", function () {
  it("should render", function () {
    return adapter.client
      .url("/guides/data-accessors")
      .waitForExist(".Interactive > .playground", WAIT)
      .elements(".Interactive > .playground").then(function (res) {
        expect(res.value.length > 0).to.eq(true);
      });
  });

  // Find the first playground CodeMirror instance,
  // update it, then check if the preview updated
  it("should reflect changes", function () {
    return adapter.client
      .url("/guides/data-accessors")
      .waitForExist(".Interactive > .playground", WAIT)
      .selectorExecute(".Interactive > .playground", function (els) {
        var editor = els[0].querySelector(".CodeMirror").CodeMirror;
        editor.setValue("mountNode.innerHTML = 'Test string'");
        editor.execCommand("insertTab"); /* Trigger onChange */
      })
      .getText(".Interactive > .playground > .playgroundPreview").then(function (text) {
        expect(text).to.eq("Test string");
      });
  });
});
