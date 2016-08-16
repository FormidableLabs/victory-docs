import React from "react";
import { Route, IndexRoute } from "react-router";

// Components
import App from "./components/app";
import Home from "./screens/home/index";
import Docs from "./screens/docs/index";
import Recipes from "./screens/recipes/index";

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/docs" component={Docs}/>
    <Route path="/docs/:component" component={Docs} />
    <Route path="/recipes" component={Recipes}/>
    <Route path="/recipes/:component" component={Recipes} />
  </Route>
);
