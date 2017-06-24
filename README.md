# Victory Documentation

[![Build Status](https://travis-ci.org/FormidableLabs/victory-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/victory-docs)

[Documentation site](https://formidable.com/open-source/victory/) for Victory.

[Check out the wiki](https://github.com/FormidableLabs/formidable-landers/wiki)

To release this lander, please follow the [archetype release instructions](https://github.com/FormidableLabs/builder-docs-archetype#lander-release) for our `npm version` workflow.

## Testing

### Lint

```bash
yarn install
npm test
```

### Browser Tests

```bash
yarn install
yarn run test-func-install # installs selenium browser drivers inside node_modules
yarn run test-func-build # builds the prod site
yarn run test-func # tests the prod site
```
