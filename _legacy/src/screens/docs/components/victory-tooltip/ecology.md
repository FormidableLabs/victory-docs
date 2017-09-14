# VictoryTooltip

`VictoryTooltip` renders a tooltip component with a set of default events. When `VictoryTooltip` is used as a label component for any Victory component that renders data, it will attach events to rendered data components that will activate the tooltip when hovered. `VictoryTooltip` renders text as well as a configurable [Flyout] container.

## Props

### text

The `text` prop defines the text `VictoryTooltip` will render. The `text` prop may be given as a string, number, or function of `datum`. When [VictoryLabel] is used as the `labelComponent`, strings may include newline characters, which VictoryLabel will split in to separate `<tspan/>` elements.

### active

The `active` prop specifies whether the tooltip component should be displayed.

### activateData

When true, tooltip events will set the `active` prop on both data and label elements.

*default:* `activateData={false}`

### datum

Victory components can pass a `datum` prop to their label component. This can
be used to calculate functional styles, and determine text.

### data

Victory components can pass a `data` prop to their label component. This can be useful in custom components that need to make use of the entire dataset.

### index

The `index` prop represents the index of the datum in the data array.

### style

The `style` prop applies SVG style properties to the rendered `<text>` element.

### flyoutStyle

The `style` prop applies SVG style properties to the rendered flyout container. These props will be passed to the `flyoutComponent`.

### events

The `events` prop attaches arbitrary event handlers to the label component. This prop should be given as an object of event names and corresponding event handlers. When events are provided via Victory's event system, event handlers will be called with the event, the props of the component is attached to, and an eventKey.

*examples:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### x and y

The `x` and `y` props define the base position of the tooltip element. By default, these props match the x, y coordinates of the plotted datum, so tooltips will show up by the datum the tooltip is associated with.

### dx and dy

The `dx` and `dy` props define horizontal and vertical offsets from the base x, y position of the tooltip.

### width and height

The `width` and `height` props define the width and height of the tooltip flyout. These props may be given as positive numbers or functions of datum. If these props are not set, `width` and `height` will be determined based on an [approximate text size] calculated from the `text` and `style` props provided to `VictoryTooltip`.

### orientation

The `orientation` prop determines which side of the (x, y) coordinate the tooltip should be rendered on. This prop can be given as "top", "bottom", "left", "right", or as a function of datum that returns one of these values. If this prop is not provided it will be determined from the sign of the `datum`, and the value of the `horizontal` prop.

### horizontal

The `horizontal` prop determines whether to plot the flyouts to the left / right of the (x, y) coordinate rather than top / bottom. This is useful when an orientation prop is not provided, and data will determine the default orientation. _i.e._ negative values result in a left orientation and positive values will result in a right orientation by default.

### pointerLength

The `pointerLength` prop determines the length of the triangular pointer extending from the flyout. This prop may be given as a positive number or a function of datum.

### pointerWidth

The `pointerWidth` prop determines the width of the base of the triangular pointer extending from the flyout. This prop may be given as a positive number or a function of datum.

### cornerRadius

The `cornerRadius` prop determines corner radius of the flyout container. This prop may be given as a positive number or a function of datum.

### labelComponent

The `labelComponent` prop takes a component instance which will be used to render each tooltip label. The new element created from the passed `labelComponent` will be supplied with the following properties: x, y, index, datum, verticalAnchor, textAnchor, style, text, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with the props described above.

*examples:* `labelComponent={<VictoryLabel dy={20}/>}`, `labelComponent={<MyCustomLabel/>}`

*default:* `<VictoryLabel/>`

### flyoutComponent

The `flyoutComponent` prop takes a component instance which will be used to create the flyout path for each tooltip. The new element created from the passed `flyoutComponent` will be supplied with the following properties: x, y, dx, dy, index, datum, cornerRadius, pointerLength, pointerWidth, width, height, orientation, style, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `flyoutComponent` is omitted, a default [Flyout] component will be created with props described above.

*examples:* `flyoutComponent={<Flyout x={50} y={50}/>}`, `flyoutComponent={<MyCustomFlyout/>}`


*default:* `<Flyout/>`

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a `<g>` tag.

*default:* `groupComponent={<g/>}`

### renderInPortal

When `renderInPortal` is true, rendered tooltips will be wrapped in [VictoryPortal] and rendered within the [Portal] element within [VictoryContainer]. _Note:_ This prop should _not_ be set to true when using a custom container element.

[Flyout]: https://formidable.com/open-source/victory/docs/victory-primitives#flyout
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[textSize]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-util/textsize.js
[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[VictoryContainer]: https://formidable.com/open-source/victory/docs/victory-container
[Portal]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-portal/portal.js
[approximate text size]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-util/textsize.js
