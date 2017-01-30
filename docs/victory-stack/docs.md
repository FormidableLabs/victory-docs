# VictoryStack

`VictoryStack` is a wrapper component that renders a given set of children in a stacked layout. Like other wrapper components, `VictoryStack` also reconciles the domain and layout for all its children, and coordinates animations and shared events.

`VictoryStack` works with:
[VictoryArea], [VictoryBar], [VictoryCandlestick], [VictoryErrorBar], [VictoryGroup],[VictoryLine], and [VictoryScatter]

## Props

### children

`VictoryStack` works with any combination of the following children: [VictoryArea], [VictoryBar], [VictoryCandlestick], [VictoryErrorBar], [VictoryGroup],[VictoryLine], and [VictoryScatter]. Children supplied to `VictoryGroup` will be cloned and rendered with new props so that all children share common props such as `domain` and `scale`, and so that attributes necessary for stacking are added to data objects.

### categories

The `categories` prop specifies how categorical data for a chart should be ordered. This prop should be given as an array of string values, or an object with these arrays of values specified for x and y. If this prop is not set, categorical data will be plotted in the order it was given in the data array.

*examples:* `categories={["dogs", "cats", "mice"]}`

### colorScale

The `colorScale` prop is an optional prop that defines a color scale to be applied to the children of `VictoryStack` This prop should be given as an array of CSS colors, or as a string corresponding to one of the built in color scales: "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue". `VictoryStack` will assign colors to its children by index, unless they are explicitly specified in styles. Colors will repeat when there are more children than colors in the provided `colorScale`.

*examples:* `colorScale={["red", "orange", "yellow", "green"]}`

*default (provided by default theme):* See [grayscale theme] for more detail

### theme

The `theme` prop specifies a theme to use for determining layout properties for a `VictoryStack`. Any styles or props defined in `theme` may be overwritten by props specified on the component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*default:* `theme={VictoryTheme.grayscale}`

### width and height

The `width` and `height` props determine the width and height of the containing `<svg>`. By default Victory components render responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%`, `height="auto`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, pass `responsive={false}` to the `containerComponent` like `containerComponent={<VictoryContainer responsive={false}/>}`, or set `standalone={false}` and render the resulting `<g>` tag in your own `<svg>` container. `VictoryStack` controls the `width` and `height` props of its children. If `VictoryStack` is nested within `VictoryChart`, this responsibility will be deferred to `VictoryChart`.

*default (provided by default theme):* `width={450} height={300}`


### padding

The `padding` prop specifies the amount of padding in number of pixels between the edge of the chart and any rendered child components. This prop can be given as a number or as an object with padding specified for top, bottom, left and right. As with [width and height], the absolute padding will depend on whether the component is rendered in a responsive container. `VictoryStack` controls the `padding` prop of its children. If `VictoryStack` is nested within `VictoryChart`, this responsibility will be deferred to `VictoryChart`.

*examples:* `padding={{top: 20, bottom: 60}}` or `padding={40}`

*default (provided by default theme):* `padding={50}`

### standalone

