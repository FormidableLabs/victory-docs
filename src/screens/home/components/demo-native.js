import React from "react";
import Radium from "radium";

// VComponents
import { VictoryTheme } from "victory-core";
import { VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from "victory-chart";
import { VictorySettings } from "formidable-landers";

class Native extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  getData() {
    return [1, 2, 3, 4, 5].map(() => {
      return [
        {x: 1, y: Math.random()},
        {x: 2, y: Math.random()},
        {x: 3, y: Math.random()},
        {x: 4, y: Math.random()},
        {x: 5, y: Math.random()}
      ];
    });
  }

  componentDidMount() {
    this.setStateInterval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        data: this.getData()
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.setStateInterval);
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
        display: this.props.alt ? "none" : "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        margin: "0 20px",
        height: "470px",
        padding: "60px 25px 50px",
        width: "250px",
        [`@media ${VictorySettings.mediaQueries.small}`]: {
          display: "flex"
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.phone}>
        <VictoryChart
          width={200}
          height={200}
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
          animate={{ duration: 2000 }}
          width={200}
          height={300}
          padding={{
            top: 10,
            bottom: 50,
            left: 5,
            right: 5
          }}
          theme={VictoryTheme.material}
        >
          <VictoryStack>
            {this.state.data.map((data, i) => {
              const key = this.props.alt ? `alt${i}` : i;
              return (
                <VictoryArea
                  key={key}
                  data={data}
                />
              );
            })}
          </VictoryStack>
          <VictoryAxis />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </div>
    );
  }
}

Native.propTypes = {
  alt: React.PropTypes.bool
};

export default Radium(Native); // eslint-disable-line new-cap
