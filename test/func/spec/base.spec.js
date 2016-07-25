/* eslint-disable global-require, no-console */

var adapter = require("../setup").adapter;
var path = require("path");

var ELEM_WAIT = 200;

adapter.before();
adapter.beforeEach();

beforeEach(function () {
  return adapter.client
    .timeoutsImplicitWait(ELEM_WAIT); // Set timeout for waiting on elements.
});

adapter.afterEach();
adapter.after();

var SERVER_HOST = "127.0.0.1";
var SERVER_PORT = "3000";


/*
 * Serve src with webpack-dev-server
 */

var serveDev = function (cb) {
  console.log("Starting dev server...");
  var webpack = require("webpack");
  var WebpackDevServer = require("webpack-dev-server");

  var webpackCfg = require(path.resolve("./node_modules", "builder-docs-archetype", "config", "webpack", "webpack.config.dev.js"));

  var compiler = webpack(webpackCfg);
  var wdsServer = new WebpackDevServer(compiler, {
    hot: false,
    stats: "errors-only",
    historyApiFallback: true
  });

  wdsServer.listen(SERVER_PORT, SERVER_HOST, cb);
};


/*
 * Serve static ./build dir
 */

var serveStatic = function (cb) {
  console.log("Starting static http-server...");
  var httpServer = require("http-server");
  var server = httpServer.createServer({
    root: "./build"
  });
  server.listen(SERVER_PORT, SERVER_HOST, cb);
};


/*
 * Before tests run, determine URL and server needs
 */

before(function (done) {
  global.TEST_FUNC_BASE_URL = process.env.TEST_FUNC_BASE_URL || "http://" + SERVER_HOST + ":" + SERVER_PORT + "/";

  switch (process.env.TEST_FUNC) {
  case "static": return serveStatic(done);
  case "dev": return serveDev(done);
  case "remote":
    if (!process.env.TEST_FUNC_BASE_URL) {
      console.warn("No TEST_FUNC_BASE_URL environment variable set. Defaulting to " +
        global.TEST_FUNC_BASE_URL + "\n");
    }
    return done();
  }

  return done();
});
