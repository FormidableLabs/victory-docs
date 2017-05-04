
// Format a string as an anchor tag ("Foo bar" -> "foo-bar")
const toAnchor = (content) => content.toLowerCase().replace(/[^\w]+/g, "-");

export default {
  toAnchor
};
