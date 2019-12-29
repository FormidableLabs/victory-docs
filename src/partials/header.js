import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Prefetch } from "react-static";
// import SVGInline from "react-svg-inline"
// I don't love this solution but I've been having major trubs trying to get
// the base64 encoded string to convert to an svg, attempted using both
// raw-loader and svg-loader as well as raw html and a few svg react libs.
// Possibly something further upstream from the base react-static config,
// but this solution is working, which is always a nice feature to have.
import SVG from "react-inlinesvg";

import config from "../../static-config-parts/site-data";
import svgHeroLogo from "../../static/logotype-hero.svg";

class VictoryHeader extends Component {
  render() {
    const victoryLogo = (
      <Link
        to="/"
        style={{
          display: "block",
          height: "50px"
        }}
      >
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SVG style={{ height: "30px" }} src={svgHeroLogo} onLoad={src => src} />
      </Link>
    );

    return (
      <div className="victory" theme="light">
        <div className="default" style={{ paddingBottom: 0 }}>
          {/* <SVGInline svg={ LOGO }/> */}
          {victoryLogo}
          <Link to="/about/">About</Link>
          <Link to="/docs/">Docs</Link>
          <Prefetch path="/gallery">
            <Link to="/gallery/">Gallery</Link>
          </Prefetch>
          {config.projectLinks.map(link => (
            <a key={link.url} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
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
