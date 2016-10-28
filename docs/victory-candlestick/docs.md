# VictoryCandlestick

VictoryCandlestick renders a dataset a series of candlesticks. VictoryCandlestick can be composed with [VictoryChart] to create candlestick charts.  

## Props

### data

Specify data via the `data` prop. By default, Victory components expect data as an array of objects with `x` and `y` properties. Use the [x] and [y] data accessor props to define a custom data format. The `data` prop must be given as an array.

```
<VictoryCandlestick
  data={[{
    {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
    {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 3), open: 15, close: 20, high: 25, low: 10},
  }]}
/>
```

### x, open, close, high, and low

Use the `x`, `open`, `close`, `high`, and `low` data accessor props to determine how the component defines data in these dimensions. These props may be given in a variety of formats:

**string:** specify which property in an array of data objects should be used as value for a particular dimension

*examples:* `x="month"`, `open="start"`

**function:** use a function to translate each element in a data array into a value

*examples:* `x={(d) => new Date(d.month)}`

**array index:** specify which index of an array should be used for a value when data is given as an array of arrays

*examples:* `x={0}` , `open={1}` ...

**path string or path array:** specify which property in an array of nested data objects should be used an an x or y value

*examples:* `open="market[date].open"`, `y={["market", date, "open"]}`

### categories

The `categories` prop specifies how categorical data for a chart should be ordered. This prop should be given as an array of string values, or an object with these arrays of values specified for x and y. If this prop is not set, categorical data will be plotted in the order it was given in the data array. 

*examples:* `categories={["dogs", "cats", "mice"]}`

### style

The `style` prop defines the style of the component. The style prop should be given as an object with styles defined for `data`, `labels` and `parent`. Any valid svg styles are supported, but `width`, `height`, and `padding` should be specified via props as they determine relative layout for components in VictoryChart. Functional styles may be defined for any style property, and they will be evaluated with each datum.

```
style={{
  data: {fill: (d) => d.y > 0 ? "red" : "blue"},
  labels: {fontSize: 12},
  parent: {border: "1px solid #ccc"}
}}
```

**note:** When a component is rendered as a child of another Victory component, or within a custom `<svg>` element with `standalone={false}` parent styles will be applied to the enclosing `<g>` tag. Many styles that can be applied to a parent `<svg>` will not be expressed when applied to a `<g>`.

**note:** custom `angle` and `verticalAnchor` properties maybe included in labels styles.

*default (provided by default theme):* See [grayscale theme] for more detail

### theme

The `theme` prop specifies a theme to use for determining styles and layout properties for a component. Any styles or props defined in `theme` may be overwritten by props specified on the component instance. By default, components use a [grayscale theme]. [Read more about themes here].

*default:* `theme={VictoryTheme.grayscale}`

### width and height

The `width` and `height` props determine the width and height of the containing `<svg>`. By default Victory components render responsive containers with the `viewBox` attribute set to `viewBox="0, 0, width, height"` and `width="100%`, `height="auto`. In responsive containers, the `width` and `height` props affect the _aspect ratio_ of the rendered component, while the absolute width and height are determined by the container. To render a static container, pass `responsive={false}` to the `containerComponent` like `containerComponent={<VictoryContainer responsive={false}/>}`, or set `standalone={false}` and render the resulting `<g>` tag in your own `<svg>` container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting `width` and `height` props on the child component will have no effect.

*default (provided by default theme):* `width={450} height={300}`


### padding

The `padding` prop specifies the amount of padding in number of pixels between the edge of the chart and any rendered child components. This prop can be given as a number or as an object with padding specified for top, bottom, left and right. As with [width and height], the absolute padding will depend on whether the component is rendered in a responsive container. When a component is nested within `VictoryChart`, `VictoryStack`, or `VictoryGroup` setting `padding` on the child component will have no effect.

*examples:* `padding={{top: 20, bottom: 60}}` or `padding={40}`

