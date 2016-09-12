import React from "react";
import Radium from "radium";
import { Link } from "react-router";

// Settings
import { VictorySettings } from "formidable-landers";
import OOKLA from "../../../../static/logo-ookla.svg";
import VIACOM from "../../../../static/logo-viacom.svg";
import POSTMARK from "../../../../static/logo-postmark.svg";
import FIVETHIRTYEIGHT from "../../../../static/logo-fivethirtyeight.svg";

class Companies extends React.Component {
  getStyles() {
    return {
      heart: {
        color: VictorySettings.red,
        width: "50px"
      },
      img: {
        opacity: 0.4
      },
      list: {
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyleType: "none",
        marginTop: `${VictorySettings.gutter}px`,
        marginLeft: `${VictorySettings.gutter * -2}px`,
        padding: 0
      },
      logo: {
        color: VictorySettings.darkSand,
        height: "50px",
        marginTop: `${VictorySettings.gutter}px`,
        marginBottom: `${VictorySettings.gutter * 2}px`,
        maxWidth: "200px",
        paddingLeft: `${VictorySettings.gutter * 2}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={this.props.style}>
        <h2>
          A few of our fans
        </h2>
        <ul style={styles.list}>
          <li style={styles.logo} dangerouslySetInnerHTML={{__html: FIVETHIRTYEIGHT}} />
          <li style={styles.logo} dangerouslySetInnerHTML={{__html: OOKLA}} />
          <li style={styles.logo} dangerouslySetInnerHTML={{__html: VIACOM}} />
          <li style={styles.logo} dangerouslySetInnerHTML={{__html: POSTMARK}} />
        </ul>

        <Link to="/about#showcase">View Showcase</Link>
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
