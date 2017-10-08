import React from "react";
import PropTypes from "prop-types";
import { times } from "lodash";
import {
  VictoryChart, VictoryScatter, VictoryPie, VictoryLine, VictoryStack, VictoryBar, VictoryAxis
} from "victory";

const scatterData = times(20, (i) => ({
  x: (i - 10) / 3,
  y: i / 2 - 2 * Math.random() - 4
}));

const toInteger = (number) => parseInt(number).toString();

const DemoComponent = ({ theme }) => {
  const style = { parent: { maxWidth: "50%" } };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <VictoryPie
        theme={theme}
        style={{ parent: style.parent, labels: { padding: 10 } }}
        height={300}
        width={300}
      />
      <VictoryChart theme={theme} height={300} width={300} style={style}>
        <VictoryAxis tickCount={3} tickFormat={toInteger}/>
        <VictoryAxis tickCount={4} dependentAxis/>
        <VictoryScatter
          size={2}
          data={scatterData}
        />
      </VictoryChart>

      <VictoryChart theme={theme} height={300} width={300} style={style}>
        <VictoryAxis tickCount={4} domain={[0, 3]} tickFormat={toInteger}/>
        <VictoryAxis tickCount={4} dependentAxis domain={[0, 10]}/>
        <VictoryLine
          y={(data) => data.x * data.x}
        />
      </VictoryChart>

      <VictoryChart style={style}
        theme={theme}
        height={300}
        width={300}
        domainPadding={{x: 50}}
      >
        <VictoryAxis tickValues={["A", "B", "C"]}/>
        <VictoryAxis tickCount={3} dependentAxis/>
        <VictoryStack>
          <VictoryBar
            data={[
              {x: "apples", y: 1},
              {x: "bananas", y: 3},
              {x: "oranges", y: 3}
            ]}
          />
          <VictoryBar
            data={[
              {x: "apples", y: 2},
              {x: "bananas", y: 1},
              {x: "oranges", y: 3}
            ]}
          />
          <VictoryBar
            data={[
              {x: "apples", y: 3},
              {x: "bananas", y: 1},
              {x: "oranges", y: 1}
            ]}
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

DemoComponent.propTypes = {
  theme: PropTypes.object
};

export default DemoComponent;
