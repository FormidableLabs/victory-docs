import React from "react";
import PropTypes from "prop-types";
import useInView from "react-cool-inview";

const LazyRender = ({ LazyRenderedComponent, className, ...rest }) => {
  const { ref, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "20px"
  });

  return (
    <div className={className} ref={ref}>
      {inView && <LazyRenderedComponent {...rest} />}
    </div>
  );
};

LazyRender.propTypes = {
  LazyRenderedComponent: PropTypes.elementType.isRequired,
  className: PropTypes.string.isRequired
};

export default LazyRender;
