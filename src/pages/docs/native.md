---
id: 1
title: Native
category: introduction
scope: null
---
# Getting Started with Victory Native

Victory Native extends Victory for use on iOS and Android. Victory Native uses an identical API, so Victory code can easily be reused across platforms. The following guide replicates our [getting started guide] with React Native. For more advanced Victory examples, check out our [other guides].

## Overview

If you're already comfortable with Victory and React Native, this tutorial will not be necessary. The only changes you will need to make to existing Victory code work in a React Native app are:

- Install `victory-native` and `react-native-svg`. Please note the `react-native-svg` [version restrictions].
- Link `react-native-svg`.
- Import components from `victory-native` instead of `victory`.
- Replace web-specific events with native-specific events, _e.g._ `onMouseOver` -> `onPressIn`.

## Tutorial

In this guide, we’ll show you how to get started with Victory Native and walk you through the creation and customization of a composed chart.

#### Prerequisites

This project builds off of the [React Native Getting Started Guide].
If you don't have `create-react-native-app` or have forget how to use it, simply follow that guide.

#### 1. Set up a basic React Native project

Use `create-react-native-app` to create a new React Native project.

```sh
create-react-native-app VictoryNativeTutorial
cd VictoryNativeTutorial/
```

Your project structure should look like this:

```sh
  VictoryNativeTutorial
  ├── .gitignore
  ├── package.json
  ├── App.js # we will modify this file
  ├── App.test.js
  ├── README.md
  ├── app.json
  └── node_modules/
```

You can try out the project using `npm start` as you had in the [React Native Getting Started Guide].
If you are having problems with Expo, just refer back to that guide.
You can also use `npm run ios` (if you have XCode installed) or `npm run android` (if you have an Android emulator installed).

#### 2. Add Victory Native

To use Victory Native, add `victory-native` to your project.

```sh
npm install victory-native --save
# or
yarn add victory-native
```

_Note:_ You may receive "unmet peer dependency" errors after installing;
rest assured that Victory Native can be used with `create-react-native-app`.

If you look in your `package.json`, you should now have `victory-native` in your dependencies:

```js
  ...
  "dependencies": {
    "expo": "...",
    "react": "...",
    "react-native": "...",
    "victory-native": "..."
  }
```

_Note:_ `victory-native` also relies on `react-native-svg` (see the [Overview](#overview) above),
but this is already included in `expo`, which `create-react-native-app` uses.

Once you're up and running, you can import your first Victory Native component in `App.js`.

```jsx
import { VictoryBar } from "victory-native";
```

and render it inside your `View`:

```jsx
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryBar/>
      </View>
    );
  }
}
```

Just like Victory, Victory Native components will use default data when no props are provided.
Save your changes to `App.js` and your app will be refreshed automatically.

#### 3. Add Data and Styles

Now let's add some data. Take advantage of [data accessors] to specify how an array of data should be plotted. We can change the color of the bars with a basic style object.

```jsx
...
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{"Victory Tutorial"}</Text>
        <VictoryBar
          style={{
            data: {fill: "blue"}
          }}
          data={data}
          x="quarter"
          y="earnings"
        />
      </View>
    );
  }
}
```

#### 4. Add VictoryChart

Add the [VictoryChart wrapper] to add default axes to your bar component. VictoryChart also reconciles the domain, scale, and other props of its children so that they form an accurate chart. First import `VictoryChart`:

```jsx
import { VictoryBar, VictoryChart } from "victory-native";
```

Then wrap `VictoryBar` in `VictoryChart`. Save the file to see the default axes.

```jsx
...
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}
```

#### 5. Customize the Axes

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

#### 6. Stack data and change the theme

Now import `VictoryStack` and `VictoryTheme`:

```jsx
import {
  VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme
} from "victory-native";
```

[`VictoryStack`] is a wrapper component that is used to create a stacked layout for its children. Let's add more data and create a stacked bar chart.

```jsx
const data1992 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data1993 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data1994 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data1995 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];
```

To define a stacked layout, just wrap `VictoryStack` around all the data components that should be stacked. `VictoryStack` can also be used within `VictoryChart`. The domain automatically adjusts to accommodate the cumulative maximum of the stacked data.

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
        data={data1992}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data1993}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data1994}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data1995}
        x="quarter"
        y="earnings"
      />
    </VictoryStack>
  </VictoryChart>
```

In this step, we've also changed the theme on `VictoryChart`. Themes may be used to define a consistent look for a set of components. By default, Victory components use the [grayscale theme]. Let's see what the [material theme] looks like. [Read more about defining your own themes].

_Note:_ Themes should be defined on the top-level component.


#### 7. Refine styles

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
        data={data1992}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data1993}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data1994}
        x="quarter"
        y="earnings"
      />
      <VictoryBar
        data={data1995}
        x="quarter"
        y="earnings"
      />
    </VictoryStack>
  </VictoryChart>
```

#### 8. Replace VictoryBar with VictoryArea

Want to see what your data looks like in a different format? Victory Native components are modular, and easily interchangeable. Let's make a stacked area chart instead of a stacked bar chart.

Import `VictoryArea`

```jsx
import {
  VictoryAxis, VictoryArea, VictoryChart, VictoryStack, VictoryTheme }
from "victory-native";
```

Then simply replace all instances of `VictoryBar` with `VictoryArea`, and tweak styles as necessary.

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
        data={data1992}
        x="quarter"
        y="earnings"
      />
      <VictoryArea
        data={data1993}
        x="quarter"
        y="earnings"
      />
      <VictoryArea
        data={data1994}
        x="quarter"
        y="earnings"
      />
      <VictoryArea
        data={data1995}
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
[version restrictions]: https://github.com/react-native-community/react-native-svg#notice
[React Native Getting Started Guide]: https://facebook.github.io/react-native/docs/getting-started.html
