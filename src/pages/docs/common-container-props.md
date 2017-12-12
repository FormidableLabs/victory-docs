---
id: 33
title: Common Container Props
category: containers
sidebar: true
scope: null
---
# Common Container Props

### children

The `children` prop specifies the child or children that will be rendered within the container. This prop should not be set manually. It will be set by whatever Victory component is rendering the container.

### className

The `className` prop specifies a className that will be applied to the outer-most div renered by `VictoryContainer` if this prop is not set, the className will default to "VictoryContainer"

*example:* `className="myChart"`

### containerId

The `containerId` prop may be used to set a deterministic id for the container. When a `containerId` is not manually set, a unique id will be generated. It is usually necessary to set deterministic ids for automated testing.

### containerRef

The `containerRef` prop may be used to attach a ref to the outermost element rendered by the container. This prop should be given as a function.

*example:* `containerRef={(ref) => { this.chartRef = ref; }}`

### desc

The `desc` prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more descriptive this title is, the more useful it will be for people using screen readers.

*example:* `desc="Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are not represented above 5% each."`

### events

The `events` prop attaches arbitrary event handlers to the container element. This prop should be
given as an object of event names and corresponding [React event handlers][]. Events defined directly
via this prop will be masked by `defaultEvents` on `VictorySelectionContainer` (`onMouseDown`,
`onMouseUp`, and `onMouseMove`), and by any events defined through Victory's event
system that target parent elements.

*example:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### height

The `height` prop determines the height of the containing `<svg>`. By default VictoryContainer renders responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%"`, `height="100%"`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, set `responsive={false}`

*example:* `height={350}`

### portalComponent

The `portalComponent` prop takes a component instance which will be used as a container for children that should render inside a top-level container so that they will always appear above other elements. [VictoryTooltip][] renders inside a portal so that tooltips always render above data. [VictoryPortal][] is used to define elements that should render in the portal container. This prop defaults to [Portal][], and should only be overridden when changing rendered elements from SVG to another type of element _e.g.,_ [react-native-svg][] elements.

*default:* `portalComponent={<Portal/>}`

### portalZIndex

The `portalZIndex` prop determines the z-index of the div enclosing the portal component. If a `portalZIndex` prop is not set, the z-index of the enclosing div will be set to 99.

### responsive

The `responsive` prop specifies whether the rendered container should be a responsive container with a `viewBox` attribute, or a static container with absolute width and height.

*default:* `responsive={true}`

### style

The `style` prop defines the style of the container, and should be given as an object of style attributes.
The `width` and `height` should be specified via props instead of style attributes as they determine
relative layout for components.

*example:* `style={{border: "1px solid #ccc"}}`

*default (provided by default theme):* VictoryTheme.grayscale. See [VictoryTheme][] for more detail.

### theme

The `theme` prop specifies a theme to use for determining styles and layout props for a
component. Any styles or props defined in `theme` may be overridden by props specified on the
component instance. By default, components use a [grayscale theme][]. [Read more about themes here][].

*example:* `theme={VictoryTheme.material}`

### title

The `title` prop specifies the title to be applied to the SVG to assist with accessibility for screen readers. The more descriptive this title is, the more useful it will be for people using screen readers

*example:* `title="Popularity of Dog Breeds by Percentage"`

### width

The `width` prop determines the width of the containing `<svg>`. By default VictoryContainer renders responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%"`, `height="auto"`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, set `responsive={false}`

*example:* `width={350}`

## Native-Only Props

### onTouchStart

The optional `onTouchStart` prop takes a function that is called on every touch event on the chart (when using `victory-native`). The most common use of `onTouchStart` is to prevent the chart's parent `ScrollView` from scrolling, so that the chart and container can be interacted with unencumbered. The function accepts a single parameter, `event`, a React Native [Synthetic Event][]. Also see `onTouchEnd`.

*example:*

```jsx
<ScrollView scrollEnabled={this.state.scrollEnabled}>
  <VictoryChart
    containerComponent={
      <VictoryContainer
        onTouchStart={() => this.setState({ scrollEnabled: false })}
        onTouchEnd={() => this.setState({ scrollEnabled: true })}
      />
    }
  >
   <VictoryBar/>
  </VictoryChart>
</ScrollView>
```

### onTouchEnd

The optional `onTouchEnd` prop takes a function that is called at the conclusion of every touch event on the chart (when using `victory-native`). The most common use of `onTouchEnd` is to prevent the chart's parent `ScrollView` from scrolling, so that the chart and container can be interacted with unencumbered. The function accepts a single parameter, `event`, a React Native [Synthetic Event][]. Also see `onTouchStart`.

[VictoryPortal]: /docs/victory-portal
[Portal]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-portal/portal.js
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[VictoryTheme]: /docs/victory-theme
[VictoryTooltip]: /docs/victory-tooltip
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: /guides/themes
[Synthetic Event]: https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle
[React event handlers]: https://reactjs.org/docs/handling-events.html
