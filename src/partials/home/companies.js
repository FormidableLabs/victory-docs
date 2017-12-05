import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

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

class Companies extends React.Component {
  static propTypes = {
    style: PropTypes.object
  };

  static defaultProps = {
    style: null
  };

  render() {
    return (
      <div className="Companies">
        <h2 className="SubHeading">A few of our fans</h2>
        <ul className="Companies-List">
          <li
            className="Companies-logo"
            style={{ maxWidth: "171px" }}
            dangerouslySetInnerHTML={{ __html: AIRBNB }}
          />
          <li
            className="Companies-logo"
            style={{ maxWidth: "300px" }}
            dangerouslySetInnerHTML={{ __html: FIVETHIRTYEIGHT }}
          />
          <li
            className="Companies-logo"
            style={{ maxWidth: "350px" }}
            dangerouslySetInnerHTML={{ __html: USAFACTS }}
          />
        </ul>
        <ul className="Companies-List">
          <li
            className="Companies-logo"
            style={{ maxWidth: "200px" }}
            dangerouslySetInnerHTML={{ __html: VIACOM }}
          />
          <li
            className="Companies-logo"
            style={{ maxWidth: "177px", paddingTop: "2px" }}
            dangerouslySetInnerHTML={{ __html: REDFIN }}
          />
          <li
            className="Companies-logo"
            style={{ maxWidth: "190px", paddingBottom: "3px" }}
            dangerouslySetInnerHTML={{ __html: ZILLOW }}
          />
          <li
            className="Companies-logo"
            style={{ maxWidth: "141px" }}
            dangerouslySetInnerHTML={{ __html: TUNE }}
          />
        </ul>
        <p className="SubHeading">
          <Link to="/about#showcase" className="isLight">
            See showcase&nbsp;<Icon glyph="internal-link" />
          </Link>
        </p>
      </div>
    );
  }
}

export default Companies;