*default (provided by default theme):* `padding={50}`

### standalone 

The `standalone` props specifies whether the component should be rendered in a independent `<svg>` element or in a `<g>` tag. This prop defaults to true, and renders an `svg`, however, wrapper components like `VictoryChart`, `VictoryStack`, and `VictoryGroup` force children to use `standalone={false}`.

*default:* `standalone={true}`

### candleColors

Candle colors are significant in candlestick charts, with colors indicating whether a market closed higher than it opened (positive), or closed lower than it opened (negative). The `candleColors` prop sould be given as an object with color strings specified for positive and negative.

*examples:* `candleColors={{positive: "green", negative: "red"}}`

*default (provided by default theme):* `candleColors={{positive: "white", negative: "black"}}`

### scale

The `scale` prop determines which scales your chart should use. This prop can be given as a string specifying a supported scale ("linear", "time", "log", "sqrt"), or as an object with scales specified for x and y.

*examples:* `scale="time"`, `scale={{x: "linear", y: "log"}}`

*default:* `scale="linear"`

### domain 

The `domain` prop describes the range of data the component will include. This prop can be given as a array of the minimum and maximum expected values of the data or as an object that specifies separate arrays for x and y. If this prop is not provided, a domain will be calculated from data, or other available information. 

*examples:* `domain={[-1, 1]}` `domain={{x: [0, 100], y: [0, 1]}}`

### domainPadding

The `domainPadding` prop specifies a number of pixels of padding to add the beginning or end of a domain. This prop is useful for explicitly spacing data elements farther from the beginning or end of a domain to prevent axis crowding. When given as a single number, `domainPadding` will be applied to the upper and lower bound of both the x and y domains. This prop may also be given as an object with numbers or two-element arrays specified for x and y. When specifying arrays for `domainPadding`, the first element of the array will specify the padding to be applied to domain minimum, and the second element will specify padding the be applied to domain maximum. 

*examples:* `domainPadding={20}`, `domainPadding={{x: [20, 0]}}` 

**note:** Values supplied for  `domainPadding` will be coerced so that padding a domain will never result in charts including an additonal quadrant. For example, if an original domain included only positive values, `domainPadding` will be coerced so that the resulted padded domain will not include negative values.

### labels 

The `labels` prop defines the labels that will appear for each candlestick. This prop should be given as an array or as a function of data. `label` may also be specified on each data object.

*examples:* `labels="Series 1"` , `labels={(datum) => datum.y}`

### labelComponent

The `labelComponent` prop takes a component instance which will be used to render labels for each candlestick. The new element created from the passed `labelComponent` will be supplied with the following properties: x, y, index, datum, verticalAnchor, textAnchor, angle, style, text, and events. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If `labelComponent` is omitted, a new [VictoryLabel] will be created with props described above.

*examples:* `labelComponent={<VictoryLabel dy={20}/>}`, `labelComponent={<MyCustomLabel/>}`

*default:* `<VictoryLabel/>`

### dataComponent

The `dataComponent` prop takes a component instance which will be responsible for rendering a data element. The new element created from the passed `dataComponent` will be provided with the following properties calculated by `VictoryCandlestick`: datum, index, scale, style, events, x, open, close, low, and high. Any of these props may be overridden by passing in props to the supplied component, or modified or ignored within the custom component itself. If a dataComponent is not provided, `VictoryCandlestick` will use its default [Candlestick component].

*examples:* `dataComponent={<Candlestick events={{onClick: () => console.log("wow")}}/>}`, `dataComponent={<MyCustomCandlestick/>}`


*default:* `<Candlestick/>`

### containerComponent

