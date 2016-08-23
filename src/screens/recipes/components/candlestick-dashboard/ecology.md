Candlestick Dashboard
=============

```playground_norender
const labels = {
  hour: ["12:00am", "6:00am", "12:00pm", "6:00pm", "11:00pm"],
  week: ["Jan", "Apr", "Jul", "Oct", "Jan"],
  day: ["Jan", "Feb", "Mar", "Apr"]
};

const buttonStyle = {
  padding: 10,
  margin: "20px 10px",
  backgroundColor: "white",
  border: "none",
  width: 100,
  height: 40,
  textAlign: "center"
};

class CandlestickDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      period: "hour",
      data: this.generateHourData(),
      labels: labels.hour,
      active: "hour"
    };

    this.onToggleDay = this.onToggleDay.bind(this);
    this.onToggleWeek = this.onToggleWeek.bind(this);
    this.onToggleHour = this.onToggleHour.bind(this);
  }

  generateDayData() {
    // business days (M-F) in a quarter
    return range(60).map((i) => {
      return {
        x: i,
        open: random(200, 400),
        close: random(200, 400),
        high: random(350, 450),
        low: random(150, 250),
        volume: random(0, 100)
      };
    });
  }

  generateWeekData() {
    return range(52).map((i) => {
      return {
        x: i,
        open: random(200, 400),
        close: random(200, 400),
        high: random(350, 450),
        low: random(150, 250),
        volume: random(0, 100)
      };
    });
  }

  generateHourData() {
    return range(24).map((i) => {
      return {
        x: i,
        open: random(200, 400),
        close: random(200, 400),
        high: random(350, 450),
        low: random(150, 250),
        volume: random(0, 100)
      };
    });
  }

  onToggleWeek() {
    this.setState({
      period: "week",
      data: this.generateWeekData(),
      labels: labels.week,
      active: "week"});
  }

  onToggleDay() {
    this.setState({
      period: "day",
      data: this.generateDayData(),
      labels: labels.day,
      active: "day"});
  }

  onToggleHour() {
    this.setState({
      period: "day",
      data: this.generateHourData(),
      labels: labels.hour,
      active: "hour"});
  }

  render() {
    const isHour = this.state.active === "hour" ? true : false;
    const isWeek = this.state.active === "week" ? true : false;
    const isDay = this.state.active === "day" ? true : false;

    const domainMax = this.state.data.length;
    const barWidth = domainMax / domainMax - 1;

    const hourStyle = assign({}, buttonStyle,
      {backgroundColor: isHour ? "aqua" : "white", color: isHour ? "white" : "black"});
    const weekStyle = assign({}, buttonStyle,
      {backgroundColor: isWeek ? "aqua" : "white", color: isWeek ? "white" : "black"});
    const dayStyle = assign({}, buttonStyle,
      {backgroundColor: isDay ? "aqua" : "white", color: isDay ? "white" : "black"});

    return (
      <div
        style={{width: "100%",
          height: "100%",
          backgroundColor: "black",
          margin: "0 auto"}}
      >
        <div style={{margin: "0 auto", textAlign: "center", width: 600}}>
          <button style={weekStyle} onClick={this.onToggleWeek}>Annually</button>
          <button style={dayStyle} onClick={this.onToggleDay}>Quarterly</button>
          <button style={hourStyle} onClick={this.onToggleHour}>Daily</button>
        </div>
        <svg style={{width: "100%", height: "100%", margin: "0 auto", textAlign: "center"}} viewBox="0 0 450 400">
          <VictoryArea
            animate={{
              duration: 1000,
              onEnter: {
                duration: 500,
                before: () => ({opacity: 0}),
                after: () => ({opacity: 0.5})
              },
              onExit: {
                duration: 500,
                before: () => ({opacity: 0})
              }
            }}
            data={this.state.data.map((d) => assign({}, d, {
              yOffset: ((Math.min(d.open, d.close) + d.low) / 2)
            }))}
            standalone={false}
            domain={{y: [0, 450]}}
            y={(d) => (((Math.max(d.open, d.close) + d.high) / 2) - d.yOffset)}
            style={{data: {fill: "blue", opacity: (d) => last(d).opacity}}}
          />
          <VictoryBar
            animate={{
              duration: 1000,
              onEnter: {
                duration: 500,
                before: () => ({volume: 0}),
                after: (d) => ({volume: d.volume})
              },
              onExit: {
                duration: 500,
                before: () => ({volume: 0})
              }
            }}
            data={this.state.data}
            standalone={false}
            domain={{x: [-1, domainMax], y: [0, 450]}}
            y={"volume"}
            style={{data: {fill: (d) => d.open > d.close ? "red" : "aqua", width: barWidth}}}
          />
          <VictoryCandlestick
            data={this.state.data}
            domain={{x: [-1, domainMax], y: [0, 450]}}
            standalone={false}
            style={{data: {stroke: "none"}}}
            candleColors={{positive: "aqua", negative: "red"}}
            animate={{
              duration: 1000,
              onEnter: {
                duration: 500,
                before: (d) => ({open: d.low, high: d.low, close: d.low, opacity: 0}),
                after: (d) => (assign({opacity: 1}, d))
              },
              onExit: {
                duration: 500,
                before: (d) => ({open: d.low, high: d.low, close: d.low, opacity: 0})
              }
            }}
          />
          <VictoryAxis
            scale={"time"}
            standalone={false}
            tickValues={this.state.labels}
            style={{axis: {stroke: "white"}, ticks: {stroke: "white"}, tickLabels: {fill: "white"}}}
          />
        </svg>
      </div>
    );
  }
}


ReactDOM.render(<CandlestickDashboard/>, mountNode)

```
