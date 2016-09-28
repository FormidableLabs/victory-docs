import React from "react";
import Radium from "radium";

// Settings
import { VictorySettings } from "formidable-landers";
import OOKLA from "../../../../static/logo-ookla.svg";
import VIACOM from "../../../../static/logo-viacom.svg";
import POSTMARK from "../../../../static/logo-postmark.svg";
import FIVETHIRTYEIGHT from "../../../../static/logo-fivethirtyeight.svg";

class Companies extends React.Component {
  getStyles() {
    return {
      heading: {
        color: VictorySettings.darkerSand,
        fontFamily: VictorySettings.sansSerif,
        fontSize: "0.8em",
        letterSpacing: "0.15em",
        margin: `${VictorySettings.gutter}px 0 0`,
        textTransform: "uppercase"
      },
      list: {
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        listStyleType: "none",
        marginTop: 0,
        padding: 0
      },
      logo: {
        color: VictorySettings.darkestSand,
        height: "50px",
        marginTop: `${VictorySettings.gutter}px`,
        marginBottom: `${VictorySettings.gutter * 2}px`,
        paddingLeft: `${VictorySettings.gutter * 2}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={this.props.style}>
        <h2 style={styles.heading}>
          A few of our fans
        </h2>
        <ul style={styles.list}>
          <li style={[ styles.logo, { maxWidth: "200px" } ]} dangerouslySetInnerHTML={{__html: OOKLA}} />
          <li style={[ styles.logo, { maxWidth: "200px" } ]} dangerouslySetInnerHTML={{__html: VIACOM}} />
          <li style={[ styles.logo, { maxWidth: "300px" } ]} dangerouslySetInnerHTML={{__html: FIVETHIRTYEIGHT}} />
          <li style={[ styles.logo, { maxWidth: "200px" } ]} dangerouslySetInnerHTML={{__html: POSTMARK}} />
        </ul>
      </div>
    );
  }
}

Companies.propTypes = {
  style: React.PropTypes.object
};

Companies.defaultProps = {
  style: null
};

export default Radium(Companies);
