import React from "react";

const scrollScript = `
    document.addEventListener("DOMContentLoaded", function(event) {
        var hash = window.decodeURI(location.hash.replace('#', ''))
        const headerOffset = 57;
        if (hash !== '') {
        var element = document.getElementById(hash)
        if (element) {
        var offset = element.offsetTop + headerOffset;
        
        
        // Wait for the browser to finish rendering before scrolling.
        setTimeout((function() {
        document.querySelector(".new-docs-content").scrollTo(0, offset - 0)
      }), 0)}}})`;

export default ({ Html, Head, Body, children, siteData, renderMeta }) => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="../static/logos/favicon.ico" />
      {/* Fonts */}
      <link
        href="https://formidable.com/open-source/fonts.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Andada"
        rel="stylesheet"
      />
      {/*<script dangerouslySetInnerHTML={{ __html: scrollScript }} />*/}

      {/* CodeMirror for Component Playgrounds */}
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"
      />
    </Head>
    {renderMeta.styleTags}
    <title>Victory</title>
    <Body>{children}</Body>
  </Html>
);
