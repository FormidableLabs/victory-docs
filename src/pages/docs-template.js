import React from "react";
import PropTypes from "prop-types";
import { withRouteData } from "react-static";
import Helmet from "react-helmet";
import config from "../../static-config-parts/site-data";
import Playground from "../partials/playground";
import Page from "../partials/page";

const DocsTemplate = ({ doc, sidebarContent }) => {
  const { content, data } = doc;
  const { title, scope } = data;
  return (
    <Page withSidebar sidebarContent={sidebarContent}>
      <Helmet>
        <title>{`${config.siteTitle} | ${title}`}</title>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      {/* TODO: Add edit this page link */}
      {/* <a className="SubHeading" href="">Edit this page</a> */}
      <Playground html={content} scope={scope} playgroundTheme="elegant" />
    </Page>
  );
};

DocsTemplate.propTypes = {
  children: PropTypes.array,
  doc: PropTypes.shape({
    data: PropTypes.object,
    content: PropTypes.string
  }),
  sidebarContent: PropTypes.array
};

export default withRouteData(DocsTemplate);