The `standalone` props specifies whether the component should be rendered in a independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`. `VictoryStack` forces its children to use `standalone={false}`.

*default:* `standalone={true}`

### horizontal

The `horizontal` prop determines whether the bars of any `VictoryBar` children supplied to `VictoryStack` will be laid vertically or horizontally. The bars will be vertical if this prop is false or unspecified, or horizontal if the prop is set to true.

*default:* `horizontal={false}`

### xOffset

The `xOffset` prop is used for grouping stacks of bars. This prop will be set by the VictoryGroup component wrapper, or can be set manually.


### scale

The `scale` prop determines which scales your chart should use. This prop can be given as a string specifying a supported scale ("linear", "time", "log", "sqrt"), or as an object with scales specified for x and y. `VictoryStack` controls the `scale` prop of its children.

*examples:* `scale="time"`, `scale={{x: "linear", y: "log"}}`

*default:* `scale="linear"`

### domain

The `domain` prop describes the range of data the component will include. This prop can be given as a array of the minimum and maximum expected values of the data or as an object that specifies separate arrays for x and y. If this prop is not provided, a domain will be calculated based on data and other information from all of its children. `VictoryStack` controls the `domain` prop of all its children.

*examples:* `domain={[-1, 1]}` `domain={{x: [0, 100], y: [0, 1]}}`

### domainPadding

The `domainPadding` prop specifies a number of pixels of padding to add the beginning or end of a domain. This prop is useful for explicitly spacing data elements farther from the beginning or end of a domain to prevent axis crowding. When given as a single number, `domainPadding` will be applied to the upper and lower bound of both the x and y domains. This prop may also be given as an object with numbers or two-element arrays specified for x and y. When specifying arrays for `domainPadding`, the first element of the array will specify the padding to be applied to domain minimum, and the second element will specify padding the be applied to domain maximum. `VictoryStack` controls the `domainPadding` prop of all its children.

*examples:* `domainPadding={20}`, `domainPadding={{x: [20, 0]}}`

**note:** Values supplied for  `domainPadding` will be coerced so that padding a domain will never result in charts including an additonal quadrant. For example, if an original domain included only positive values, `domainPadding` will be coerced so that the resulted padded domain will not include negative values.

### labels

The `labels` prop defines labels that will appear above each stack of data. This prop should be given as an array of values or as a function of data. If given as an array, the number of elements in the array should be equal to the length of the data array. Stack labels will override the labels prop of child components. Omit this prop, and set `labels` props on children for individual labels.

*examples:* `labels={["spring", "summer", "fall", "winter"]}`, `labels={(datum) => datum.title}`

### labelComponent

The `labelComponent` prop takes a component instance which will be used to render labels for each stack. The new element created from the passed `labelComponent` will be supplied with the following properties: x, y, index, datum, verticalAnchor, textAnchor, angle, style, text, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with props described above.

*examples:* `labelComponent={<VictoryLabel dy={20}/>}`, `labelComponent={<MyCustomLabel/>}`

*default:* `<VictoryLabel/>`


### containerComponent

The `containerComponent` prop takes a component instance which will be used to create a container element for standalone charts. The new element created from the passed `containerComponent` will be provided with the following props: `height`, `width`, `children` (the chart itself) and `style`. If a `containerComponent` is not provided, the default `VictoryContainer` component will be used. `VictoryContainer` supports `title` and `desc` props, which are intended to add accessibility to Victory components. The more descriptive these props are, the more accessible your data will be for people using screen readers. These props may be set by passing them directly to the supplied component. By default, `VictoryContainer` renders a responsive `svg` using the `viewBox` attribute. To render a static container, set `responsive={false}` directly on the instance of `VictoryContainer` supplied via the `containerComponent` prop. `VictoryContainer` also renders a `Portal` element that may be used in conjunction with [VictoryPortal] to force components to render above other children.

*examples:* `containerComponent={<VictoryContainer responsive={false} title="Chart of Q1 Profit/>}`

*default:* `containerComponent={<VictoryContainer/>}`

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a `<g>` tag.

*default:* `groupComponent={<g/>}`

### animate

The `animate` prop specifies props for [VictoryAnimation] and [VictoryTransition] to use. The animate prop may be used to specify the duration, delay and easing of an animation. When an `animate` prop is provided, `VictoryStack` will set the `animate` props on all of its children to coordinate animations. The behavior of `onEnter` and `onExit` and `onLoad` transitions will still be defined by each child component unless these are explicitly modified, or overwritten with the `animate` prop.

*examples:* `animate={{duration: 2000}}`

### events

`VictoryStack` uses the `VictorySharedEvents` wrapper to coordinate events between its children. The `events` prop takes an array of event objects. Event objects are composed of a `target`, an `eventKey`, a `childName` and `eventHandlers`. Targets may be any valid style namespace for a given component, so "data" and "labels" are valid targets for this components like `VictoryBar`. `eventKey` may be given as a single value, or as an array of values to specify individual targets. If `eventKey` is not specified, the given `eventHandlers` will be attached to all elements of the specified `target` type. The `childName` property may be given as a string or an array of strings to target multiple children. The `eventHandlers` object should be given as an object whose keys are standard event names (i.e. `onClick`) and whose values are event callbacks. The return value of an event handler is used to modify elemnts. The return value should be given as an object or an array of objects with optional `target`, `childName` and `eventKey` keys for specifying the element(s) to be modified, and a `mutation` key whose value is a function. The `target` and `eventKey` keys will default to those corresponding to the element the event handler was attached to. The `mutation` function will be called with the calculated props for each element that should be modified (i.e. a bar label), and the object returned from the mutation function will override the props of that element via object assignment.

*examples:*
```jsx
 <VictoryStack
  events={[{
    childName: ["bar-1", "bar-2"],
    target: "data",
    eventHandlers: {
      onClick: () => {
        return [
          {
            childName: ["bar-3", "bar-4"],
            target: "data",
            mutation: (props) => {
              const fill = props.style.fill;
              return fill === "gold" ? null : {style: {fill: "gold"}};
            }
          }
        ];
      }
    }
  }]}
>
  <VictoryBar name="bar-1"
    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
  />
  <VictoryBar name="bar-2"
    data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
  />
  <VictoryBar name="bar-3"
    data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
  />
  <VictoryBar name="bar-4"
    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 3}]}
  />
</VictoryStack>
```


### eventKey

The `eventKey` prop is used to assign eventKeys to data. This prop operates identically to data accessor props. By default, the eventKey of each datum will be equal to its index in the data array. `eventKey` may also be defined directly on each data object.

### sharedEvents

The `sharedEvents` prop is used to coordinate events between Victory components using `VictorySharedEvents`. This prop should not be set manually.

### name

The `name` prop is used to reference a component instance when defining shared events.

[VictoryArea]: https://formidable.com/open-source/docs/victory-area
[VictoryAxis]: https://formidable.com/open-source/docs/victory-axis
[VictoryBar]: https://formidable.com/open-source/docs/victory-bar
[VictoryCandlestick]: https://formidable.com/open-source/docs/victory-candlestick
[VictoryErrorBar]: https://formidable.com/open-source/docs/victory-error-bar
[VictoryGroup]: https://formidable.com/open-source/docs/victory-group
[VictoryLine]: https://formidable.com/open-source/docs/victory-line
[VictoryScatter]: https://formidable.com/open-source/docs/victory-scatter
[VictoryVoronoi]: https://formidable.com/open-source/docs/victory-voronoi
[VictoryVoronoiTooltip]: https://formidable.com/open-source/docs/victory-voronoi-tooltip
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/recipes/theme-park
[width and height]: https://formidable.com/open-source/victory/docs/victory-stack#width-and-height
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[VictoryAnimation]: https://formidable.com/open-source/victory/docs/victory-animation
[VictoryTransition]: https://formidable.com/open-source/victory/docs/victory-transition
