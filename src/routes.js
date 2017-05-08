import React from "react";
import { Route, IndexRoute, Redirect } from "react-router";

// Components
import App from "./components/app";
import Home from "./screens/home/index";
import Docs from "./screens/docs/index";
import Gallery from "./screens/gallery/index";
import Guides from "./screens/guides/index";
import About from "./screens/about/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs}/>
    <Route path="/docs/:component" component={Docs} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/gallery/:example" component={Gallery} />
    <Route path="/guides" component={Guides}/>
    <Route path="/guides/:component" component={Guides} />
    <Route path="/about" component={About} />
    <Route path="/">
      <Redirect from="index.html" to="/" />
    </Route>
  </Route>
);
