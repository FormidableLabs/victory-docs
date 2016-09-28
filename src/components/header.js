import React from "react";
import Radium from "radium";
import { Link } from "react-router";
const RadiumLink = Radium(Link);

// Common
import { Header } from "formidable-landers";
import LOGO from "../../static/logotype-hero.svg";

class VictoryHeader extends React.Component {
  render() {
    const padding = this.props.home ? "60px 0" : "40px 0";
    const minWidth = this.props.home ? "945px" : "1230px";

    const victoryLogo = (
      <RadiumLink
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
        styleLogos={{
          margin: "0 auto 50px auto",
          [`@media only screen and (min-width: ${minWidth})`]: {
            margin: "0 auto 0 0"
          }
        }}
      >
        <div className="default" style={{textAlign: "center"}}>
          <RadiumLink to="/about">
            About
          </RadiumLink>
          <RadiumLink to="/about#showcase">
            Showcase
          </RadiumLink>
          <RadiumLink to="/docs">
            Docs
          </RadiumLink>
          <a href="https://github.com/FormidableLabs/victory/issues">
            Issues
          </a>
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
