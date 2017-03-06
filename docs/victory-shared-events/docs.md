# VictorySharedEvents

The `VictorySharedEvents` wrapper coordinates events between its child components. Specify a set of events on the `VictorySharedEvents` wrapper to target children. [VictoryChart], [VictoryGroup], and [VictoryStack] all use `VictorySharedEvents`, but it may also be used on its own.

## Props

### children

`VictorySharedEvents` renders an array of children with new `sharedEvents` props which define a set of events, and a shared state accessor.

### events

The `events` prop takes an array of event objects. Event objects are composed of a `target`, an `eventKey`, a `childName` and `eventHandlers`. Targets may be any valid style namespace for a given component, so "data" and "labels" are valid targets for this components like `VictoryBar`. `eventKey` may be given as a single value, or as an array of values to specify individual targets. If `eventKey` is not specified, the given `eventHandlers` will be attached to all elements of the specified `target` type. The `childName` property may be given as a string or an array of strings to target multiple children. The `eventHandlers` object should be given as an object whose keys are standard event names (i.e. `onClick`) and whose values are event callbacks. The return value of an event handler is used to modify elemnts. The return value should be given as an object or an array of objects with optional `target`, `childName` and `eventKey` keys for specifying the element(s) to be modified, and a `mutation` key whose value is a function. The `target` and `eventKey` keys will default to those corresponding to the element the event handler was attached to. The `mutation` function will be called with the calculated props for each element that should be modified (i.e. a bar label), and the object returned from the mutation function will override the props of that element via object assignment.

*examples:*
```jsx
 <VictorySharedEvents
  events={[{
    childName: ["scatter-1", "scatter-2"],
    target: "data",
    eventHandlers: {
      onClick: () => {
        return [
          {
            childName: ["scatter-3", "scatter-4"],
            target: "data",
            mutation: (props) => {
              const fill = props.style.fill;
              return fill === "gold" ? null : {style: {fill: "gold"}};
            },
            callback: () => {
              console.log("I happen after setState");
            }
          }
        ];
      }
    }
  }]}
>
  <VictoryScatter name="scatter-1"
    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
  />
  <VictoryScatter name="scatter-2"
    data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
  />
  <VictoryScatter name="scatter-3"
    data={[x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
  />
  <VictoryScatter name="scatter-4"
    data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 3}
    ]}
  />
</VictorySharedEvents>
```

### eventKey

The `eventKey` prop is used to assign eventKeys to data. This prop operates identically to the `x` and `y` data accessor props. By default, the eventKey of each datum will be equal to its index in the data array. `eventKey` may also be defined directly on each data object.

[VictoryChart]: https://formidable.com/open-source/victory/docs/victory-chart
[VictoryGroup]: https://formidable.com/open-source/victory/docs/victory-group
[VictoryStack]: https://formidable.com/open-source/victory/docs/victory-stack
