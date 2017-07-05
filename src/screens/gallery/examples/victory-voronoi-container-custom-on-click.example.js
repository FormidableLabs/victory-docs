/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryGroup, VictoryVoronoiContainer, VictoryLine, VictoryTooltip, VictoryScatter  */
/* eslint-disable no-arrow-condition */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

/*
  This example demonstrates a custom `onClick` event with hover events from `VictoryVoronoiContainer`
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleActivated(points) {
    const scatterPoints = points.length ?
      points.filter((point) => point.childName === "scatter") : [];
    this.setState({points: scatterPoints});
  }

  handleClick(evt, props) {
    const points = this.state.points;
    return points.length ?
      points.map((point) => {
        return {
          target: "data", childName: "scatter", eventKey: point.eventKey,
          mutation: (props) => props.symbol === "star" ?
            ({symbol: "circle", size: 8 }) : ({symbol: "star", size: 10})
        };
      }) : [];
  }

  render() {
    return (
      <VictoryChart height={400} width={400}
        containerComponent={
          <VictoryVoronoiContainer onActivated={this.handleActivated.bind(this)}/>
        }
        style={{parent: {cursor: "pointer"}}}
        events={[{
          target: "parent",
          eventHandlers: {
            onClick: (evt, props) => {
              return this.handleClick(evt, props);
            }
          }
        }]}
      >
          <VictoryGroup
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{fontSize: 10}}
              />
            }
            data={[
              {x: 1, y: -3},
              {x: 2, y: 5},
              {x: 3, y: 3},
              {x: 4, y: 0},
              {x: 5, y: -2},
              {x: 6, y: -2},
              {x: 7, y: 5}
            ]}
          >
            <VictoryLine/>
            <VictoryScatter name="scatter"
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
       </VictoryChart>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
