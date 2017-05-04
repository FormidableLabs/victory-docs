const fse = require("fs-extra");
const path = require("path");
const _ = require("lodash");

const COMPONENT_TEMPLATE = `import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class <%= component %> extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        updateTocArray={this.props.updateTocArray}
        scope={{}}
      />
    );
  }
}

<%= component %>.propTypes = {
  location: React.PropTypes.object.isRequired,
  updateTocArray: React.PropTypes.func.isRequired
};

export default <%= component %>;
`;

const COMPONENTS_DIR = path.join(__dirname, "components");

const convert = (dir, componentTemplate) => {
  const docs = fse.readdirSync(dir).filter((f) => !f.match(/\./));

  docs.forEach((doc) => {
    // Rename markdown file

    try {
      fse.moveSync(
        path.join(dir, doc, "docs.md"),
        path.join(dir, doc, "ecology.md")
      );
    } catch (e) {
      console.log("%s markdown file already renamed", doc);
    }

    // Create component
    const component = doc.split("-")
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");

    const componentJS = _.template(componentTemplate)({ component });
    const componentFilename = path.join(dir, doc, "index.js");

    try {
      fse.unlinkSync(componentFilename);
    } catch (e) {
      console.log("Component file %s already exists", componentFilename);
    }

    fse.writeFileSync(componentFilename, componentJS);
  });

};

convert(COMPONENTS_DIR, COMPONENT_TEMPLATE);
