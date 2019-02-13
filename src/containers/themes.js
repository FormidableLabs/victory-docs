import React from "react";
import { withRouteData, withRouter, Link } from "react-static";
import Helmet from "react-helmet";
import config from "../../static-config-parts/site-data";
import Seo from "../partials/seo/index";
import Footer from "../partials/footer";
import Playground from "../partials/playground";
import Themes from "../pages/themes";
import ContentWithSidebarController from "../containers/content-with-sidebar-controller";

class DocsTemplate extends React.Component {
  render() {
    const { title, scope } = this.props.doc.data;
    return (
      <ContentWithSidebarController
        {...this.props}
        children={this.props.children}
        location={this.props.location}
        sidebarContent={this.props.sidebarContent}
      >
        <Helmet>
          <title>{`${config.siteTitle} |  ${title}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {/* <Seo postPath={slug} postNode={contents} postSEO />*/}
        <div className="Page-content">
          <article className="Article">
            <div className="Recipe Markdown">
              {/* TODO: Add edit this page link once everything is merged to master
              <a className="SubHeading" href="">Edit this page</a>
            */}
              <Themes />
            </div>
          </article>
        </div>
      </ContentWithSidebarController>
    );
  }
}

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
