<h1 align="center">victory documentation site</h1>

[![Build Status](https://travis-ci.org/FormidableLabs/victory-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/victory-docs)

***

[Documentation site](https://formidable.com/open-source/victory/) for [victory](https://github.com/FormidableLabs/victory). `victory-docs` is running on [gatsbyjs](gatsbyjs.org). 


## Getting Started

To install and run the docs site locally: 

```bash
yarn install
yarn run develop 
```

Then, open your favorite browser to [localhost:8000](http://localhost:8000/). GraphiQL runs at [localhost:8000/___graphql](http://localhost:8000/___graphql).

## Ready to Deploy :shipit:  

Build the site to test locally.

```bash 
yarn run build
```

Serve the build. 

```bash 
yarn run serve
```

Then, open your favorite browser to [localhost:9000](http://localhost:9000/) to verify everything looks correct.

If everything checks out, build the production site with the prefixed path, `/open-source/victory/`, so the files load at the correct URL! 

```bash 
yarn run build:pp
```

To publish to NPM run

```bash 
npm version <newversion | major | minor | patch> (see Versioning notes below)
```

###  Versioning Notes

For a reliable systems of releases, `victory-docs` should aim for versioning along these lines:

- *Patch*: Typos, missing assets, broken styles, very minor copyedits.
- *Minor*: Add a new blog post, change styles.
- *Major*: Rearchitect how the lander works, remove pages, or something else huge.

