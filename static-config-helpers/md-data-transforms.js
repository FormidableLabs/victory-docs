/* eslint-disable func-style */
const _ = require("lodash");
const getMdFiles = require("./get-md-files");

// this function takes care of sorting!! :code:
// The only difference between this and allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC })
// is how numbers are handled orderBy places number before letter, prior ordering disregarded numbers and used
// first alphabetical character.
const orderByTitle = items => _.orderBy(items, ["data.title"], ["asc"]);

const orderByIdAndAddThemesEntry = items => {
  // I'd like to think through a nicer way of appending and intermingling objects derived
  // from markdown and other objects. Mutating transforms work one item of a time and don't
  // have a return value, and actually the getMdFiles sort hook is only incidentally "sort of"
  // a sort and is really a generic function that runs on the entire transformed array, which is convenient.
  // There is a risk of overengineering here, but I think it might be more useful as a generic
  // utility if it had a first transform over the entire array, a middle pass over individual items,
  // and then a final pass after all mutating transforms have been invoked, aka:
  // Start: add or remove or sort items as-is from data source
  // Middle: add or remove or transform keys and values
  // End: add or remove or sort after all transforms
  // I intentionally didn't give the middle pass access to the index or the array as a whole because
  // those can be scary things to give to a function without a return value that's being run in a series
  // of mutations, and I still think that's the right call, but...

  // OTOH, don't want to get too crazy with this, since a current advantage of the existing
  // code is it's fairly easy to read and it would be possible to sink a lot of time into inadvertently
  // creating an ORM for a hand-rolled and very slow relational database we don't actually need.
  const themes = {
    data: {
      slug: "themes",
      id: "9",
      title: "Themes",
      category: "guides",
      type: "guides",
      subHeadings: []
    },
    // path: "/themes",
    component: "src/pages/themes-template",
    name: "Themes"
  };
  return _.orderBy(items.concat(themes), ["data.id"], ["asc"]);
};

const slugMutation = mdData => {
  mdData.data.slug = _.kebabCase(mdData.data.title)
    .toLowerCase()
    .trim();
};

// for sidebar purposes, guide type and guide category are the same, but we'd rather have
// a consistent shape at the component layer than need an additional check there
const sidebarTypeMutation = mdData => {
  mdData.data.type = mdData.data.category;
};

// You could also be like `yarn add --dev immutability-helper` and use its syntax, but introducing it adds a
// learning curve that makes it less readable on first exposure + you end up using $apply a lot anyway + imo it's
// not significantly cleaner for modifying multiple levels simultaneously. I like immutability-helper though, but
// it feels more like the kind of thing we'd want to bring in as a cross-project standard rather than a one-off.

const sidebarTreeMutation = mdData => {
  if (!mdData.data.subHeadings || !mdData.data.subHeadings.length) {
    mdData.data.sidebarTree = [];
    return;
  }

  mdData.data.sidebarTree = mdData.data.subHeadings.reduce((av, cv) => {
    if (cv.depth === 1) {
      return av.concat({ ...cv, category: mdData.data.category });
    }

    if (cv.depth === 2) {
      const lastItem = av.pop();
      return av.concat({
        ...lastItem,
        children: lastItem.children ? [...lastItem.children, cv] : [cv]
      });
    }

    if (cv.depth === 3) {
      const lastItem = av.pop();
      const lastChild = lastItem.children.pop();
      return av.concat({
        ...lastItem,
        children: [
          ...lastItem.children,
          {
            ...lastChild,
            children: lastChild.children ? [...lastChild.children, cv] : [cv]
          }
        ]
      });
    }
  }, []);
};

// Had to make the tough call that even though faq is a subroute of docs
// and uses the doc container, it still needs to be handled differently
// bc it's sidebar behavior is sufficiently different f
// it needs to be handled differently
function getDocs(
  mdPath = "./src/content/docs",
  items = [],
  mutations = [slugMutation, sidebarTreeMutation],
  sort = orderByTitle
) {
  return getMdFiles(mdPath, items, mutations, sort);
}

function getFaq(
  mdPath = "./src/content/faq",
  items = [],
  mutations = [sidebarTreeMutation],
  sort = orderByTitle
) {
  return getMdFiles(mdPath, items, mutations, sort);
}

function getIntroduction(
  mdPath = "./src/content/introduction",
  items = [],
  mutations = [slugMutation, sidebarTreeMutation],
  sort = orderByTitle
) {
  return getMdFiles(mdPath, items, mutations, sort);
}

function getGallery(
  mdPath = "./src/content/gallery",
  items = [],
  mutations = [slugMutation],
  sort = orderByTitle
) {
  return getMdFiles(mdPath, items, mutations, sort);
}

function getGuides(
  mdPath = "./src/content/guides",
  items = [],
  mutations = [slugMutation, sidebarTypeMutation, sidebarTreeMutation],
  sort = orderByIdAndAddThemesEntry
) {
  return getMdFiles(mdPath, items, mutations, sort);
}

function getCommonProps(
  mdPath = "./src/content/common-props",
  items = [],
  mutations = [slugMutation, sidebarTreeMutation],
  sort = orderByTitle
) {
  return getMdFiles(mdPath, items, mutations, sort);
}

module.exports = {
  getDocs,
  getFaq,
  getIntroduction,
  getGallery,
  getGuides,
  getCommonProps
};
