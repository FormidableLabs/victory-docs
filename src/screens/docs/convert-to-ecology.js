const fse = require("fs-extra");
const path = require("path");
const _ = require("lodash");

const COMPONENT_TEMPLATE = `import React from "react";
import EcologyRecipe from "../../../../components/ecology-recipe";

class <%= component %> extends React.Component {
  render() {
    return (
      <EcologyRecipe
        overview={require("!!raw!./ecology.md")}
        location={this.props.location}
        scope={{}}
      />
    );
  }
}

<%= component %>.propTypes = {
  location: React.PropTypes.object
};

export default <%= component %>;
`;

const COMPONENTS_DIR = path.join(__dirname, "components");

const convert = (dir, componentTemplate) => {
  const docs = fse.readdirSync(dir).filter((f) => !f.match(/\./));

  docs.forEach((doc) => {
    // Rename markdown file
    fse.moveSync(
      path.join(dir, doc, "docs.md"),
      path.join(dir, doc, "ecology.md")
    );

    // Create component
    const component = doc.split("-")
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");

    const componentJS = _.template(componentTemplate)({ component });
    fse.writeFileSync(path.join(dir, doc, "index.js"), componentJS);
  });

};

convert(COMPONENTS_DIR, COMPONENT_TEMPLATE);
