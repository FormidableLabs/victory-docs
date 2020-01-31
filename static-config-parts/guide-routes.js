const generateGuideRoute = ({ routeData }) => g => ({
  path: `/${g.data.slug}`,
  template: g.component || "src/pages/docs-template",
  getData: () => ({
    title: `Victory | ${g.name}`,
    doc: g,
    ...routeData
  })
});

const generateGuideRoutes = (guides, routeData) => {
  const genRouteWithData = generateGuideRoute({ routeData });
  return guides.map(genRouteWithData);
};

module.exports = {
  generateGuideRoutes
};
