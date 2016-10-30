# VictoryLabel

VictoryLabel renders the label components that are used across all of Victory.

## Props

### text

The `text` prop defines the text `VictoryLabel` will render. The `text` prop may be given as a string, number, or function of `datum`. Strings may include newline characters, which VictoryLabel will split into separate `<tspan/>` elements.

*examples:* `text={(datum) => "x: " + datum.x}`, `text="Apples\n(green)"`

### datum

Victory components can pass a `datum` prop to their label component. This can
be used to calculate functional styles, and determine text.

### data

Victory components can pass a `data` prop to their label component. This can be useful in custom components that need to make use of the entire dataset.

### index

The `index` prop represents the index of the datum in the data array.

### style

The `style` prop defines a set of SVG style properties that will be applied to the rendered `<text>` element. This prop should be given as an object.

### events

The `events` prop attaches arbitrary event handlers to the label component. This prop should be given as an object of event names and corresponding event handlers. When events are provided via Victory's event system, event handlers will be called with the event, the props of the component is attached to, and an eventKey.
  
*examples:* `events={{onClick: (evt) => alert("x: " + evt.clientX)}}`

### x

The `x` prop defines the x coordinate to use as a basis for positioning the label element.

### y

The `y` prop defines the y coordinate to use as a basis for positioning the label element.

### dx

The `dx` prop defines a horizontal shift from the `x` coordinate.

### dy

The `dy` prop defines a vertical shift from the `y` coordinate. This prop is affected by `capHeight`, `lineHeight`, and `verticalAnchor`, and the number of lines of text that make up the label.

### angle

The `angle` prop specifies the angle to rotate the text around its anchor point.

### textAnchor

The `textAnchor` prop defines how the text is horizontally positioned relative to the given `x` and `y` coordinates. Options are "start", "middle", "end", and "inherit".

### verticalAnchor

The `verticalAnchor` prop defines how the text is vertically positioned relative to the given `x` and `y` coordinates. Options are "start", "middle" and "end".

### capHeight

The `capHeight` prop defines a text metric for the font being used: the expected height of capital letters. This is necessary because of SVG, which (a) positions the *bottom* of the text at `y`, and (b) has no notion of line height. This prop should be given as a number of ems.

### lineHeight

The `lineHeight` prop defines how much space a single line of text should take up. Note that SVG has no notion of line-height, so the positioning may differ slightly from what you would expect with CSS, but the result is similar: a roughly equal amount of extra space is distributed above and below the line of text. This prop should be given as a number of ems.

### transform

The `transform` prop applies a transform to the rendered `<text>` element. This prop may be supplied as a string or an object containing transform definitions.
