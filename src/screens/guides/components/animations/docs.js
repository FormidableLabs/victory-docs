import React from "react";
import ReactDOM from "react-dom";
import Ecology from "ecology";
import { VictoryBar, VictoryScatter, VictoryChart } from "victory";
import { range, random } from "lodash";
import { ecologyPlaygroundLoading } from "formidable-landers";

export default class AnimationGuide extends React.Component {
  render() {
    const customRenderers = {
      heading: (text, level) => {
        const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

        // return `<h${level}><a name="${escaped}"
        return "<h" + level + " id=\"" + escapedText + "\"><a name=\"" +
                      escapedText +
                       "\" class=\"Anchor\" href=\"#" +
                       escapedText +
                       "\" aria-hidden=\"true\"></a>FOOBAR: " +
                        text + "</h" + level + ">";
      },
      ...ecologyPlaygroundLoading
    };

    return (
      <div className="Recipe Markdown">
        <Ecology
          overview={require("!!raw!./ecology.md")}
          scope={{ range, random, React, ReactDOM, VictoryBar, VictoryScatter, VictoryChart }}
          playgroundtheme="elegant"
          customRenderers={customRenderers}
        />
      </div>
    );
  }
}
