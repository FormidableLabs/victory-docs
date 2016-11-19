# Events

Victory uses a flexible event system that is completely agnostic of event type. Browser events like `onClick` are handled identically to mobile touch events like `onPressIn`.  Victory's event system allows users to attach events to any rendered element, and trigger mutations on any other rendered element. 


This guide will demonstrate how to use Victory's event system within a single component, between several components nested within wrapper components like `VictoryChart` or `VictoryGroup`, and between several components using the `VictorySharedEvents` wrapper. This guide will also explain how to bypass Victory's event system entirely, and attach simple events directly to rendered components. 


## Single Component Events


Events within a single component like `VictoryBar` may be defined by the `events` prop of the component. The component will be responsible for storing event-driven mutations on its state object. The `events` prop should be given as an array of event objects. Each object defines an event or set of events to attach to a particular target element, or set of target elements.  


Target elements are specified by the `target` and `eventKey` properties. Valid `target` properties match the namespaces of the style element of any given component. For most components valid target properties are "data", "labels", and "parent". The `target` property is required. The optional `eventKey` property may be given as a value or array of values. 


Events are defined by the `eventHandlers` property which should be given as an object whose properties are named events such as `onClick`, and whose values are event handlers. Event handlers are called with the event, the props defining the element that triggered the event, and the event key of the element that triggered the event. 


Return values from event handlers are used to define mutations affecting rendered elements. Return values from event handlers should be given as an array of mutation objects. Mutation objects may have `target` and `eventKey` properties to specify an element to mutate. If these properties are not given, the mutation will effect the element that triggered the event. Mutation objects should also have a `mutation` property whose value is a function. The mutation function will be called with the event, the props defining the element that will be mutated, and the event key of the element that will be mutated. The mutation function should return an object of props to be modified, and the new values for those props.


In the example below, clicking on any of the bars will trigger a change in the text of the corresponding labels. 


```playground
  <VictoryBar
    data={[
      {x: 1, y: 2, label: "A"},
      {x: 2, y: 4, label: "B"},
      {x: 3, y: 7, label: "C"},
      {x: 4, y: 3, label: "D"},
      {x: 5, y: 5, label: "E"},
    ]}
    events={[
      {
        target: "data",
        eventHandlers: {
          onClick: () => {
            return [{
              target: "labels",
              mutation: (props) => {
                return props.text === "clicked" ?
                  null : { text: "clicked" }
              }
            }];
          }
        }
      }
    ]}
  />
```


Events may also be targeted specific data elements or groups of data elements by event key using the `eventKey` property. The `eventKey` property may be given as a single value or as an array of values. If no `eventKey` is specified, events will be attached to all elements of a specified target type, and mutations will affect only elements corresponding to the event key of the element that triggered the event. Element event keys may be applied directly to data objects, or set using the `eventKey` data accessor prop. By default, the event key will be set to the index of the element in the data array.


```playground
  <VictoryBar
    data={[
      {x: 1, y: 2, label: "A"},
      {x: 2, y: 4, label: "B"},
      {x: 3, y: 7, label: "C"},
      {x: 4, y: 3, label: "D"},
      {x: 5, y: 5, label: "E"},
    ]}
    eventKey={(datum) => datum.label}
    events={[
      {
        target: "data",
        eventKey: ["A", "B"],
        eventHandlers: {
          onClick: () => {
            return [
              {
                eventKey: "D",
                mutation: (props) => {
                  return { 
                    style: assign(props.style, {fill: "green"}) 
                  }
                }
              },
              {
                eventKey: "E",
                mutation: (props) => {
                  return { 
                    style: assign(props.style, {fill: "red"}) 
                  }
                }
              }
            ];
          }
        }
      }
    ]}
  />
```


If an `eventKey` is not specified in the mutation, the event mutation will target the same event key as the element that triggered the event. Similarly, if the target is not specified, the target will be assumed to be the same target type as the element that triggered the event.


## Nested Component Events


Wrapper components like `VictoryChart`, `VictoryGroup`, and `VictoryStack` may define events for their children. Component events defined by wrappers operate much the same as single component events, except that the events are defined on the parent component, and event-driven mutations are stored in the parent's state. Events on child components are specified with the `childName` property. Components that have a `name` prop specified will be referenced by name. If child components do not have a `name` specified they will be referenced by index. In the example below, clicking on either of the bottom two areas in the stack will change the color of the top area.


```playground
<VictoryChart
  events={[{
    childName: ["area-1", "area-2"],
    target: "data",
    eventHandlers: {
      onClick: () => {
        return [{
          childName: "area-4",
          mutation: (props) => {
            const fill = props.style.fill;
            return fill === "tomato" ? null : {style: {fill: "tomato"}};
          }
        }];
      }
    }
  }]}
>
  <VictoryStack>
    <VictoryArea name="area-1"
      data={[
        {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
      ]}
    />
    <VictoryArea name="area-2"
      data={[
        {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
      ]}
    />
    <VictoryArea name="area-3"
      data={[
        {x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}, {x: "d", y: 2}
      ]}
    />
    <VictoryArea name="area-4"
      data={[
        {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 3}, {x: "d", y: 4}
      ]}
    />
  </VictoryStack>
</VictoryChart>
```


## VictorySharedEvents


Components like `VictoryChart` use the `VictorySharedEvents` wrapper automatically, but the wrapper may also be used on its own. Simply nest child components within the `VictorySharedEvents` wrapper, and reference them as you would when using `VictoryChart`


```playground
<svg viewBox="0 0 450 350">
  <VictorySharedEvents
    events={[{
      childName: ["pie", "bar"],
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, {fill: "tomato"})
              };
            }
          }];
        },
        onMouseOut: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: () => {
              return null;
            }
          }];
        }
      }
    }]}
  >
    <g transform={"translate(150, 50)"}>
      <VictoryBar name="bar"
        width={300}
        standalone={false}
        style={{
          data: { width: 20 },
          labels: {fontSize: 25}
        }}
        data={[
          {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
        ]}
        labels={["a", "b", "c", "d"]}
        labelComponent={<VictoryLabel y={280}/>}
      />
    </g>
    <VictoryPie name="pie"
      width={250}
      standalone={false}
      style={{ labels: {fontSize: 25, padding: 10}}}
      data={[
        {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
      ]}
    />
  </VictorySharedEvents>
</svg>
```


## Simple Events


For very simple events, it may be desireable to bypass Victory's event system. To do so, specify `events` props directly on primitive components rather than using the `events` prop on Victory components. The simple `events` prop should be given as an object whose properties are event names like `onClick`, and whose values are event handlers. Events specified this way will only be called with the standard event objects. 

```playground
  <VictoryBar
    data={[
      {x: 1, y: 2},
      {x: 2, y: 4},
      {x: 3, y: 7},
      {x: 4, y: 3},
      {x: 5, y: 5},
    ]}
    dataComponent={
      <Bar 
        events={{
          onClick: (evt) => alert(`(${evt.clientX}, ${evt.clientY})`)
        }}
      />
    }
  />
```