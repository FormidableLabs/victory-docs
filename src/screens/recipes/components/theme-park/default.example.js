

let theme = {};

if (false) {
  theme = {
    pie: {
      innerRadius: 75,
      style: {
        data: {
          stroke: "black",
          strokeWidth: 3
        },
        labels: {
          padding: 100,
          fontFamily: "monospace"
        }
      }
    }
  };
}

ReactDOM.render(<DemoVictoryComponent theme={theme}/>, mountNode);
