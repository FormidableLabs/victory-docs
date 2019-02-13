import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../static-config-parts/site-data";
import Footer from "../partials/footer";

class MainLayout extends React.Component {
  //TODO/FIXME/ALERT since React-Static uses a different convention, this may bork things when deployed
  // with a siteroot
  getLocalTitle() {
    const capitalize = string =>
      string.charAt(0).toUpperCase() + string.slice(1);
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
    return (
      <div>
        {/*<div className="Page-wrapper u-fullHeight">*/}
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <Footer />
      </div>
    );
  }
}

// {children()}
MainLayout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.any,
  location: PropTypes.object
};

export default MainLayout;
