/* NOTE
  all one-line star comments starting with "eslint", "global", or "NOTE"
  will be removed before displaying this document to the user
*/
/* global React, ReactDOM, App, mountNode */
/* global VictoryChart, VictoryStack, VictoryBar, VictoryGroup */

class App extends React.Component {

  render() {
    const getBarData = () => {
      return [1, 2, 3, 4, 5].map(() => {
        return [
          { x: 1, y: Math.random() },
          { x: 2, y: Math.random() },
          { x: 3, y: Math.random() }
        ];
      });
    };

    return (
      <div>
        <VictoryChart domainPadding={{ x: 50 }} width={400} height={400}>
            <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
              <VictoryStack colorScale={"red"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"green"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"blue"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
            </VictoryGroup>
          </VictoryChart>
      </div>
    );
  }
}

ReactDOM.render(<App/>, mountNode);
