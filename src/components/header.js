import React from "react";
import Radium from "radium";
import { Link } from "react-router";

// Common
import { Header } from "formidable-landers";
import LOGO from "../../static/logotype-hero.svg";

class VictoryHeader extends React.Component {
  render() {
    const padding = this.props.home ? "60px 0" : "40px 0";
    const minWidth = this.props.home ? "945px" : "1230px";

    // styleLogos={{
    //   margin: "0 auto 50px auto",
    //   [`@media only screen and (min-width: ${minWidth})`]: {
    //     margin: "0 auto 0 0"
    //   }
    // }}

    const victoryLogo = (
      <Link
        dangerouslySetInnerHTML={{ __html: LOGO }}
        to="/"
        style={{ display: "block", height: "50px" }}
      />);

    return (
      <Header
        logoProject={victoryLogo}
        padding={padding}
        styleBy={{ textIndent: "33px" }}
        styleContainer={{
          marginRight: "3vw",
          marginLeft: "3vw"
        }}
      >
        <div className="default" style={{textAlign: "center"}}>
          <Link to="/about">
            About
          </Link>
          <Link to="/docs">
            Docs
          </Link>
          <Link to="/composed">
            Composed
          </Link>
          <a href="https://gitter.im/FormidableLabs/victory">
            Gitter
          </a>
          <a href="https://github.com/FormidableLabs/victory">
            Github
          </a>
        </div>
      </Header>
    );
  }
}

VictoryHeader.propTypes = {
  home: React.PropTypes.bool
};

VictoryHeader.defaultProps = {
  home: false
};


export default Radium(VictoryHeader);
