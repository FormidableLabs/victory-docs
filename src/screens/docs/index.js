import React from "react";
import Radium from "radium";

// Child components
import InternalPage from "../../components/page-internal";
import Markdown from "./components/markdown";
import TitleMeta from "../../components/title-meta";

class Docs extends React.Component {
  constructor() {
    super();

    this.state = {
      tocArray: []
    };
  }

  updateTocArray(tocArray) {
    this.setState({tocArray});
  }

  render() {
    const activePage = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Documentation">
        <InternalPage sidebar={activePage}>
          <Markdown
            location={this.props.location}
            params={this.props.params}
            updateTocArray={this.updateTocArray.bind(this)}
            active={activePage}
          />
        </InternalPage>
      </TitleMeta>
    );
  }
}

Docs.propTypes = {
  location: React.PropTypes.object,
  params: React.PropTypes.object
};

Docs.defaultProps = {
  params: null
};


export default Radium(Docs);
