# VictoryTransition

`VictoryTransition` wraps a single child component in `VictoryAnimation`. In addition to animating the child component, it will also handle transitions for any entering and exiting nodes via the `onEnter` and `onExit` and `onLoad` transitions defined on its `animate` prop.

## Props

# children

`VictoryTransiton` adds transitions to a single child

# animate

The `animate` prop specifies props for [VictoryAnimation] and [VictoryTransition] to use. The animate prop may be used to specify the duration, delay and easing of an animation as well as the behavior of `onEnter` and `onExit` and `onLoad` transitions. Each Victory component defines its own default transitions, be these may be modified, or overwritten with the `animate` prop. [Read more about animations and transitions].

*examples:* `animate={{duration: 2000, onLoad: {duration: 1000}, onEnter: {duration: 500, before: () => ({y: 0})})}`

# animationWhitelist

The `animationWhitelist` defines a list of props to animate on the child. This prop should be given as an array of strings.

[Read more about animations and transitions]: https://formidable.com/open-source/victory/docs/animations