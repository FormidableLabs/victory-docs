import React, { useRef } from "react";
import PropTypes from "prop-types";
import useInView from "react-cool-inview";

const LazyRender = ({ LazyRenderedComponent, className, ...rest }) => {
  const ref = useRef();
  const { inView } = useInView(ref, {
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    unobserveOnEnter: true,
    // For better UX, we can grow the root margin so the component will be rendered before it comes to the viewport
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
