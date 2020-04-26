import React from "react";

// eslint-disable-next-line react/prop-types
export default ({ Html, Head, Body, children }) => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="../static/logos/favicon.ico" />
      {/* Fonts */}
      {/* // TODO update fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Andada"
        rel="stylesheet"
      />

      {/* CodeMirror for Component Playgrounds */}
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/codemirror.min.css"
      />
    </Head>
    <title>Victory</title>
    <Body>{children}</Body>
  </Html>
);
