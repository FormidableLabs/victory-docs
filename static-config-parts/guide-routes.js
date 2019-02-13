// I don't love the customization/edge-case fragmentation here, but it would require a conceptual shift to have
// component paths described in markdown ingestion in a way that seems brittle/coupled

const generateGuideRoute = ({ routeData }) => g => ({
  path: `/${g.data.slug}`,
  component: g.component || "src/containers/doc",
  getData: () => ({
    title: `Victory | ${g.name}`,
    doc: g,
    ...routeData
  })
});

const baseConfig = {
  additionalRoutes: [
    {
      data: { slug: "themes" },
      component: "src/containers/themes",
      name: "Themes"
    }
  ],
  routeFn: generateGuideRoute
};

const generateGuideRoutes = (guides, routeData, config = baseConfig) => {
  const { routeFn, additionalRoutes } = config;
  const genRouteWithData = routeFn({ routeData });
  return guides.concat(additionalRoutes).map(genRouteWithData);
};

module.exports = {
  generateGuideRoutes
};
