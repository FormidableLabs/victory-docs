# Getting Started with Victory Native

Victory Native extends Victory for use on iOS and Android. Victory Native uses an identical API, so Victory code can easily be reused across platforms. The following guide replicates our [getting started guide] with iOS, but an Android demo is also included. For more advanced Victory examples, check out our [other guides]. 

## Overview

If you're already comfortable with Victory and React Native, this tutorial will not be necessary. The only changes you will need to make to existing Victory code work in a React Native app are: 

- install `victory-native` and `react-native-svg`
- import components from `victory-native` instead of `victory`
- replace web specific events with native specific events _i.e._ `onMouseOver` -> `onPressIn`

## Tutorial

In this guide, we’ll show you how to get started with Victory and walk you through the creation and customization of a composed chart. We’ve created a GitHub repository with the completed project, and will link to the corresponding commit where appropriate to help you follow along. If you want, you can [view the completed tutorial here].

### 1. Set up a basic React Native project

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/16d3ce02be0fe75426a1a67b6aaf8f46f72760b7)

You can start from scratch, or start with the first commit of this tutorial:

```
  $ git clone https://github.com/FormidableLabs/victory-native-tutorial.git
  $ cd victory-native-tutorial
  $ git reset --hard 16d3ce
```

Your project structure should look like this:

```
  .
  ├── .gitignore                 
  ├── .npmignore                  
  ├── package.json             # package.json will be modified
  ├── README.md
  └── demo                        
      ├── android
      │   └── ...         
      ├── ios
      │   └── ...
      ├── ...
      ├── index.android.js      
      ├── index.ios.js          # index.ios.js will be modified
      └── package.json
```

### 2. Add Victory Native

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/4f93425ef7aa62dfa8bb8d6a40e39f574affdeed)
To use Victory Native, add `victory-native` and `react-native-svg` to your project dependencies in `package.json`, and `npm install` all dependencies.

```js
  ...
  "dependencies": {
    "react": "^15.3.0",
    "react-dom": "^15.3.0",
    "react-native": "~0.35.0",
    "react-native-svg": "^4.3.0",
    "victory-native": "~0.4.0"
  }
```

To see your base project, first run `npm start` and open `demo/ios/Demo.xcodeproj` in xcode, then run the app. If this is your first time working with React Native, you may need to [install additional dependencies]. 

Once you're up and running, you can import your first Victory Native component in `demo/index.ios.js`.

```
import { VictoryBar } from "victory-native";
```

and render it inside your `ScrollView`:

```jsx
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>{"Victory Tutorial"}</Text>
        <VictoryBar/>
      </ScrollView>
    );
  }
```

Just like Victory, Victory Native components will default data when no props are provided. Press `⌘ + R` in the simulator to refresh the app and see your changes.

### 3. Add Data and Styles

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/3f259ec52c9e71b01c14ff6d4375950179578da8)

Now let's add some data. Take advantage of [data accessors] to specify how an array of data should be plotted. We can change the color of the bars with a basic style object.

```jsx
  ...
  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

  class Demo extends Component {
    render() {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.text}>{"Victory Tutorial"}</Text>
          <VictoryBar
            style={{
              data: {fill: "blue"}
            }}
            data={data}
            x="quarter"
            y="earnings"
          />
        </ScrollView>
      );
    }
  }
```

### 4. Add VictoryChart

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/a016e8eafc954f90a2974273cbb3c75d1e427048)

Add the [VictoryChart wrapper] to add default axes to your bar component. VictoryChart also reconciles the domain, scale, and other props of its children so that they form an accurate chart. First import `VictoryChart`

```jsx
import { VictoryBar, VictoryChart } from "victory-native";
```
Then wrap `VictoryBar` in `VictoryChart`. Refresh your app to see the default axes.

```jsx
  ...
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.text}>{"Victory Tutorial"}</Text>
    <VictoryChart>
      <VictoryBar
        style={{
          data: {fill: "blue"}
        }}
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  </ScrollView>
```

### 5. Customize the Axes

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/5f3bffa364a919db7648d4ba5446e6d4df557c29)

Import `VictoryAxis` to define your own axis components for `VictoryChart` to use:

```jsx
  import { VictoryAxis, VictoryBar, VictoryChart } from "victory-native";
```

Set the `dependentAxis` prop to specify the dependent axis. [`tickValues`] and [`tickFormat`] define the position and display of the axis ticks. `VictoryChart` automatically calculates a domain based on the data of its children. To add some space between the bars and the axes, specify a `domainPadding` prop. This prop will increase the domain by a value corresponding to the specified number of pixels. [Read more about `domainPadding`].

