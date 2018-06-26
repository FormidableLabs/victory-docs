import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

// Common
import { Header } from "formidable-landers";
import config from "../../data/site-config";
import LOGO from "../../static/logotype-hero.svg";

class VictoryHeader extends Component {
  render() {
    const victoryLogo = (
      <Link
        to="/"
        style={{ display: "block", height: "50px" }}
        dangerouslySetInnerHTML={{ __html: LOGO }}
      />
    );

    return (
      <Header className={"victory"} theme="light">
        <div className="default" style={{ paddingBottom: 0 }}>
          {victoryLogo}
          <Link to="/about/">About</Link>
          <Link to="/docs/">Docs</Link>
          <Link to="/docs/faq">FAQ</Link>
          <Link to="/guides/">Guides</Link>
          <Link to="/gallery/">Gallery</Link>
          {config.projectLinks.map((link) => {
            return (
              <a key={link.url} href={link.url}>
                {link.label}
              </a>
            );
          })}
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
