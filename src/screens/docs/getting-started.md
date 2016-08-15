# Getting Started with Victory

Victory is an opinionated, but fully overridable, ecosystem of composable React components for building interactive data visualizations. 

In this guide, we’ll show you how to get started with Victory and walk you through the creation and customization of a composed chart. We’ve created a GitHub repository with the completed project, and will link to the corresponding commit where appropriate to help you follow along. If you want, you can view the completed tutorial [here](https://github.com/FormidableLabs/victory-tutorial/blob/master/src/js/client.js).

### 1. Set up a basic React project

You can do this on your own if you'd like, or you can clone down [this one](https://github.com/FormidableLabs/victory-tutorial/tree/260e1fddde48532707855177c0ecbc674b184823) that we've created for you. If you're cloning down our example, remember to run an ```npm install``` to install all necessary dependencies. Once you've done this, you can run the webpack server with the command ```npm start```, and the project will render at ```localhost:8080```.

### 2. Add Victory

Add Victory to your project with the command ```npm install victory```, then import it into your React project. For now, let's import the whole library until we know what chart type we'll be using. The imports at the top of your main Javascript file should now look like this:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
```

### 3. Add your data

You can import your data from an external file or API, or create an array of data points as a variable. Here is the data that we'll be using for our chart, which is tracking earnings per fiscal quarter:

```js
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
```

### 4. Add your first Victory component

Since we're doing a simple comparison of earnings between quarters, let's use a bar chart to visualize the data. We aren't going to need the whole Victory library, so let's change our import statement to reflect only the components that we need. Right now, that's just VictoryBar, so it should look like this:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';
```

Now, we can render our first Victory component! Components have fallbacks if you haven't added custom data, so let's check out what the default looks like.

```playground
// renders the default component with fallback data
<VictoryBar/>
```

Looking good! Now we can add our data. VictoryBar looks for ```x``` and ```y``` values in data points, which our data doesn't have. We can work around this by adding accessor props to our VictoryBar component like so:

```js
x={"quarter"}
y={"earnings"}
```

Now we have a chart that's rendering our data! (See the commit [here](https://github.com/FormidableLabs/victory-tutorial/tree/3a0951d78202e4333fc8ae07a673173732209ee5).)

```playground_norender
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryBar
        data={data}
        // data accessor for x values
        x={"quarter"}
        // data accessor for y values
        y={"earnings"}
      />  
    )
  }
}

ReactDOM.render(<App/>, mountNode);
```

### 5. Adding a VictoryChart wrapper

Our chart would look better with some axes to give the data context. The easiest way to do that with Victory is to add a VictoryChart wrapper around all of the components that you'd like to include in the same chart.
Let's import VictoryChart, so that our import statements now look like so:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart } from 'victory';
```

Now we can wrap our VictoryBar component in VictoryChart to make the magic happen. (See the commit [here](https://github.com/FormidableLabs/victory-tutorial/tree/15063b2f79cff843f668f43ddd46d4bcd7f96acd).)

```playground_norender
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryBar
          data={data}
          x={"quarter"}
          y={"earnings"}
        />
      </VictoryChart>  
    )
  }
}

ReactDOM.render(<App/>, mountNode);
```

### 6. Customize the axes

VictoryChart has solid defaults, but we can add better context for our data if we modify the tick labels on the axes to be a little more sensible. We can do this by manually adding VictoryAxis components to our chart, so let's import VictoryAxis. Import statements should now look like this:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
```

In the chart below, we've modified the axes to better fit our needs. If you want to retain a vertical axis, remember to add a second axis component with the ```dependentAxis``` prop set to ```true```. We've modified the format of the tick labels on our vertical axis with the ```tickLabelFormat``` prop, and have included only the tick values that we need on the horizontal axis by passing an array to the ```tickValues``` prop. We've also added the ```domainPadding``` prop to our VictoryChart component for good measure, so that the bars of our chart don't overlap the vertical axis. (See the commit [here](https://github.com/FormidableLabs/victory-tutorial/tree/c5be2277266d6e78f9402a610decb08e07642de2).)

```playground_norender
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={10}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and what the
          // tick labels should say
          tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat allows d3 to determine the number of
          // ticks based on data, but formats them to look the way that you'd like
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x={"quarter"}
          y={"earnings"}
        />
      </VictoryChart>
    )
  }
}

ReactDOM.render(<App/>, mountNode);
```

### 7. Add a Theme

Victory charts come with a default grayscale theme so that all components look clean and consistent. But let’s switch it up with the Victory-provided Material theme. We can do that by importing VictoryTheme and adding a theme prop to VictoryChart, since themes should always be applied to the outermost wrapper component in a chart.

Import statements should look like this:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme } from 'victory';
```

And here's the code and rendered component with our beautiful theme (See the commit [here](https://github.com/FormidableLabs/victory-tutorial/tree/fb904143eea6046e6841b4284e044360d4af5cf1)):

```playground_norender
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x={"quarter"}
          y={"earnings"}
        />
      </VictoryChart>
    )
  }
}

ReactDOM.render(<App/>, mountNode);
```

### 8. Stacking bar charts

Excellent! We have a great looking chart. But wait - we actually have three more years' worth of quarterly earnings that we need to compare, along with four-year totals for each quarter. A great way to display this would be with a stacked bar chart. Luckily, with VictoryStack, we can do just that! 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';
```

VictoryStack should go inside of the VictoryChart wrapper, but around all four VictoryBar charts that it will be stacking. (See the commit [here](https://github.com/FormidableLabs/victory-tutorial/tree/9bf170061599027e4bd5fcf8128e47adb83c0e98).)

```playground_norender
const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryChart
        domainPadding={10}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack>
          <VictoryBar
            data={data2012}
            x={"quarter"}
            y={"earnings"}
          />
          <VictoryBar
            data={data2013}
            x={"quarter"}
            y={"earnings"}
          />
          <VictoryBar
            data={data2014}
            x={"quarter"}
            y={"earnings"}
          />
          <VictoryBar
            data={data2015}
            x={"quarter"}
            y={"earnings"}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}

ReactDOM.render(<App/>, mountNode);
```

### Override VictoryTheme's color scale

Finally, let's add a ```colorScale``` to VictoryStack to override the one that's being passed down from ```VictoryTheme.material```. (See the commit [here](https://github.com/FormidableLabs/victory-tutorial/tree/9c77240e45db4e9fde4123ae29304461739a7035).)

```playground_norender
const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

class App extends React.Component {
  render() {
    return (
      <VictoryChart
        domainPadding={10}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryStack
          colorScale={"warm"}
        >
          <VictoryBar
            data={data2012}
            x={"quarter"}
            y={"earnings"}
          />
          <VictoryBar
            data={data2013}
            x={"quarter"}
            y={"earnings"}
          />
          <VictoryBar
            data={data2014}
            x={"quarter"}
            y={"earnings"}
          />
          <VictoryBar
            data={data2015}
            x={"quarter"}
            y={"earnings"}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}

ReactDOM.render(<App/>, mountNode);
```

### Documentation, Contributing, and Source

Congratulations! You’ve created your first chart with Victory. For more information about Victory and its components, check out the docs - see [VictoryChart](http://formidable.com/open-source/victory/docs/victory-chart) to get started. Interested in helping out or seeing what's happening under the hood? Victory is maintained at [github.com/FormidableLabs/victory](https://github.com/FormidableLabs/victory), and you can [start contributing here](https://github.com/FormidableLabs/victory/blob/master/CONTRIBUTING.md). Happy charting.
