import React from "react";
import { withRouteData, withRouter } from "react-static";
import Helmet from "react-helmet";
import config from "../../static-config-parts/site-data";
import Playground from "../partials/playground";
import ContentWithSidebarController from "../containers/content-with-sidebar-controller";

class DocsTemplate extends React.Component {
  render() {
    const { title, scope } = this.props.doc.data;
    const content = this.props.doc.content;
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
        <div className="Page-content">
          <article className="Article">
            <div className="Recipe Markdown">
              {/* TODO: Add edit this page link once everything is merged to master
              <a className="SubHeading" href="">Edit this page</a>
            */}
              <Playground html={content} scope={scope} theme="elegant" />
            </div>
          </article>
        </div>
      </ContentWithSidebarController>
    );
  }
}

export default withRouter(
  withRouteData(({ doc, sidebarContent, sidebarNestedList, ...rest }) => (
    <DocsTemplate doc={doc} sidebarContent={sidebarContent} {...rest} />
  ))
);
