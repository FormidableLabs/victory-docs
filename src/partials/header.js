import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

// Common
import { Header } from "formidable-landers";
import LOGO from "../../static/logotype-hero.svg";

export default class VictoryHeader extends Component {
  static propTypes = {
    home: PropTypes.bool
  }

  static defaultProps = {
    home: false
  }

  render() {
    const classes = this.props.home ? "victory isHome" : "victory";

    const victoryLogo = (
      <Link
        to="/"
        style={{ display: "block", height: "50px" }}
        dangerouslySetInnerHTML={{__html: LOGO}}
      />);

    return (
      <Header className={classes} logoProject={victoryLogo}>
        <div className="default" style={{textAlign: "center"}}>
          <Link to="/about/">
            About
          </Link>
          <Link to="/docs/">
            Docs
          </Link>
          <Link to="/guides/">
            Guides
          </Link>
          <Link to="/gallery/">
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

