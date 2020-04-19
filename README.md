# reactjs-overlay-loader

> Over Full window or Element Overlay loader React Component

[![NPM](https://img.shields.io/npm/v/reactjs-overlay-loader.svg)](https://www.npmjs.com/package/reactjs-overlay-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img width="1629" alt="reactjs-overlay-loader" src="https://user-images.githubusercontent.com/4344538/79677451-4b706980-820f-11ea-97f9-10182267f3c7.png">

## Install

```bash
yarn add reactjs-overlay-loader

Or

npm install --save reactjs-overlay-loader
```

## Usage

```jsx
import React from "react";

import ReactOverlayLoader from "reactjs-overlay-loader";

const App = () => {
  return (
    <ReactjsOverlayLoader isActive>
      The easiest way to use overlay
    </ReactjsOverlayLoader>
  );
};
```

## API

---

### Select props

| name                     |                                                                              description                                                                               |     type      |    default |
| ------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: | ---------: |
| isActive                 |                                                                       enable or disable overlay                                                                        |    boolean    |      false |
| style (optional)         |                                                                   you can provide your custom style                                                                    |    object     |         {} |
| loaderContent (optional) |                                                           text/content need to be visible below loading icon                                                           | string or jsx | Loading... |
| iconType (optional)      | multiple loading icon options are available `Spinning`, `Audio`, `BallTriangle`, `Bars`, `Circles`, `Grid`, `Hearts`, `Oval`, `Puff`, `Rings`, `TailSpin`, `ThreeDots` |    string     |   Spinning |
| icon (optional)          |                                                                    you can provide your custom icon                                                                    |      jsx      |        svg |

## License

MIT © [anilbad](https://github.com/anilbad)
