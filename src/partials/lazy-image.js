import React from "react";
import PropTypes from "prop-types";
import useInView from "react-cool-inview";

const LazyImage = ({ height, width, minHeight, ...props }) => {
  const { ref, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "20px"
  });

  return (
    <div style={{ width, height, minHeight }} ref={ref}>
      {inView && <img {...props} />}
    </div>
  );
};

LazyImage.propTypes = {
  height: PropTypes.number,
  minHeight: PropTypes.number,
  width: PropTypes.number
};

export default LazyImage;
