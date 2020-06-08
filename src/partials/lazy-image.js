import React, { useRef } from "react";
import useInView from "react-cool-inview";

const LazyImage = ({ height, width, minHeight, ...props }) => {
  const ref = useRef();
  const { inView } = useInView(ref, {
    unobserveOnEnter: true,
    rootMargin: "20px"
  });

  return (
    <div style={{ width, height, minHeight }} ref={ref}>
      {inView && <img {...props} />}
    </div>
  );
};

export default LazyImage;
