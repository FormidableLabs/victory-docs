/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import favicon from "../static/logos/favicon.ico";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off"*/
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}

          {/* Fonts */}
          <link href="https://formidable.com/open-source/fonts.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Andada" rel="stylesheet" />
          
          {/* CodeMirror */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"/>
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
