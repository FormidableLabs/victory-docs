import React from "react";
import { last, mean } from "lodash";
import LiveChart from "./livechart";

export default class DemoLiveChart extends React.Component {
  constructor(props) {
    super(props);
    this.period = 2000;
    this.domain = [54.6, 55.25];
    this.maxPoints = 30;
    this.state = {
      data: this.getInitialData()
    };
  }

  nextPoint(previous = null) {
    const [low, high] = this.domain;
    const newPoint = low + Math.random() * (high - low);
    return previous ? mean([previous, newPoint]) : newPoint;
  }

  getInitialData() {
    return [
      {x: 0, y: this.domain[0] + 0.05},
      {x: 1, y: this.domain[0] + 0.15}
    ];
  }

  getNewData() {
    const data = this.state.data;

    if (data.length !== this.maxPoints) {
      // add one
      const lastPoint = last(data);
      data.push(
        {y: this.nextPoint(lastPoint.y), x: lastPoint.x + 1}
      );
      return data;
    } else {
      return this.getInitialData();
    }
  }

  componentDidMount() {
    this.setStateInterval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        data: this.getNewData()
      });
    }, this.period);
  }

  componentWillUnmount() {
    clearInterval(this.setStateInterval);
  }

  getStyles() {
    return {
      parent: {
        display: "block",
        boxSizing: "border-box",
        margin: "0 auto",
        padding: 0,
        width: "auto",
        height: "100%",
        maxHeight: "280px"
      }
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <svg
        viewBox="0 0 450 350"
        className="fancyBorder"
        style={styles.parent}
      >
        <LiveChart
          data={this.state.data}
          period={this.period}
          domain={this.domain}
        />
      </svg>
    );
  }
}
