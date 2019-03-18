<h1 align="center">victory documentation site</h1>

[![Build Status](https://travis-ci.org/FormidableLabs/victory-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/victory-docs)

***

[Documentation site](https://formidable.com/open-source/victory/) for [victory](https://github.com/FormidableLabs/victory). `victory-docs` is running on [react-static](https://github.com/nozzle/react-static).


## Getting Started

To install and run the docs site locally:

```bash
yarn install
yarn start
```
Note that paths in local development are based on a root of "/" but be careful when defining relative and absolute paths
inline or doing url parsing, as the production output root will be "open-source/victory."

## Want to see if you're ready to :shipit:?
To build the staging build output and serve it with the canonical path it'll have when built as a lander for formidable.com:
```bash
#builds and serves staging content at localhost:3000/open-source/victory
yarn stage-and-serve
# Runs integration smoke tests and generates screenshots for human sanity-checking
yarn test-local 
```
This step is important for validating that both the `basePath` used by the static HTML output and the `basename` used
by the client-side router are working as expected. This is also where you'll want to validate that there are no hardcoded, 
inlined, or malformed asset paths that worked locally but will not resolve correctly in production!

## Ready to Publish?
To publish to NPM run

**This package _must_ be published with `npm@5.6.0`**

```bash
npm version <newversion | major | minor | patch> (see Versioning notes below)
git push origin master && git push --tags
npm publish
```

## Ready to Deploy?
OSS landers are deployed by the formidable.com package, see `DEPLOYMENT.md` or `lib/actions.js` there for how 
the build output is consumed. 

### Versioning Notes

For a reliable systems of releases, `victory-docs` should aim for versioning along these lines:

- *Patch*: Typos, missing assets, broken styles, very minor copyedits.
- *Minor*: Add a new blog post, change styles.
- *Major*: Rearchitect how the lander works, remove pages, or something else huge.

