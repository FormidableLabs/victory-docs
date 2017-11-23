---
id: 10
title: VictoryClipContainer
category: more
scope: null
---
# VictoryClipContainer

`VictoryClipContainer` is a specialized group container that enables curtain-style transitions for continuous data types like `VictoryLine` and `VictoryArea`. `VictoryClipContainer` will render its children either in a regular `<g>` element, or in a `<g>` element clipped by a rectangular clip path when a `clipWidth` is supplied.

## Props

### children

`VictoryClipContainer` renders a single child, or an array of children in group element.

### clipId

The `clipId` prop may be used to set a deterministic id for the container. When a `containerId` is not manually set, a unique id will be generated. It is usually necessary to set deterministic ids for automated testing.

### clipPathComponent

The `clipPathComponent` prop specifies the clip path to apply to the rendered group when appropriate. By default, `VictoryClipContainer` uses the rectangular [ClipPath component].

### clipHeight

The `clipHeight` prop determines the base height of the rectangular clip path. This prop should be
given as a number. If this prop is not given, it will be calculated based on the height and padding
of the parent chart.

### clipWidth

The `clipWidth` prop determines the base width of the rectangular clip path. This prop should be
given as a number. If this prop is not given, it will be calculated based on the width and padding
of the parent chart.

### translateX

The `translateX` prop determines the offset of the clip path from the base x coordinate. This prop
should be given as a number. If this prop is not given, it will be calculated based on the padding
of the parent chart.

### translateY

The `translateY` prop determines the offset of the clip path from the base y coordinate. This prop
should be given as a number. If this prop is not given, it will be calculated based on the padding
of the parent chart.

### padding

The `padding` prop determines the base padding to apply to the rectangular clip path. This prop
corresponds to the padding applied to a parent chart. This prop should be given as an object with
`top`, `bottom`, `left`, and `right` properties. This prop is only applied when a clipped group
will be rendered.

### clipPadding

The `clipPadding` prop is used when the clipped area should be larger than the range of a chart.
This prop should be given as an object with `top`, `bottom`, `left`, and `right` properties. Set
the `clipPadding` prop is useful for extending the visible area of a chart in some dimension so
that data or labels are not cut off.

### style

The `style` prop defines a set of styles to be applied to the rendered group.

### events

The `events` prop attaches arbitrary event handlers to the group element. This prop should be given as an object of event names and corresponding event handlers. When events are provided via Victory's event system, event handlers will be called with the event, the props of the component it is attached to, and an `eventKey` when applicable.

*examples:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### transform

The `transform` prop defines a transform to be applied to the rendered group.


[ClipPath Component]: https://formidable.com/open-source/victory/docs/victory-primitives#clippath
