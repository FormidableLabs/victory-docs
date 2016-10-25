import React from "react";
import { findIndex } from "lodash";

import MarkdownIt from "markdown-it";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor";
import Prism from "prismjs";
/* eslint-disable no-unused-vars */
// add more language support
import jsx from "prismjs/components/prism-jsx";
import sh from "prismjs/components/prism-bash";
import yaml from "prismjs/components/prism-yaml";
/* eslint-enable no-unused-vars */

// Child components
import Header from "../../components/header";
import Footer from "../../components/footer";
import TitleMeta from "../../components/title-meta";
import basename from "../../basename";

class Composed extends React.Component {
  componentWillMount() {
    this.setMarkdownRenderer(this.props.location.pathname);
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  /* eslint-disable camelcase, max-params */
  // Create a markdown renderer that builds relative links
  // based on the currentPath and site's base href
  setMarkdownRenderer(currentPath) {
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

    md.use(markdownItTocAndAnchor, {
      anchorLinkSymbol: "",
      anchorClassName: "Anchor"
    });

    // store the original rule
    const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, renderer) {
      return renderer.renderToken(tokens, idx, options);
    };

    // Update links to include the basename
    md.renderer.rules.link_open = function (tokens, idx, options, env, renderer) {
      const tokenAttrs = tokens[idx].attrs;
      const hrefIdx = findIndex(tokenAttrs, (arr) => arr.indexOf("href") >= 0);
      if (hrefIdx >= 0) {
        const href = tokenAttrs[hrefIdx];
        if (href.length > 1) {
          if (href[1].indexOf("#") === 0) {
            href[1] = `${basename}${currentPath}${href[1]}`;
            tokenAttrs.push(["aria-hidden", "true"]);
          }
        }
      }
      return defaultRender(tokens, idx, options, env, renderer);
    };

    this.md = md;
  }


  render() {
    return (
      <TitleMeta title="Victory: React Charting Library from Formidable | Composed">
        <Header />
        <article className="Article">
          <h1 className="u-noMargin">
            Victory Composed: Charts in a Flash
          </h1>
          <p>
            <img
              alt=""
              className="fancyBorder"
              src="http://i.imgur.com/RIoXvJB.gif"
            />
          </p>
          <div
            className="Markdown"
            dangerouslySetInnerHTML={{
              __html: this.md.render(require("!!raw!./components/markdown.md"))
            }}
          />
          <h2>
            About Formidable
          </h2>
          <p>
            Formidable is a Seattle-based consultancy and development shop, focused on open-source, full-stack JavaScript
            using React.js and Node.js, and the architecture of large-scale JavaScript applications. We build products for
            some of the world’s biggest companies, while helping their internal teams develop smart, thoughtful, and
            scalable systems.
          </p>
        </article>
        <Footer />
      </TitleMeta>
    );
  }
}

Composed.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default Composed;
