# VictoryContainer

`VictoryContainer` provides a top-level `<svg>` element for other Victory components to render within. By default, `VictoryContainer` renders responsive SVGs. `VictoryContainer` also provides a [Portal] container that can be accessed via [VictoryPortal] in order to render specified children above others.

## Props

### children 

`VictoryContainer` is a wrapper component that renders its children within an `svg>` element. If no children are provided, `VictoryContainer` will render an empty `<svg>` tag.

### style

The `style` prop defines the style of the container. The `width` and `height` should be specified via props as they determine relative layout for components. 

*examples:* `style={{border: "1px solid #ccc"}}`

*default (provided by default theme):* VictoryTheme.grayscale. See [VictoryTheme] for more detail

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

*default:* `title="Victory Chart"`

### desc

The `desc` prop specifies the description of the chart/SVG to assist with accessibility for screen readers. The more informative the description, the more usable it will be for people using screen readers. 

*examples:* `desc="Golden retreivers make up 30%, Labs make up 25%, and other dog breeds are not represented above 5% each."`

*default:* `desc=""`

### portalComponent

The `portalComponent` prop takes a component instance which will be used as a container for children that should render inside a top-level container so that they will always appear above other elements. [VictoryTooltip] renders inside a portal so that tooltips always render above data. [VictoryPortal] is used to define elements that should render in the portal container. This prop defaults to [Portal], and should only be overridden when changing rendered elements from SVG to another type of element _i.e._ [react-native-svg] elements.

*default:* `portalComponent={<Portal/>}`


[VictoryPortal]: https://formidable.com/open-source/victory/docs/victory-portal
[Portal]: https://github.com/FormidableLabs/victory-core/blob/master/src/victory-portal/portal.js
[react-native-svg]: https://github.com/react-native-community/react-native-svg
[VictoryTheme]: https://formidable.com/open-source/victory/docs/victory-theme
[VictoryTooltip]: https://formidable.com/open-source/victory/docs/victory-tooltip
