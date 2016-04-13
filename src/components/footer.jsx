import React from "react";
import Radium from "radium";

// Settings
import { Footer, VictorySettings } from "formidable-landers";

class Foots extends React.Component {
  getStyles() {
    return {
      footer: {
        backgroundColor: VictorySettings.palerSand,
        borderStyle: "solid",
        borderWidth: "61px 41px",
        borderImageSource: `url("./static/footer-border.svg")`,
        borderImageSlice: "61 41",
        borderImageRepeat: "repeat",
        color: VictorySettings.paleMud,
        margin: `${VictorySettings.gutter}px`,
        padding: `${VictorySettings.gutter * 2}px`,
        position: "relative"
      },
      footerTop: {
        position: "absolute",
        top: "-61px",
        left: 0,
        right: 0,
        height: "62px",
        background: `url("./static/footer-top.svg") top center / 80px 80px no-repeat`
      },
      footerBottom: {
        position: "absolute",
        bottom: "-63px",
        left: 0,
        right: 0,
        height: "82px",
        background: `url("./static/footer-bottom.svg") top center / 80px 80px no-repeat`
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <Footer
        logoColor="black"
        styleOverrides={[styles.footer, this.props.style]}
      >
        <span style={styles.footerTop}/>
        <p style={{margin: `${VictorySettings.gutter}px 0 0 0`}}>
          Victory is a trademark of Formidable Labs, Inc.
        </p>
        <span style={styles.footerBottom}/>
      </Footer>
    );
  }
}

Foots.propTypes = {
  style: React.PropTypes.object
};

Foots.defaultProps = {
  style: null
};


export default Radium(Foots);