The `containerComponent` prop takes a component instance which will be used to create a container element for standalone charts. The new element created from the passed `containerComponent` will be provided with the following props: `height`, `width`, `children` (the chart itself) and `style`. If a `containerComponent` is not provided, the default `VictoryContainer` component will be used. `VictoryContainer` supports `title` and `desc` props, which are intended to add accessibility to Victory components. The more descriptive these props are, the more accessible your data will be for people using screen readers. These props may be set by passing them directly to the supplied component. By default, `VictoryContainer` renders a responsive `svg` using the `viewBox` attribute. To render a static container, set `responsive={false}` directly on the instance of `VictoryContainer` supplied via the `containerComponent` prop. `VictoryContainer` also renders a `Portal` element that may be used in conjunction with [VictoryPortal] to force components to render above other children.

*examples:* `containerComponent={<VictoryContainer responsive={false} title="Chart of Q1 Profit/>}`

*default:* `containerComponent={<VictoryContainer/>}`

### groupComponent

The `groupComponent` prop takes a component instance which will be used to create group elements for use within container elements. This prop defaults to a `<g>` tag.

*default:* `groupComponent={<g/>}`

### animate

The `animate` prop specifies props for [VictoryAnimation] and [VictoryTransition] to use. The animate prop may be used to specify the duration, delay and easing of an animation as well as the behavior of `onEnter` and `onExit` and `onLoad` transitions. Each Victory component defines its own default transitions, be these may be modified, or overwritten with the `animate` prop. [Read more about animations and transitions] .

*examples:* `animate={{duration: 2000, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({open: 0})})}`

### events

The `events` prop takes an array of event objects. Event objects are composed of a `target`, an `eventKey`, and `eventHandlers`. Targets may be any valid style namespace for a given component, so "data" and "labels" are valid targets for this component. `eventKey` may be given as a single value, or as an array of values to specify individual targets. If `eventKey` is not specified, the given `eventHandlers` will be attached to all elements of the specified `target` type. The `eventHandlers` object should be given as an object whose keys are standard event names (i.e. `onClick`) and whose values are event callbacks. The return value of an event handler is used to modify elemnts. The return value should be given as an object or an array of objects with optional `target` and `eventKey` keys for specifying the element(s) to be modified, and a `mutation` key whose value is a function. The `target` and `eventKey` keys will default to those corresponding to the element the event handler was attached to. The `mutation` function will be called with the calculated props for each element that should be modified (i.e. a specific label), and the object returned from the mutation function will override the props of that element via object assignment. [Read more about events here].

*examples:*
```
 events={[
  {
    target: "data",
    eventKey: [0, 2, 4],
    eventHandlers: {
      onClick: () => {
        return [
           {
            target: "labels",
            mutation: () => {
              return {active: true};
            }
          }
        ];
      }
    }
  }
 ]}
```

### eventKey

The `eventKey` prop is used to assign eventKeys to data. This prop operates identically to the data accessor props. By default, the eventKey of each datum will be equal to its index in the data array. `eventKey` may also be defined directly on each data object. [Read more about events here].
     
### sharedEvents

The `sharedEvents` prop is used to coordinate events between Victory components using `VictorySharedEvents`. This prop should not be set manually. [Read more about events here].

### name

The `name` prop is used to reference a component instance when defining shared events. [Read more about events here].


[VictoryChart]: https://formidable.com/open-source/victory/docs/victory-chart
[grayscale theme]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-theme/grayscale.js
[Read more about themes here]: https://formidable.com/open-source/victory/recipes/theme-park
[width and height]: https://formidable.com/open-source/victory/docs/victory-candlestick#width-and-height
[Candlestick component]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-primitives/candlestick.js
[VictoryLabel]: https://formidable.com/open-source/victory/docs/victory-label
[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[VictoryAnimation]: https://formidable.com/open-source/victory/docs/victory-animation
[VictoryTransition]: https://formidable.com/open-source/victory/docs/victory-transition
[Read more about animations and transitions]: https://formidable.com/open-source/victory/docs/animations
[Read more about events here]: https://formidable.com/open-source/victory/docs/events
