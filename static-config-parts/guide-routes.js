// I don't love the customization/edge-case fragmentation here, but it would require a conceptual shift to have
// component paths described in markdown ingestion in a way that seems brittle/coupled

const generateGuideRoute = ({ routeData }) => g => ({
  path: `/${g.data.slug}`,
  template: g.component || "src/pages/docs-template",
  getData: () => ({
    title: `Victory | ${g.name}`,
    doc: g,
    ...routeData
  })
});

const baseConfig = {
  routeFn: generateGuideRoute
};

const generateGuideRoutes = (guides, routeData, config = baseConfig) => {
  const { routeFn } = config;
  const genRouteWithData = routeFn({ routeData });
  return guides.map(genRouteWithData);
};

module.exports = {
  generateGuideRoutes
};
