import React from "react";
import Radium from "radium";

// Child components
import InternalPage from "../../components/page-internal";
import Markdown from "./components/markdown";
import TitleMeta from "../../components/title-meta";

class Docs extends React.Component {
  render() {
    const activePage = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Documentation">
        <InternalPage sidebar={activePage}>
          <Markdown active={activePage} />
        </InternalPage>
      </TitleMeta>
    );
  }
}

Docs.propTypes = {
  params: React.PropTypes.object
};

Docs.defaultProps = {
  params: null
};


export default Radium(Docs);
