/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode, VictoryChart, VictoryBar, Bar */

// Victory requires `react@^15.5.0` and `prop-types@^15.5.0`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      style: {
        data: { fill: "tomato"}
      }
    };
  }

  render() {
    const clickHandler = () => {
      const fillColor = this.state.clicked ? "blue" : "tomato";
      const clicked = !this.state.clicked;
      this.setState({
        clicked,
        style: {
          data: { fill: fillColor}
        }
      });
    };

    return (
      <div>
        <VictoryChart
          domainPadding={{x: 50, y: [0, 20]}}
          scale={{x: "time"}}
        >
          <VictoryBar
            dataComponent={<Bar events={{onClick: clickHandler}}/>}
            style={this.state.style}
            data={[
              {x: new Date(1986, 1, 1), y: 2},
              {x: new Date(1996, 1, 1), y: 3},
              {x: new Date(2006, 1, 1), y: 5},
              {x: new Date(2016, 1, 1), y: 4}
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
 }

ReactDOM.render(<App/>, mountNode);
