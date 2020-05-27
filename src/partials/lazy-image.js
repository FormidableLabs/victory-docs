import React, { useRef } from "react";
import useInView from "react-cool-inview";

const LazyImage = ({ height, width, minHeight, ...props }) => {
  const ref = useRef();
  const { inView } = useInView(ref, {
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    unobserveOnEnter: true,
    // For better UX, we can grow the root margin so the image will be loaded before it comes to the viewport
    rootMargin: "20px"
  });

  return (
    <div style={{ width, height, minHeight }} ref={ref}>
      {inView && <img {...props} />}
    </div>
  );
};

export default LazyImage;
