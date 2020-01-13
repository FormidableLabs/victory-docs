import React from "react";
import PropTypes from "prop-types";
import { withRouteData } from "react-static";
import Helmet from "react-helmet";
import config from "../../static-config-parts/site-data";
import Playground from "../partials/playground";
import Page from "../partials/page";

class DocsTemplate extends React.Component {
  render() {
    const { doc, sidebarContent, location } = this.props;
    const { content, data } = doc;
    const { title, scope } = data;
    return (
      <Page withSidebar sidebarContent={sidebarContent} location={location}>
        <Helmet>
          <title>{`${config.siteTitle} | ${title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* TODO: Add edit this page link */}
        {/* <a className="SubHeading" href="">Edit this page</a> */}
        <Playground html={content} scope={scope} playgroundTheme="elegant" />
      </Page>
    );
  }
}

DocsTemplate.propTypes = {
  children: PropTypes.array,
  doc: PropTypes.shape({
    data: PropTypes.object,
    content: PropTypes.string
  }),
  history: PropTypes.object,
  location: PropTypes.object,
  sidebarContent: PropTypes.array
};

export default withRouteData(({ doc, sidebarContent, ...rest }) => (
  <DocsTemplate doc={doc} sidebarContent={sidebarContent} {...rest} />
));
