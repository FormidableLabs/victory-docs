import React from "react";
import { VictoryZoom, VictoryChart, VictoryLine } from "victory-chart";
import { range, random } from "lodash";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.getScatterData(),
      zoomDomain: {x: [20, 50]},
      selectedDomain: {x: [20, 50]}
    };
  }

  getScatterData() {
    return range(0, 100).map((index) => {
      return {
        x: index,
        y: random(2, 100)
      };
    });
  }

  handleDomainChange(domain) {
    this.setState({
      selectedDomain: domain
    });
  }

  handleClick(val) {
    const {x: [x0, x1]} = this.state.selectedDomain;
    const minX = Math.max(0, x0 + val);
    const maxX = Math.min(100, x1 + val);
    let domain;
    if (minX === 0) {
      domain = [0, 10];
    } else if (maxX === 100) {
      domain = [90, 100];
    } else {
      domain = [minX, maxX];
    }
    this.setState({
      zoomDomain: {x: domain},
      selectedDomain: {x: domain}
    });
  }

  printDomain() {
    return this.state.selectedDomain
      .x
      .map((n) => Math.round(n * 100) / 100)
      .join(", ");
  }

  getStyles() {
    return {
      parent: {
        boxSizing: "border-box",
        display: "block",
        margin: "0 auto",
        padding: 0
      },
      button: {
        margin: "20px 10px 0",
        padding: 5,
        border: "2px solid black"
      },
      buttonContainer: {
        marginBottom: "-50px"
      }
    };
  }


  render() {
    const styles = this.getStyles();

    return (
      <div className="Benefits-demo fancyBorder">
        <div style={styles.buttonContainer}>
          <button style={styles.button}
            onClick={this.handleClick.bind(this, 10)}
          >
            PAN +10
          </button>

          <button style={styles.button}
            onClick={this.handleClick.bind(this, -10)}
          >
            PAN -10
          </button>

        </div>
        <VictoryZoom
          zoomDomain={this.state.zoomDomain}
          onDomainChange={this.handleDomainChange.bind(this)}
        >
          <VictoryChart
            padding={{
              top: 80, bottom: 50, left: 50, right: 50
            }}
            style={{parent: styles.parent}}
            width={450} height={350}
            animate={{duration: 1000}}
          >
            <VictoryLine data={this.state.data} interpolation="basis"/>
          </VictoryChart>
        </VictoryZoom>
      </div>
    );
  }
}
