import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

// Common
import { Header } from "formidable-landers";
import LOGO from "../../static/logotype-hero.svg";

class VictoryHeader extends React.Component {
  render() {
    const isHome = this.props.home ? "isHome" : "";

    const victoryLogo = (
      <Link
        dangerouslySetInnerHTML={{ __html: LOGO }}
        to="/"
        style={{ display: "block", height: "50px" }}
      />);

    return (
      <Header
        className={`victory ${isHome}`}
        logoProject={victoryLogo}
      >
        <div className="default" style={{textAlign: "center"}}>
          <Link to="/about">
            About
          </Link>
          <Link to="/docs">
            Docs
          </Link>
          <Link to="/docs/faq">
            FAQ
          </Link>
          <Link to="/guides">
            Guides
          </Link>
          <Link to="/gallery">
            Gallery
          </Link>
          <a href="https://gitter.im/FormidableLabs/victory">
            Support
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
  home: PropTypes.bool
};

VictoryHeader.defaultProps = {
  home: false
};


export default VictoryHeader;
