import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../partials/header";
import config from "../../data/site-config";
import "../styles/styles.css";

export default class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    history: PropTypes.any,
    location: PropTypes.object
  }

  getLocalTitle() {
    const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("guides/")) {
      const guide = currentPath
        .replace("guides/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Guides ${guide}`;
    } else if (currentPath.includes("docs/")) {
      const doc = currentPath
        .replace("docs/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(doc)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    console.log('LAYOUTS LOCAL TITLE', this.getLocalTitle());

    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");

    return (
      <div className="u-fullHeight">
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header home={currentPath === "" ? true : false} />
        {children()}
      </div>
    );
  }
}
