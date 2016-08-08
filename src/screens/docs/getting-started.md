# Getting started with Victory

Victory is an opinionated, but fully overridable, ecosystem of composable React components for building interactive data visualizations.

### Your first Victory component

Add Victory to your project:
```bash
$ npm install victory --save
```

Import React and a Victory component:
```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import { VictoryPie } from 'victory';
```

Now you're ready to render:
```playground_norender
class HelloWorld extends React.Component {
  render () {
    return (
      <VictoryPie />
    );
  }
}

ReactDOM.render(<HelloWorld/>, mountNode);
```

### Including components

Components can be included individually

```jsx
import {VictoryLine, VictoryAxis} from "victory"

<VictoryLine/>
```

Or imported as a set:

```jsx
import * as V from "victory"

<V.VictoryLine/>
```

### Documentation

You can read about these Victory components in the interactive docs. Check out [VictoryChart](http://formidable.com/open-source/victory/docs/victory-chart), our favorite Victory component.

### Contributing and source
Interested in helping out or seeing what's happening under the hood? Victory is maintained at [github.com/FormidableLabs/victory](https://github.com/FormidableLabs/victory), and you can [start contributing here](https://github.com/FormidableLabs/victory/blob/master/CONTRIBUTING.md).
