import React from "react";
import PropTypes from "prop-types";
import Page from "../partials/page";
import { withRouteData } from "react-static";

const NotFound = props => {
  return (
    <Page history={props.history} location={props.location}>
      <h1>404! HELP I NEED DESIGNS</h1>
    </Page>
  );
};

NotFound.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object
};

export default withRouteData(NotFound);
