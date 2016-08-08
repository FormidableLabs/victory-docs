import React from "react";
import Radium from "radium";

// VComponents
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-chart";

class Native extends React.Component {
  getData() {
    return [
      {x: new Date(2000, 1, 1), y: 12},
      {x: new Date(2001, 1, 1), y: 5},
      {x: new Date(2002, 1, 1), y: 4},
      {x: new Date(2003, 1, 1), y: 6},
      {x: new Date(2004, 1, 1), y: 5},
      {x: new Date(2005, 1, 1), y: 7}
    ];
  }

  getStyles() {
    const bgImg = this.props.alt ?
      `url(./static/native-alt.svg)` : `url(./static/native.svg)`;
    return {
      phone: {
        backgroundImage: bgImg,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        margin: "0 20px",
        height: "470px",
        padding: "60px 25px 50px",
        width: "250px"
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.phone}>
        <VictoryChart
          width={200}
          height={250}
          padding={{
            top: 10,
            bottom: 50,
            left: 5,
            right: 5
          }}
        >
          <VictoryAxis />
          <VictoryBar
            data={[
              {x: 1, y: 1},
              {x: 2, y: 2.5},
              {x: 3, y: 4},
              {x: 4, y: 2.5},
              {x: 5, y: 1}
            ]}
            interpolation="linear"
          />
        </VictoryChart>
        <VictoryChart
          width={200}
          height={250}
          padding={{
            top: 5,
            bottom: 50,
            left: 5,
            right: 5
          }}
        >
          <VictoryStack>
            <VictoryArea
              data={[
                {x: 1, y: 2},
                {x: 2, y: 1},
                {x: 3, y: 1}
              ]}
            />
            <VictoryArea
              data={[
                {x: 1, y: 1},
                {x: 2, y: 2},
                {x: 3, y: 0}
              ]}
            />
            <VictoryArea
              data={[
                {x: 1, y: 3},
                {x: 2, y: 4},
                {x: 3, y: 2}
              ]}
            />
            <VictoryArea
              data={[
                {x: 1, y: 4},
                {x: 2, y: 3},
                {x: 3, y: 5}
              ]}
            />
          </VictoryStack>
          <VictoryAxis />
        </VictoryChart>
      </div>
    );
  }
}

Native.propTypes = {
  alt: React.PropTypes.bool
};

export default Radium(Native); // eslint-disable-line new-cap
