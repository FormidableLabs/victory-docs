import React from "react";
import PropTypes from "prop-types";

// VComponents
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryStack,
  VictoryTheme
} from "victory";

class Native extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = setInterval(() => {
      this.setState({
        // eslint-disable-line react/no-did-mount-set-state
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.setStateInterval);
  }

  getData() {
    return [1, 2, 3, 4, 5].map(() => {
      return [
        { x: 1, y: Math.random() },
        { x: 2, y: Math.random() },
        { x: 3, y: Math.random() },
        { x: 4, y: Math.random() },
        { x: 5, y: Math.random() }
      ];
    });
  }

  render() {
    return (
      <div className="Demo">
        <div className="Demo-bg">
          <div className="Demo-charts">
            <div className="Demo-charts-web">
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
                    return <VictoryArea key={key} data={data} />;
                  })}
                </VictoryStack>
                <VictoryAxis />
                <VictoryAxis dependentAxis />
              </VictoryChart>
            </div>
            <div className="Demo-charts-native">
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
                    return <VictoryArea key={key} data={data} />;
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
  alt: PropTypes.bool
};

export default Native;
