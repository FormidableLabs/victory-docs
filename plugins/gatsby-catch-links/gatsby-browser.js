import { navigateTo } from "gatsby-link";
import config from "../../data/site-config";

import catchLinks from "./catch-links";

catchLinks(
  window,
  (href) => navigateTo(href),
  config.pathPrefix
);
