import React from "react";
import Radium from "radium";

// Child Components
import Sidebar from "./sidebar";
import Header from "./header";
import { Footer, VictorySettings } from "formidable-landers";

class InternalPage extends React.Component {
  getStyles() {
    return {
      sidebar: {
        backgroundColor: "#D6CCC1",
        overflow: "auto",
        padding: `0 ${VictorySettings.gutter}px ${VictorySettings.gutter * 2}px`,
        zIndex: "1",

        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          padding: `0 0 ${VictorySettings.gutter * 2}px ${VictorySettings.gutter}px`,
          width: "270px"
        }
      },
      content: {
        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          marginLeft: "270px"
        }
      },
      article: {
        padding: `${VictorySettings.gutter}px ${VictorySettings.gutter}px`,
        [`@media ${VictorySettings.mediaQueries.medium}`]: {
          padding: `${VictorySettings.gutter * 2}px`
        },
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          padding: `${VictorySettings.gutter * 2}px ${VictorySettings.gutter * 3}px 0 ${VictorySettings.gutter * 3}px`
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const trademark = <div className="default">Victory is a trademark of Formidable Labs, Inc.</div>;

    /* eslint-disable max-len */
    return (
      <div>
        <Sidebar active={this.props.sidebar} style={styles.sidebar} />
        <main style={styles.content}>
          <Header />
          <article style={styles.article}>
            {this.props.children}
          </article>
          <Footer
            styleContainer={{
              margin: "0 3vw"
            }}
            trademark={trademark}
          />
        </main>
      </div>
    );
  /* eslint-enable max-len */
  }
}

InternalPage.propTypes = {
  children: React.PropTypes.node,
  sidebar: React.PropTypes.string
};

InternalPage.defaultProps = {
  children: null,
  sidebar: "index"
};

export default Radium(InternalPage);
