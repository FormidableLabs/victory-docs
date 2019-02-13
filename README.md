<h1 align="center">victory documentation site</h1>

[![Build Status](https://travis-ci.org/FormidableLabs/victory-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/victory-docs)

***

[Documentation site](https://formidable.com/open-source/victory/) for [victory](https://github.com/FormidableLabs/victory). `victory-docs` is running on [react-static](https://github.com/nozzle/react-static).


## Getting Started

To install and run the docs site locally:

```bash
yarn install
yarn run develop
```

Then, open your favorite browser to [localhost:3000](http://localhost:3000/).

## Ready to Deploy :shipit:

Build the site to test locally.

```bash
yarn run build
```

Serve the build.

```bash
yarn run serve
```

Then, open your favorite browser to [localhost:3001](http://localhost:3001/) to verify everything looks correct.

If everything checks out, build the production site with the prefixed path, `/open-source/victory/`, so the files load at the correct URL!

```bash
yarn run build:pp
```

To publish to NPM run

**This package _must_ be published with `npm@5.6.0`**

```bash
npm version <newversion | major | minor | patch> (see Versioning notes below)
git push origin master && git push --tags
npm publish
```

### Versioning Notes

For a reliable systems of releases, `victory-docs` should aim for versioning along these lines:

- *Patch*: Typos, missing assets, broken styles, very minor copyedits.
- *Minor*: Add a new blog post, change styles.
- *Major*: Rearchitect how the lander works, remove pages, or something else huge.

