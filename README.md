Victory Documentation
======================

[![Build Status](https://travis-ci.org/FormidableLabs/victory-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/victory-docs)

Marketing/documentation site for Victory

# Publishing
The site’s documentation section is pulled in directly from the `victory` repo’s README, which means it’s only as current as your local `node_modules/victory`. To refresh the docs, run `npm update victory`. (If you forget this step in dev, it’s run automatically as part of `builder run build-static`, so you can’t accidentally publish outdated docs.)

When it’s time to publish:
```sh
# On master
builder run build-static # Builds site to static HTML/JS in `/build`

# Test the static build in your browser
builder run server-static
builder run open-static

# If all looks good, let's commit!
git push origin master
```

# Travis

Automatic deployment is handled by Travis. Server access is possible by storing the key on travis and encrypting the file here, `deploy_static.pem.enc`. This is done with by:

```
gem install travis
travis encrypt-file ~/.ssh/deploy_static.pem --add
```

Make sure the travis config does not preserve the `~/.ssh/` filepath.
