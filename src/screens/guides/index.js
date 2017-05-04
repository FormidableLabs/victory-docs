import React from "react";
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
  constructor(props) {
    super(props);
    this.state = {
      tocArray: []
    };
  }
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() { // is this the right one??
    Prism.highlightAll();
  }

  updateTocArray(tocArray) {
    this.setState({ tocArray });
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
          tocArray={this.state.tocArray}
        >
          <Guide
            active={activeGuide}
            location={this.props.location}
            updateTocArray={this.updateTocArray.bind(this)}
          />
        </Page>
      </TitleMeta>
    );
  }
}

Guides.propTypes = {
  location: React.PropTypes.object.isRequired,
  params: React.PropTypes.object
};

Guides.defaultProps = {
  params: null
};

export default Radium(Guides);
