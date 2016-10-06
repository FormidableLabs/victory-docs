import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from "victory";
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

  renderContent(activePage) {
    if (activePage === "index") {
      return (
        <div className="Markdown">
          <Ecology
            overview={require("!!raw!../../../docs/index.md")}
            scope={{
              React, ReactDOM, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack
            }}
            playgroundtheme="elegant"
          />
        </div>
      );
    }
    return (
      <Markdown
        location={this.props.location}
        params={this.props.params}
        updateTocArray={this.updateTocArray.bind(this)}
        active={activePage}
      />
    );
  }

  render() {
    const activePage = this.props.params.component ?
      this.props.params.component :
      "index";

    return (
      <TitleMeta title="Victory | Documentation">
        <InternalPage sidebar={activePage}>
          { this.renderContent(activePage) }
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
