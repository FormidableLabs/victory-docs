var markdown = require("../../../src/markdown");
var expect = require("chai").expect;

describe("Markdown", function () {
  describe("#parseToc", function () {
    it("should parse the table of contents from markdown based off the headings", function () {
      var mdContent = "# Foo Heading\n## Bar\n ## Fiz\n# Baz Heading\n ### Fin";

      var toc = markdown.parseToc(mdContent);

      expect(toc).to.eql([{
        level: 1,
        content: "Foo Heading",
        anchor: "foo-heading"
      }, {
        level: 2,
        content: "Bar",
        anchor: "bar"
      }, {
        level: 2,
        content: "Fiz",
        anchor: "fiz"
      }, {
        level: 1,
        content: "Baz Heading",
        anchor: "baz-heading"
      }, {
        level: 3,
        content: "Fin",
        anchor: "fin"
      }]);
    });
  });
});
