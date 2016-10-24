# VictoryClipContainer

`VictoryClipContainer` is a specialized group container that enables curtain-style transitions for continuous data types like `VictoryLine` and `VictoryArea`. `VictoryClipContainer` will render its children either in a regular `<g>` element, or in a `<g>` element clipped by a rectangular clip path when a `clipWidth` is supplied.

## Props

### children

`VictoryClipContainer` renders a single child, or an array of children in group element.

### clipPathComponent

The `clipPathComponent` prop specifies the clip path to apply to the rendered group when appropriate. By default, `VictoryClipContainer` uses the rectangular [ClipPath component].

### clipHeight

The `clipHeight` prop determines the base height of the rectangular clip path. This prop corresponds to the total height of a parent chart. This prop should be given as a number. This prop is only applied when a clipped group will be rendered.

### clipWidth

The `clipWidth` prop determines the base width of the rectangular clip path. This prop corresponds to the total width of a parent chart. This prop should be given as a number. If this prop is not supplied, a clipped group will not be rendered.

### translateX

The `translateX` prop determines the offset of the clip path from the base x coordinate. This prop should be given as a number. This prop is only applied when a clipped group will be rendered.

### padding

The `padding` prop determines the base padding to apply to the rectangular clip path. This prop corresponds to the padding applied to a parent chart. This prop should be given as an object with "top", "bottom", "left", and "right" properties. This prop is only applied when a clipped group will be rendered.

### style

The `style` prop defines a set of styles to be applied to the rendered group.

### events

The `events` prop attaches arbitrary event handlers to the group element. This prop should be given as an object of event names and corresponding event handlers. When events are provided via Victory's event system, event handlers will be called with the event, the props of the component it is attached to, and an eventKey when applicable.
  
*examples:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`
 
### transform

The `transform` prop defines a transform to be applied to the rendered group.


[ClipPath Component]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-primitives/clip-path.js
