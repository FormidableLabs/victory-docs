import React from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import Prism from "prismjs";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

// Child components
import Page from "../../components/page";
import Guide from "./components/guide";
import TitleMeta from "../../components/title-meta";

class Guides extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() { // is this the right one??
    Prism.highlightAll();
  }

  render() {
    const activeGuide = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Guides">
        <Page
          sidebar={activeGuide}
          location={this.props.location}
        >
          <Guide
            active={activeGuide}
            location={this.props.location}
          />
        </Page>
      </TitleMeta>
    );
  }
}

Guides.propTypes = {
  location: PropTypes.object.isRequired,
  params: PropTypes.object
};

Guides.defaultProps = {
  params: null
};

export default Radium(Guides);
