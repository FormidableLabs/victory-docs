const _ = require("lodash");
const siteData = require("./static-config-parts/site-data");
const {
  getDocs,
  getFaq,
  getIntroduction,
  getGallery,
  getGuides,
  getCommonProps
} = require("./static-config-helpers/md-data-transforms");
const { generateGuideRoutes } = require("./static-config-parts/guide-routes");
const { stage, landerBasePath } = require("./static-config-parts/constants");

// HMR for dev
// TODO: enable after rewrite
// This is much slower when developing tons of things that _aren't_ content changes
// if (stage === "development") {
//   const { rebuildRoutes } = require("react-static/node");
//   const chokidar = require("chokidar");
//   chokidar.watch("src/content/**/*.md").on("all", () => rebuildRoutes());
// }

export default {
  getSiteData: () => siteData,
  paths: {
    root: process.cwd(), // The root of your project. Don't change this unless you know what you're doing.
    src: "src", // The source directory. Must include an index.js entry file.
    // See app.js for how stage is used to make client-side routing resolve correctly by stage.
    dist: stage === "staging" ? `dist/${landerBasePath}` : "dist", // The production output directory.
    devDist: "tmp/dev-server", // The development scratch directory.
    public: "public" // The public directory (files copied to dist during build)
  },
  siteRoot: "https://formidable.com",
  generateSourceMaps: false,
  basePath: landerBasePath,
  stagingBasePath: landerBasePath,
  devBasePath: "",
  plugins: [
    "react-static-plugin-react-router",
    "react-static-plugin-sitemap",
    "react-static-plugin-styled-components"
  ],
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
    const homeIntro = _.find(introduction, intro => intro.data.id === 0);
    // only one file here, use a selector-style fn if that ever changes
    const faqIntro = faq[0];
    const commonPropsIntro = commonProps[0];

    const orderById = items => _.orderBy(items, ["data.id"], ["asc"]);
    const allSidebarItems = [
      ...introduction,
      ...faq,
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
      const { charts, containers, more } = content;
      return [
        ...introduction,
        ...faq,
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
        template: "src/pages/index"
      },
      {
        path: "/about",
        template: "src/pages/about",
        getData: async () => ({
          sidebarContent: sbContent
        })
      },
      {
        path: "/guides", // guides shares the 404 template because its children have their own docs-template getting used and there is no parent page to render, removing this will cause you build issues
        template: "src/pages/404",
        getData: async () => ({
          docs: trueDocs,
          sidebarContent: sbContent
        }),
        children: generateGuideRoutes(guides, { sidebarContent: sbContent })
      },
      {
        path: "/docs",
        template: "src/pages/docs-template",
        getData: async () => ({
          doc: homeIntro,
          docs: trueDocs,
          sidebarContent: sbContent
        }),
        children: docSubroutes.map(doc => ({
          path: `/${doc.data.slug}`,
          template: "src/pages/docs-template",
          getData: async () => ({
            doc,
            sidebarContent: sbContent
          })
        }))
      },
      {
        path: "docs/faq",
        template: "src/pages/docs-template",
        getData: async () => ({
          doc: faqIntro,
          sidebarContent: sbContent
        })
      },
      {
        path: "docs/common-props",
        template: "src/pages/docs-template",
        getData: async () => ({
          doc: commonPropsIntro,
          sidebarContent: sbContent
        })
      },
      {
        path: "/gallery",
        template: "src/pages/gallery",
        getData: async () => ({
          sidebarContent: sbContent,
          gallery
        }),
        children: gallery.map(galleryItem => ({
          path: `/${galleryItem.data.slug}/`,
          template: "src/pages/gallery-item-template",
          getData: async () => ({ galleryItem })
        }))
      },
      // 404 Not Found
      {
        path: "/404",
        template: "src/pages/404",
        getData: async () => ({
          sidebarContent: sbContent
        })
      }
    ];
  },
  Document: require("./src/html").default
};
