import React from "react";

// Settings
import OOKLA from "../../../../static/logo-ookla.svg";
import VIACOM from "../../../../static/logo-viacom.svg";
import POSTMARK from "../../../../static/logo-postmark.svg";
import FIVETHIRTYEIGHT from "../../../../static/logo-fivethirtyeight.svg";

class Companies extends React.Component {
  render() {
    return (
      <div className="Companies">
        <h2 className="SubHeading">
          A few of our fans
        </h2>
        <ul className="Companies-List">
          <li className="Companies-logo Companies-logo--max200" dangerouslySetInnerHTML={{__html: OOKLA}} />
          <li className="Companies-logo Companies-logo--max200" dangerouslySetInnerHTML={{__html: VIACOM}} />
          <li className="Companies-logo Companies-logo--max300" dangerouslySetInnerHTML={{__html: FIVETHIRTYEIGHT}} />
          <li className="Companies-logo Companies-logo--max200" dangerouslySetInnerHTML={{__html: POSTMARK}} />
        </ul>
      </div>
    );
  }
}

Companies.propTypes = {
  style: React.PropTypes.object
};

Companies.defaultProps = {
  style: null
};

export default Companies;
