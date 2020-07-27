# reactjs-overlay-loader

> Simple overlay loader for React. Overlay on part of page or entire page

[![NPM](https://img.shields.io/npm/v/reactjs-overlay-loader.svg)](https://www.npmjs.com/package/reactjs-overlay-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img width="50%" alt="reactjs-overlay-loader" src="https://user-images.githubusercontent.com/4344538/88505489-39b01680-cff5-11ea-8a31-8902a3f5c959.gif">

<img width="50%" alt="reactjs-overlay-loader" src="https://user-images.githubusercontent.com/4344538/88506019-a546b380-cff6-11ea-8355-80aaa0368328.gif">

## Install

```bash
yarn add reactjs-overlay-loader

Or

npm install --save reactjs-overlay-loader
```

## Simple Overlay on the entire page

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

## Simple Overlay on parts of the page

```jsx
import React from "react";

import ReactOverlayLoader from "reactjs-overlay-loader";

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <ReactjsOverlayLoader
        style={{
          position: "absolute"
        }}
        isActive
      >
        The easiest way to use overlay
      </ReactjsOverlayLoader>
    </div>
  );
};
```

## Customized Overlay

```jsx
import React from "react";

import ReactOverlayLoader from "reactjs-overlay-loader";

const App = () => {
  return (
    <ReactjsOverlayLoader
      loaderContent={<span style={{ color: "#ffffff" }}> Please wait...</span>}
      isActive
      style={{
        backgroundColor: "rgba(233, 30, 99, 0.81)"
      }}
    >
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
