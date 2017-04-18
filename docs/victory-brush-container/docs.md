# VictoryBrushContainer

`VictoryBrushContainer` adds the ability to highlight a region of a chart, and interact with
highlighted regions, either by moving the region, expanding the region, or selecting a new region.
`VictoryBrushContainer` is useful for selecting a region of a larger dataset by domain. Create a
brush control by tying the domain of the selected region to the domain of a separate chart.
See the [brush and zoom guide] for an example of using `VictoryBrushContainer` to create a brush
control.

`VictoryBrushContainer` is similar to `VictorySelectionContainer`. `VictoryBrushContainer` may be
used to identify the domain of a selected region, whereas `VictorySelectionContainer` may be used to
identify a list of data points within a selected region. `VictoryBrushContainer` will also create
persistent highlighted regions, whereas regions created by `VictorySelectionContainer`
disappear after `onMouseUp` events.

`VictoryBrushContainer` may be used with any Victory component that works with an x-y coordinate
system, and should be added as the `containerComponent` of the top-level component.

```jsx
<VictoryChart containerComponent={<VictoryBrushContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryBrushContainer` uses a superset of props used by [VictoryContainer]. All props are optional.

### selectedDomain

The optional `selectedDomain` prop describes the highlighted state. This prop is an object that
specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum
values to render. If this prop is not provided initially, the chart will render with the entire
domain highlighted. When this prop changes, the chart will render with a new highlighted domain.

*example:* `selectedDomain={{x: [50, 100], y: [0, 100]}`

### dimension

When the `dimension` prop is set, brushing will only be specific to the to the given dimension
(either x or y), and the entire domain of the other dimension will be highlighted. When this prop
is not specified, highlighting will occur along both dimensions.

*example:* `dimension="x"`

### onDomainChange

The optional `onDomainChange` prop accepts an function to be called on each update to the
highlighted domain. The function accepts a single parameter of `domain`. The `domain` parameter will
be provided as an object with min-max arrays for x and y.

*example:* `onDomainChange={(domain) => handeDomainChange(domain)}`

### selectionStyle

The `selectionStyle` adds custom styles to the `selectionComponent`. This prop should be given as
an object of SVG style attributes.

*default:* `selectionStyle={{stroke: "transparent", fill: "black", fillOpacity: 0.1}}

### selectionComponent

The `selectionComponent` prop specifies the component to be rendered for the highlighted area.
This component will be supplied with the following props: x, y, width, height, and style.
When this prop is not specified, a `<rect/>` will be rendered.

*default:* `selectionComponent={<rect/>}`

### handleStyle

The `handleStyle` adds custom styles to the `handleComponents`. This prop should be given as
an object of SVG style attributes.

Handles refer to the region on each highlighted area where the the area may be
expanded. Only handles relevent to the given `dimension` will be rendered. For example, when
`dimension="x"` only "left" and "right" handles will be rendered. Handler are automatically styled
with cursors appropriate to their orientation.

*default:* `handleStyle={{stroke: "transparent", fill: "transparent"}}

### handleComponent

The `handleComponent` prop specifies the component to be rendered for each handle for the highlighted
area.  This component will be supplied with the following props: x, y, width, height, cursor, and style.
When this prop is not specified, a `<rect/>` will be rendered.

*default:* `handleComponent={<rect/>}`

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
via this prop will be masked by `defaultEvents` on `VictoryBrushContainer` (`onMouseDown`,
`onMouseUp`, `onMouseMove` and `onMouseLeave`), and by any events defined through Victory's event
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
[Read more about themes here]: https://formidable.com/open-source/victory/recipes/theme-park
[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[React event handlers]: https://facebook.github.io/react/docs/events.html
[Synthetic Event]: https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle
