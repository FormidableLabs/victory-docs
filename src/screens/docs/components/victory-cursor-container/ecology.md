# VictoryCursorContainer

`VictoryCursorContainer` adds a cursor to a chart to inspect coordinates.
The cursor can either be a 2-dimensional crosshair, or a 1-dimensional line.
The cursor moves with the mouse (or on touch on mobile devices) along the visible domain of the chart.
The cursor can also display a label for the active coordinates using the `cursorLabel` prop.

`VictoryCursorContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component.
However, the component that uses it must be standalone
(`standalone={true}`), which is the default for all top-level Victory components.

Note that the cursor allows you to inspect the entire domain, not just the data points.
If you would like to instead highlight only the data points, consider using [VictoryVoronoiContainer].

```playground
<VictoryScatter
  containerComponent={
    <VictoryCursorContainer
      cursorLabel={(d) => `${round(d.x, 2)}, ${round(d.y, 2)}`}
    />
  }
/>
```

## Props

`VictoryCursorContainer` uses a superset of props used by [VictoryContainer]. All props are optional.

### dimension

When the `dimension` prop is set, the cursor will be a line to inspect the given dimension
(either "x" or "y"). When this prop is not specified, the cursor will be a 2-dimensional crosshair.
For example, if you would like to inspect the time of time-series data, set `dimension={"x"}`;
the cursor will then be a vertical line that will inspect the time value of the current mouse position.

*example:* `dimension="x"`

### cursorLabel

The `cursorLabel` prop defines the label that will appear next to the cursor.
A label will only appear if `cursorLabel` is set.
This prop should be given as a function of a point (an Object with `x` and `y` properties).

*example:* `cursorLabel={(point) => point.x}`

### cursorLabelComponent

The `cursorLabelComponent` prop takes a component instance which will be used to render a label for the area.
The new element created from the passed `cursorLabelComponent` will be supplied with the following props:
`x`, `y`, `active`, `text`.
If `cursorLabelComponent` is omitted, a new [VictoryLabel] will be created with the props described above.

*default:* `cursorLabelComponent={<VictoryLabel/>}`

### cursorLabelOffset

The `cursorLabelOffset` prop determines the pixel offset of the cursor label from the cursor point.
This prop should be an Object with `x` and `y` properties, or a number to be used for both dimensions.

*default:* `cursorLabelOffset={{ x: 5, y: -10 }}`

### defaultCursorValue

Whenever the mouse is not over the chart, the cursor will not be displayed.
If instead you would like to keep it displayed,
use the `defaultCursorValue` prop to set the default value.
The prop should be a point (an Object with `x` and `y` properties) for 2-dimensional cursors,
or a number for 1-dimensional cursors.

*examples:* `defaultCursorValue={{x: 1, y: 1}}`, `defaultCursorValue={0}`

### onChange

If provided, the `onChange` function will be called every time the cursor value changes,
with the new value as its only argument.
A common use for `onChange` is to save the cursor value to state and use it in another part of the view.

*example:* `onChange={(value) => this.setState({cursorValue: value})}`

## Standard Container Props

### style

The `style` prop defines the style of the container, and should be given as an object of SVG style attributes.
The `width` and `height` should be specified via props instead of style attributes, as they determine
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
via this prop will be masked by `defaultEvents` on `VictoryCursorContainer` (`onMouseDown`,
`onMouseUp`, `onMouseMove` and `onMouseLeave`), and by any events defined through Victory's event
system that target parent elements.

*example:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### title

The `title` prop specifies the title to be applied to the SVG to assist with accessibility for screen readers. The more descriptive this title is, the more useful it will be for people using screen readers.

*example:* `title="Popularity of Dog Breeds by Percentage"`

### desc

The `desc` prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more informative the description, the more useful it will be for people using screen readers.

*example:* `desc="Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are not represented above 5% each."`

### portalComponent

The `portalComponent` prop takes a component instance which will be used as a container for children that should render inside a top-level container so that they will always appear above other elements. [VictoryTooltip] renders inside a portal so that tooltips always render above data. [VictoryPortal] is used to define elements that should render in the portal container. This prop defaults to [Portal], and should only be overridden when changing rendered elements from SVG to another type of element _e.g.,_ [react-native-svg] elements.

*default:* `portalComponent={<Portal/>}`

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a
component. Any styles or props defined in `theme` may be overridden by props specified on the
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
[victory-core]: https://github.com/FormidableLabs/victory-core
[VictoryTheme]: https://formidable.com/open-source/victory/docs/victory-theme
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[VictoryVoronoiContainer]: https://formidable.com/open-source/victory/docs/victory-voronoi-container
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/guides/themes
[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[React event handlers]: https://facebook.github.io/react/docs/events.html
[Synthetic Event]: https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
