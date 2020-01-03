import React from "react";
import PropTypes from "prop-types";
import { withRouteData, withRouter } from "react-static";
import Helmet from "react-helmet";
import config from "../../static-config-parts/site-data";
import Themes from "../pages/themes";
import Page from "./page";

class DocsTemplate extends React.Component {
  render() {
    const { title } = this.props.doc.data;
    return (
      <Page withSidebar sidebarContent={this.props.sidebarContent}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* <Seo postPath={slug} postNode={contents} postSEO />*/}
        {/* TODO: Add edit this page link once everything is merged to master
              <a className="SubHeading" href="">Edit this page</a>
            */}
        <Themes />
      </Page>
    );
  }
}

DocsTemplate.propTypes = {
  children: PropTypes.array,
  doc: PropTypes.shape({
    data: PropTypes.object
  }),
  location: PropTypes.object,
  sidebarContent: PropTypes.array
};

export default withRouter(
  withRouteData(({ doc, sidebarContent, sidebarNestedList, ...rest }) => (
    <DocsTemplate
      doc={doc}
      sidebarContent={sidebarContent}
      sidebarNestedList={sidebarNestedList}
      {...rest}
    />
  ))
);