```jsx
  <VictoryChart
    domainPadding={40}
  >
    <VictoryAxis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryBar
      style={{
        data: {fill: "blue"}
      }}
      data={data}
      x="quarter"
      y="earnings"
    />
  </VictoryChart>
```

### 6. Stack data and change the theme

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/ba2de02ca866b6ca1517e11d2b4e75b6ecd309ef)

Import `VictoryStack` and `VictoryTheme` 

```jsx
  import { 
    VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme 
  } from "victory-native";

```

[`VictoryStack`] is a wrapper component that is used to create a stacked layout for its children. Let's add more data and create a stacked bar chart:

```jsx
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
```

To define a stacked layout, just wrap `VictoryStack` around all the data components that should be stacked. `VictoryStack` can also be used within `VictoryChart`. The domain automatically adjusts to accomodate the cumulative maximum of the stacked data.

```jsx
  <VictoryChart
    domainPadding={40}
    theme={VictoryTheme.material}
  >
    <VictoryAxis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryStack>
      <VictoryBar
        data={data2012}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data2013}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data2014}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data2015}
        x="quarter"
        y="earnings"
      />
    </VictoryStack>
  </VictoryChart>
```

In this commit, we've also changed the theme on `VictoryChart`. Themes may be used to define a consistent look for a set of components. By default, Victory components use the [grayscale theme]. Let's see what the [material theme] looks like. [Read more about defining your own themes]. 

*note:* Themes should be defined on the top level component.


### 7. Refine styles

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/0bbdda0f1594a58a7113a46063eb92746ef8d946)

`VictoryStack` can also be used to control the styles of its children, but styles applied directly to a child component will always take precedence.

```jsx
  <VictoryChart
    domainPadding={40}
    theme={VictoryTheme.material}
  >
    <VictoryAxis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryStack
      style={{
        data: { width: 15, stroke: "white", strokeWidth: 2 }
      }}
      colorScale={["cyan", "gold", "orange", "tomato"]}
    >
      <VictoryBar
        style={{
          data: { width: 13, strokeWidth: 0, fill: "navy"}
        }}
        data={data2012}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data2013}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data2014}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data2015}
        x="quarter"
        y="earnings"
      />
    </VictoryStack>
  </VictoryChart>
```

### 8. Replace VictoryBar with VictoryArea

#### [see the commit](https://github.com/FormidableLabs/victory-native-tutorial/commit/a656196e5a0cf721d7748c0722693a0fa93d48f8)

Want to see what your data looks like in a different format? Victory Native components are modular, and easily interchangeable. Let's make a stacked area chart instead of a stacked bar chart:

Import `VictoryArea`

```jsx
  import { 
    VictoryAxis, VictoryArea, VictoryChart, VictoryStack, VictoryTheme } 
  from "victory-native";
```

Then, simply replace all instances of `VictoryBar` with `VictoryArea`, and tweak styles as necessary

```jsx
  <VictoryChart
    theme={VictoryTheme.material}
  >
    <VictoryAxis
      tickValues={[1, 2, 3, 4]}
      tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={(x) => (`$${x / 1000}k`)}
    />
    <VictoryStack
      style={{
        data: { stroke: "white", strokeWidth: 4 }
      }}
      colorScale={["cyan", "gold", "orange", "tomato"]}
    >
      <VictoryArea
        style={{
          data: { fill: "navy" }
        }}
        data={data2012}
        x="quarter"
        y="earnings"
      />
      <VictoryArea
        data={data2013}
        x="quarter"
        y="earnings"
      />
      <VictoryArea
        data={data2014}
        x="quarter"
        y="earnings"
      />
      <VictoryArea
        data={data2015}
        x="quarter"
        y="earnings"
      />
    </VictoryStack>
  </VictoryChart>
```

[getting started guide]: https://formidable.com/open-source/victory/docs
[other guides]: https://formidable.com/open-source/victory/guides
[view the completed tutorial here]: https://github.com/FormidableLabs/victory-native-tutorial
[install additional dependencies]: https://facebook.github.io/react-native/docs/getting-started.html
[data accessors]: https://formidable.com/open-source/victory/guides/data-accessors
[VictoryChart wrapper]: https://formidable.com/open-source/victory/docs/victory-chart
[`tickValues`]: https://formidable.com/open-source/victory/docs/victory-axis/#tickvalues
[`tickFormat`]: https://formidable.com/open-source/victory/docs/victory-axis/#tickformat
[Read more about `domainPadding`]: https://formidable.com/open-source/victory/docs/victory-chart#domainpadding
[`VictoryStack`]: https://formidable.com/open-source/victory/docs/victory-stack
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[material theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/material.js
[Read more about defining your own themes]: https://formidable.com/open-source/victory/guides/themes