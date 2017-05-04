# VictoryVoronoiContainer

`VictoryVoronoiContainer` adds the ability to associate a mouse position with the data point(s)
closest to it. When this container is added to a chart, changes in mouse position will add the `active`
prop to to data and label components closest to the current mouse position. The closeness of data
points to a given position is determined by calculating a [voronoi diagram] based on the data of
every child `VictoryVoronoiContainer` renders. This container is useful for adding hover interactions,
like tooltips, to small data points, or charts with very dense or overlapping data. Read
[this guide] to learn how to use `VictoryVoronoiContainer` with tooltips.

`VictoryVoronoiContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component.
However, the container that uses it must be standalone
(`standalone={true}`), which is the default for all Victory components.

```jsx
<VictoryChart containerComponent={<VictoryVoronoiContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryVoronoiContainer` uses a superset of props used by [VictoryContainer]. All props are optional.

### dimension

When the `dimension` prop is set, voronoi selection will only take the given dimension into account.
For example, when `dimension` is set to "x", all data points matching a particular x mouse position
will be activated regardless of y value. When this prop is not given, voronoi selection is
determined by both x any y values.

*example:* `dimension="x"`

### radius

When the `radius` prop is set, the voronoi areas associated with each data point will be no larger
than the given radius. This prop should be given as a number.

*example:* `radius={25}`

### voronoiPadding

When the `voronoiPadding` prop is given, the area of the chart that will trigger voronoi events is
reduced by the given padding on every side. By default, no padding is applied, and the entire range
of a given chart may trigger voronoi events. This prop should be given as a number.

*example:* `voronoiPadding={5}`

### onActivated

The `onActivated` prop accepts a function to be called whenever new data points are activated. The
function is called with the parameter `points`-- an array of data objects.

*example:* `onActivated={(points) => filterList(points)}`


### onDeactivated

The `onDeactivated` prop accepts a function to be called whenever previously activated points are  The
function is called with the parameter `points`-- an array of active data objects.

*example:* `onDeactivated={(points) => filterList(points)}`

### labels

When a `labels` prop is provided to `VictoryVoronoiContainer` it will render a label component
rather than activating labels on the child components it renders. This is useful for creating multi-
point tooltips. This prop should be given as a function to be called with datum for each active
point.

*example:* `label={(d) => "y: " + d.y}`

### labelComponent

The `labelComponent` prop specified the component that will be rendered when `labels` are defined
on `VictoryVoronoiContainer`. If the `labels` prop is omitted, no label component will be rendered.

*default:* `labelComponent={<VictoryTooltip/>}`

## Standard Container Props

### style

The `style` prop defines the style of the container, and should be given as an object of SVG style attributes.
The `width` and `height` should be specified via props instead of style attributes as they determine
relative layout for components.

*example:* `style={{border: "1px solid #ccc"}}`

*default (provided by default theme):* VictoryTheme.grayscale. See [VictoryTheme] for more detail.

### responsive

The `responsive` prop specifies whether the rendered container should be a responsive container with a `viewBox` attribute, or a static container with absolute width and height.

*default:* `responsive={true}`

### width and height

The `width` and `height` props determine the width and height of the containing `<svg>`. By default VictoryContainer renders responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%"`, `height="auto"`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, set `responsive={false}`

*example:* `width={350}`

### events

The `events` prop attaches arbitrary event handlers to the container element. This prop should be
given as an object of event names and corresponding [React event handlers]. Events defined directly
via this prop will be masked by `defaultEvents` on `VictoryVoronoiContainer` (`onMouseMove` and
`onMouseLeave`), and by any events defined through Victory's event
system that target parent elements.

*example:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### title

The `title` prop specifies the title to be applied to the SVG to assist with accessibility for screen readers. The more descriptive this title is, the more useful it will be.

*example:* `title="Popularity of Dog Breeds by Percentage"`

### desc

The `desc` prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more informative the description, the more usable it will be for people using screen readers.

*example:* `desc="Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are not represented above 5% each."`

### portalComponent

The `portalComponent` prop takes a component instance which will be used as a container for children that should render inside a top-level container so that they will always appear above other elements. [VictoryTooltip] renders inside a portal so that tooltips always render above data. [VictoryPortal] is used to define elements that should render in the portal container. This prop defaults to [Portal], and should only be overridden when changing rendered elements from SVG to another type of element _i.e._ [react-native-svg] elements.

*default:* `portalComponent={<Portal/>}`

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a
component. Any styles or props defined in `theme` may be overwritten by props specified on the
component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*example:* `theme={VictoryTheme.material}`

### onTouchStart (native only)

The optional `onTouchStart` prop takes a function that is called on every touch event on the chart (when using `victory-native`). The most common use of `onTouchStart` is to prevent the chart's parent `ScrollView` from scrolling, so that the chart and container can be interacted with unencumbered. The function accepts a single parameter, `event`, a React Native [Synthetic Event]. Also see `onTouchEnd`.

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

### onTouchEnd (native only)

The optional `onTouchEnd` prop takes a function that is called at the conclusion of every touch event on the chart (when using `victory-native`). The most common use of `onTouchEnd` is to prevent the chart's parent `ScrollView` from scrolling, so that the chart and container can be interacted with unencumbered. The function accepts a single parameter, `event`, a React Native [Synthetic Event]. Also see `onTouchStart`.

[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[Portal]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-portal/portal.js
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[VictoryTheme]: https://formidable.com/open-source/victory/docs/victory-theme
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/guides/themes
[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[voronoi diagram]: https://github.com/d3/d3-voronoi
[Synthetic Event]: https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle
