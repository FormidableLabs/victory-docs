import React from "react";
import Radium from "radium";

// Child components
import Page from "../../components/page";
import Guide from "./components/guide";
import TitleMeta from "../../components/title-meta";

class Guides extends React.Component {
  render() {
    const activeGuide = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Guides">
        <Page sidebar={activeGuide}>
          <Guide active={activeGuide} />
        </Page>
      </TitleMeta>
    );
  }
}

Guides.propTypes = {
  params: React.PropTypes.object
};

Guides.defaultProps = {
  params: null
};


export default Radium(Guides);
