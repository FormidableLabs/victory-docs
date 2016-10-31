import React from "react";
import Radium from "radium";

// Child components
import InternalPage from "../../components/page-internal";
import Guide from "./components/guide";
import TitleMeta from "../../components/title-meta";

class Guides extends React.Component {
  render() {
    const activeGuide = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Guides">
        <InternalPage sidebar={activeGuide}>
          <Guide active={activeGuide} />
        </InternalPage>
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
