import React from "react";
import Radium from "radium";

// VComponents
import { VictoryTheme } from "victory-core";
import { VictoryArea, VictoryAxis, VictoryChart, VictoryStack } from "victory-chart";

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
    return {
      wrapper: {
        margin: "0 auto",
        maxWidth: "800px"
      },
      backgroundImage: {
        backgroundImage: `url(./static/hero@2x.png)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        display: "block",
        margin: "20px auto",
        overflow: "hidden",
        padding: "56.875% 0 0 0", // preserve aspect ratio
        position: "relative",
        width: "100%"
      },
      content: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      webChart: {
        backgroundColor: "#f6f3f0",
        position: "absolute",
        top: "20%",
        right: "22%",
        bottom: "25%",
        left: "52%"
      },
      nativeChart: {
        backgroundColor: "#f6f3f0",
        position: "absolute",
        top: "65%",
        right: "2%",
        bottom: "11%",
        left: "86%"
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.wrapper}>
        <div style={styles.backgroundImage}>
          <div style={styles.content}>
            <div style={styles.webChart}>
              <VictoryChart
                animate={{ duration: 2000 }}
                width={200}
                height={225}
                padding={{
                  top: 10,
                  bottom: 30,
                  left: 30,
                  right: 20
                }}
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
            <div style={styles.nativeChart}>
              <VictoryChart
                animate={{ duration: 2000 }}
                width={195}
                height={225}
                padding={{
                  top: 10,
                  bottom: 30,
                  left: 30,
                  right: 20
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
          </div>
        </div>
      </div>
    );
  }
}

Native.propTypes = {
  alt: React.PropTypes.bool
};

export default Radium(Native); // eslint-disable-line new-cap
