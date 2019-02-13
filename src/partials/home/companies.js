import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-static";

// Common
import Icon from "../icon";
// Assets
import VIACOM from "../../../static/logos/logo-viacom.svg";
import FIVETHIRTYEIGHT from "../../../static/logos/logo-fivethirtyeight.svg";
import USAFACTS from "../../../static/logos/logo-usafacts.svg";
import AIRBNB from "../../../static/logos/logo-airbnb.svg";
import REDFIN from "../../../static/logos/logo-redfin.svg";
import TUNE from "../../../static/logos/logo-tune.svg";
import ZILLOW from "../../../static/logos/logo-zillow.svg";
import IconBack from "../../../static/icon-back.svg";

class Companies extends React.Component {
  render() {
    return (
      <div className="Companies">
        <h2 className="SubHeading">A few of our fans</h2>
        <ul className="Companies-List">
          <img
            className="Companies-logo"
            style={{ maxWidth: "171px", filter: "invert(1)"}}
            src={AIRBNB}
          />
          <img
            className="Companies-logo"
            style={{ maxWidth: "300px", filter: "invert(1)"}}
            src={FIVETHIRTYEIGHT}
          />
          <img
            className="Companies-logo"
            style={{ maxWidth: "350px"}}
            src={USAFACTS}
          />
        </ul>
        <ul className="Companies-List">
          <img
            className="Companies-logo"
            style={{ maxWidth: "200px", filter: "invert(1)"}}
            src={VIACOM}
          />
          <img
            className="Companies-logo"
            style={{
              maxWidth: "177px",
              paddingTop: "2px",
            }}
            src={REDFIN}
          />
          <img
            className="Companies-logo"
            style={{
              maxWidth: "190px",
              paddingBottom: "3px",
              filter: "invert(1)"
            }}
            src={ZILLOW}
          />
          <img
            className="Companies-logo"
            style={{ maxWidth: "141px", filter: "invert(1)"}}
            src={TUNE}
          />
        </ul>
        <p className="SubHeading">
          <Link to="/about#showcase" className="isLight">
            See showcase&nbsp;
            <Icon glyph="internal-link" style={{filter: "invert(1)"}} />
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
