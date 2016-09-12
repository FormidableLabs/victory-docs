import React from "react";
import Radium from "radium";

// Common
import { VictorySettings } from "formidable-landers";

class ShowcaseApp extends React.Component {
  getStyles() {
    return {
      copy: {
        maxWidth: "35em"
      },
      grid: {
        display: "block",
        margin: `${VictorySettings.gutter * 2}px 0 0 ${VictorySettings.gutter * -1}px`,
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: `0 0 0 ${VictorySettings.gutter * -2}px`
        }
      },
      col: {
        padding: `${VictorySettings.gutter}px`,
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          flex: "1",
          padding: `${VictorySettings.gutter * 2}px`
        }
      },
      colImg: {
        maxHeight: "360px",
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          maxHeight: "none"
        }
      },
      img: {
        display: "block",
        maxHeight: "320px",
        [`@media ${VictorySettings.mediaQueries.large}`]: {
          maxHeight: "100%"
        }
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.grid}>
        <div style={[styles.col, styles.colImg]}>
          <img
            alt={this.props.screenshot.alt}
            className="fancyBorder"
            src={this.props.screenshot.src}
            style={styles.img}
          />
        </div>
        <div style={styles.col}>
          <h3 style={[styles.copy, {marginTop: 0}]}>
            {this.props.company}
          </h3>
          <p style={styles.copy}>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

ShowcaseApp.propTypes = {
  screenshot: React.PropTypes.shape({
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired
  }),
  company: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  even: React.PropTypes.bool.isRequired
};

export default Radium(ShowcaseApp);
