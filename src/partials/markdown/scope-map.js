import _ from "lodash";

const { assign, random, range, round } = _;
const scopeMap = {
  _,
  assign,
  random,
  range,
  round,
  sampleData: [
    {
      x: 1,
      y: 2
    },
    {
      x: 2,
      y: 3
    },
    {
      x: 3,
      y: 5
    },
    {
      x: 4,
      y: 4
    },
    {
      x: 5,
      y: 7
    }
  ],
  sampleErrorData: [
    {
      x: 1,
      y: 2,
      errorX: 0.1,
      errorY: 0.4
    },
    {
      x: 2,
      y: 3,
      errorX: 0.5,
      errorY: 0.1
    },
    {
      x: 3,
      y: 5,
      errorX: 0.3,
      errorY: 0.2
    },
    {
      x: 4,
      y: 4,
      errorX: 0.1,
      errorY: 0.3
    },
    {
      x: 5,
      y: 7,
      errorX: 0.2,
      errorY: 0.5
    }
  ],
  sampleDataDates: [
    {
      x: new Date(2016, 6, 1),
      open: 5,
      close: 10,
      high: 15,
      low: 0
    },
    {
      x: new Date(2016, 6, 2),
      open: 10,
      close: 15,
      high: 20,
      low: 5
    },
    {
      x: new Date(2016, 6, 3),
      open: 15,
      close: 20,
      high: 22,
      low: 10
    },
    {
      x: new Date(2016, 6, 4),
      open: 20,
      close: 10,
      high: 25,
      low: 7
    },
    {
      x: new Date(2016, 6, 5),
      open: 10,
      close: 8,
      high: 15,
      low: 5
    }
  ],
  sampleDataPolar: [
    {
      x: 45,
      y: 2
    },
    {
      x: 90,
      y: 3
    },
    {
      x: 135,
      y: 5
    },
    {
      x: 180,
      y: 4
    },
    {
      x: 225,
      y: 7
    },
    {
      x: 270,
      y: 2
    },
    {
      x: 315,
      y: 4
    },
    {
      x: 360,
      y: 7
    }
  ]
};

export default scopeMap;
