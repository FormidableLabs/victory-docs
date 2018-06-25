import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

// Common
import { Header } from "formidable-landers";
import config from "../../data/site-config";
import LOGO from "../../static/logotype-hero.svg";

class VictoryHeader extends Component {
  render() {
    const className = this.props.home ? undefined : "victory";

    const victoryLogo = this.props.home ?
      (
        <Link
          to="/"
          style={{ display: "block", height: "50px" }}
          dangerouslySetInnerHTML={{ __html: LOGO }}
        />
      ) : undefined;

    const victoryLink = this.props.home ?
      undefined :
      (
        <Link
          to="/"
          style={{ height: "50px" }}
          dangerouslySetInnerHTML={{ __html: LOGO }}
        />
      );

    return (
      <Header className={className} logoProject={victoryLogo}>
        <div className="default" style={{ paddingBottom: 0 }}>
          {victoryLink}
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
