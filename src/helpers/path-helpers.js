import { useBasepath } from "react-static";

const createPath = path => {
  if (/^\w+:/.test(path) || path.startsWith("#")) {
    return path;
  }
  const basePath = useBasepath();
  const head = basePath ? `/${basePath}/` : "/";
  return `${head}${path}`;
};

export default createPath;
