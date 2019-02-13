
#Launch Considerations (not to be confused with _Lunch_ Considerations)

Our prior experience with formidable.com gave us consider leeway to avoid any and all issues caused by
absolute links being transformed/malformed since the relative path from root is canonically correct.

## Relative site-root
* the siteroot will be "formidable.com/open-source/victory" and we most likely *will* be using the
siteRoot key in the static-config. if it gives us any trouble we can adapt the site-data and routeData to do what we 
want, but the fewer things we do behind our static site build tool's back, the better. We'll likely want/need
to tweak (or may be able to remove) the `getLocalTitle` method in `layouts/index`. 

## <title> (browser tab) values
Currently these are partially broken/incomplete on the victory docs site and so also with our implementation, which
contains much of the same code! Since it's already broken this isn't a regression per se (hooray for semantics!) 
but getting it working as expected is likely to be a primarily subtractive process + reimplementing what we did on 
formidable.com with the `document` file in this repo. 

## SEO (not to be confused with analytics)
Stripped em out as a non-blocker as planned, but the strategy we use for putting em back will involve the react-static
`<Head>` component (ie `react-helmet` under the hood but with a warranty guaranteeing it's functionality as an
 implementation detail), so it would probably make sense to do title and SEO stuff as linked tasks.

