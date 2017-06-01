import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

// Common
import Icon from "../../../components/icon";
// Assets
import VIACOM from "../../../../static/logo-viacom.svg";
import FIVETHIRTYEIGHT from "../../../../static/logo-fivethirtyeight.svg";
import USAFACTS from "../../../../static/logo-usafacts.svg";
import AIRBNB from "../../../../static/logo-airbnb.svg";

class Companies extends React.Component {
  render() {
    return (
      <div className="Companies">
        <h2 className="SubHeading">
          A few of our fans
        </h2>
        <ul className="Companies-List">
          <li className="Companies-logo" style={{maxWidth: "171px"}} dangerouslySetInnerHTML={{__html: AIRBNB}} />
          <li className="Companies-logo" style={{maxWidth: "350px"}} dangerouslySetInnerHTML={{__html: USAFACTS}} />
          <li className="Companies-logo" style={{maxWidth: "300px"}} dangerouslySetInnerHTML={{__html: FIVETHIRTYEIGHT}} />
          <li className="Companies-logo" style={{maxWidth: "200px"}} dangerouslySetInnerHTML={{__html: VIACOM}} />
        </ul>
        <p className="SubHeading">
          <Link to="/about#showcase" className="isLight">
            See showcase&nbsp;<Icon glyph="internal-link"/>
          </Link>
        </p>
      </div>
    );
  }
}

Companies.propTypes = {
  style: PropTypes.object
};

Companies.defaultProps = {
  style: null
};

export default Companies;
