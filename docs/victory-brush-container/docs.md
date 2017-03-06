# VictoryBrushContainer

`VictoryBrushContainer` adds the ability to highlight a region of a chart, and interact with
highlighted regions, either by moving the region, expanding the region, or selecting a new region.
To add these behaviors, add `VictoryBrushContainer` as the `containerComponent` of your chart.

```jsx
<VictoryChart containerComponent={<VictoryBrushContainer/>}>
  <VictoryLine data={data} />
  <VictoryBar data={moreData}/>
</VictoryChart>
```

## Props

`VictoryBrushContainer` uses a superset of props used by [VictoryContainer].


### selectedDomain

The optional `selectedDomain` prop describes the highlighted state. This prop is an object that
specifies separate arrays for x and y. Each array is a tuple that describes the minimum and maximum
values to render. If this prop is not provided initially, the chart will render with the entire
domain highlighted. When this prop changes, the chart will render with a new highlighted domain.

*examples:* `selectedDomain={{x: [50, 100], y: [0, 100]}`

### dimension

When the `dimension` prop is set, brushing will only be specific to the to the given dimension
(either x or y), and the entire domain of the other dimension will be highlighted. When this prop
is not specified, highlighting will occur along both dimensions.

### onDomainChange

The optional `onDomainChange` prop accepts an function to be called on each update to the
highlighted domain. The function accepts a single parameter of `domain`.

### selectionStyle

The `selectionStyle` prop should be given as an object of style attributes to be applied to the
`selectionComponent`

*default:* `selectionStyle={{stroke: "transparent", fill: "black", fillOpacity: 0.1}}

### selectionComponent

The `selectionComponent` prop specifies the element to be rendered for for the highlighted area.
When this prop is not specified, a `<rect/>` will be rendered. This component will be supplied with
the following props: x, y, width, height, and style.

*default:* `selectionComponent={<rect/>}`

### handleStyle

The `handleStyle` prop should be given as an object of style attributes to be applied to the
`handleComponent`. Handles refer to the region on each highlighted area where the the area may be
expanded. Only handles relevent to the given `dimension` will be rendered. For example, when
`dimension="x"` only "left" and "right" handles will be rendered. Handler are automatically styled
with cursors appropriate to their orientation.

*default:* `handleStyle={{stroke: "transparent", fill: "transparent"}}

### handleComponent

The `handleComponent` prop specifies the element to be rendered for each handle for the highlighted
area. When this prop is not specified, a `<rect/>` will be rendered. This component will be supplied
with the following props: x, y, width, height, cursor, and style.

*default:* `handleComponent={<rect/>}`

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
