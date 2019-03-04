import { reloadRoutes } from "react-static/node";
import React from "react";
import chokidar from "chokidar";
import Document from "./src/html";
import _ from "lodash";
import staticWebpackConfig from "./static-config-parts/static-webpack-config";
import siteData from "./static-config-parts/site-data";
import {
  getDocs,
  getFaq,
  getIntroduction,
  getGallery,
  getGuides,
  getCommonProps
} from "./static-config-helpers/md-data-transforms";
import { generateGuideRoutes } from "./static-config-parts/guide-routes";
const { ServerStyleSheet } = require("styled-components");

chokidar.watch("content").on("all", () => reloadRoutes());

export default {
  getSiteData: () => siteData,
  paths: {
    root: process.cwd(), // The root of your project. Don't change this unless you know what you're doing.
    src: "src", // The source directory. Must include an index.js entry file.
    dist: "dist", // The production output directory.
    devDist: "tmp/dev-server", // The development scratch directory.
    public: "public" // The public directory (files copied to dist during build)
  },
  // eslint-disable-next-line max-statements
  getRoutes: async () => {
    const trueDocs = await getDocs();
    const faq = await getFaq();
    const introduction = await getIntroduction();
    const gallery = await getGallery();
    const guides = await getGuides();
    const commonProps = await getCommonProps();

    // sure we *happen* to sort by id as part of data ingestion right now, but it shouldn't create unexpected behavior
    // if we ever change that.
    const guidesIntro = _.find(guides, g => g.data.id === 0);
    const homeIntro = _.find(introduction, intro => intro.data.id === 0);
    // only one file here, use a selector-style fn if that ever changes
    const faqIntro = faq[0];
    const commonPropsIntro = commonProps[0];

    const orderById = items => _.orderBy(items, ["data.id"], ["asc"]);
    const allSidebarItems = [
      ...introduction,
      faqIntro,
      ...guides,
      commonPropsIntro,
      ...trueDocs
    ];
    const sidebarContent = allSidebarItems.reduce((av, cv, i, arr) => {
      const category = cv.data.category;
      if (category && Array.isArray(av[category])) {
        av[category] = av[category].concat(cv);
      } else {
        av[category] = [].concat(cv);
      }
      if (i === arr.length - 1) {
        Object.keys(av).forEach(k => (av[k] = orderById(av[k])));
      }

      return av;
    }, {});

    // I'll be honest, I too was disappointed when I realized the elegant pattern of ${parentSlug}/#${childSlug}
    // would end up requiring the generation of several of the routes together in a way which felt hard to reason
    // about up front and less tangible to modify later
    const docSubroutes = commonProps.concat(introduction, trueDocs);

    const convertToSidebarArray = content => {
      const { support, charts, containers, more } = content;
      return [
        ...introduction,
        ...support,
        ...guides,
        commonPropsIntro,
        ...charts,
        ...containers,
        ...more
      ];
    };

    const sbContent = convertToSidebarArray(sidebarContent);

    return [
      {
        path: "/",
        component: "src/pages/index"
      },
      {
        path: "/about",
        component: "src/pages/about"
      },
      {
        path: "/guides",
        component: "src/containers/doc",
        getData: async () => ({
          doc: guidesIntro,
          sidebarContent: sbContent
        }),
        children: generateGuideRoutes(guides, { sidebarContent: sbContent })
      },

      {
        path: "/docs",
        component: "src/containers/doc",
        getData: async () => ({
          doc: homeIntro,
          docs: trueDocs,
          sidebarContent: sbContent
        }),
        children: docSubroutes.map(doc => ({
          path: `/${doc.data.slug}`,
          component: "src/containers/doc",
          getData: async () => ({
            doc,
            sidebarContent: sbContent,
            location: { pathname: doc.data.slug }
          })
        }))
      },
      {
        path: "docs/faq",
        component: "src/containers/doc",
        getData: async () => ({
          doc: faqIntro,
          sidebarContent: sbContent
        })
      },
      {
        path: "docs/common-props",
        component: "src/containers/doc",
        getData: async () => ({
          doc: commonPropsIntro,
          sidebarContent: sbContent
        })
      },
      {
        path: "/gallery",
        component: "src/pages/gallery",
        getData: async () => ({
          gallery
        }),
        children: gallery.map(galleryItem => ({
          path: `/${galleryItem.data.slug}/`,
          component: "src/containers/gallery",
          getData: async () => ({
            galleryItem,
            location: { pathname: galleryItem.data.slug }
          })
        }))
      }
    ];
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    // see https://github.com/nozzle/react-static/blob/v5/docs/config.md#rendertohtml
    // you can stick whatever you want here, but it's mutable at build-time, not dynamic
    // at run-time -- key difference!
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document,
  // turn this on if it helps your local development workflow for build testing
  bundleAnalyzer: false,
  webpack: staticWebpackConfig
};
