# VictoryZoomContainer

`VictoryZoomContainer` provides pan and zoom behavior for any Victory component that works with an
x, y axis. To add panning and zooming behavior, add `VictoryZoomContainer` as the
`containerComponent` of your chart.

```jsx
<VictoryChart containerComponent={<VictoryZoomContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryZoomContainer` uses a superset of props used by [VictoryContainer].


### zoomDomain

The optional `zoomDomain` prop describes the zoomed and panned state. This prop is an object that
specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum
values to render. If this prop is not provided initially, the chart will render without an initial
zoom. Updates to `zoomDomain` will trigger a re-render of the chart with the new domain.

*examples:* `zoomDomain={{x: [0, 100]}`

### minimumZoom

The optional `minimumZoom` prop sets a minimum domain extent for the zoomed chart. When this prop
is not specified, the default minimum zoom will cover 1 / 1000th of the original domain. This prop
should be given as an object with numeric values for x and y. These values will be used to calculate
the minimum domain around a zoomed in point.

*examples:* `minimumDomain={{x: 1, y: 0.01}`

### dimension

When the `dimension` prop is set, panning and zooming will be restricted to the given dimension
(either x or y), and the domain of the other dimension will remain static. When this prop is not
specified, both x and y dimensions will pan and zoom.

### onDomainChange

The optional `onDomainChange` prop accepts an function to be called on each update to the visible
domain. The function accepts a single parameter of `domain`.

### allowZoom

The optional `allowZoom` prop accepts a boolean that enable the zoom functionality. Panning will
still be possible when `allowZoom` prop is set to false, but

*default:* `allowZoom={true}`

### clipContainerComponent

`VictoryZoomContainer` works by clipping data outside of a given domain. `VictoryZoomContainer` uses
`VictoryClipContainer` by default. This prop should not be replaced with a custom component, but you
may want to set props on `VictoryClipContainer`, such as `clipPadding`

## Standard Container Props

### children

`VictoryContainer` is a wrapper component that renders its children within an `<svg>` element or a
`<g>` element. If no children are provided, `VictoryContainer` will render an empty tag.

### standalone

The `standalone` prop determines whether `VictoryContainer` will render an `<svg>` or a `<g>` tag.
When this prop is set to false, a `<g>` tag will be rendered. If this prop is set to true, or not
given, an `<svg>` will be rendered.

### style

The `style` prop defines the style of the container. The `width` and `height` should be specified via props as they determine relative layout for components.

*examples:* `style={{border: "1px solid #ccc"}}`

*default (provided by default theme):* VictoryTheme.grayscale. See [VictoryTheme] for more detail.

### width and height

The `width` and `height` props determine the width and height of the containing `<svg>`. By default VictoryContainer renders responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%"`, `height="auto"`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, set `responsive={false}`

### responsive

The `responsive` prop specifies whether the rendered container should be a responsive container with a `viewBox` attribute, or a static container with absolute width and height.

*default:* `responsive={true}`

### events

The `events` prop attaches arbitrary event handlers to the container element. This prop should be given as an object of event names and corresponding event handlers. When events are provided via Victory's event system, event handlers will be called with the event, the props of the component is attached to, and an eventKey when applicable.

*examples:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### title

The `title` prop specifies the title to be applied to the SVG to assist with accessibility for screen readers. The more descriptive this title is, the more useful it will be.

*examples:* `title="Popularity of Dog Breeds by Percentage"`


### desc

The `desc` prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more informative the description, the more usable it will be for people using screen readers.

*examples:* `desc="Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are not represented above 5% each."`

### portalComponent

The `portalComponent` prop takes a component instance which will be used as a container for children that should render inside a top-level container so that they will always appear above other elements. [VictoryTooltip] renders inside a portal so that tooltips always render above data. [VictoryPortal] is used to define elements that should render in the portal container. This prop defaults to [Portal], and should only be overridden when changing rendered elements from SVG to another type of element _i.e._ [react-native-svg] elements.

*default:* `portalComponent={<Portal/>}`

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a
component. Any styles or props defined in `theme` may be overwritten by props specified on the
component instance. By default, components use a [grayscale theme]. [Read more about themes here].

[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[Portal]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-portal/portal.js
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[VictoryTheme]: https://formidable.com/open-source/victory/docs/victory-theme
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/recipes/theme-park
[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
