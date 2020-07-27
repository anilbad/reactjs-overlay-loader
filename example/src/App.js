import React, { useState } from "react";

import ReactjsOverlayLoader from "reactjs-overlay-loader";

const App = () => {
  const [loader, setLoader] = useState(false);
  return (
    // <ReactjsOverlayLoader
    //   loaderContent={<span style={{ color: "#ffffff" }}> Please wait...</span>}
    //   style={{
    //     backgroundColor: "rgba(233, 30, 99, 0.81)"
    //   }}
    //   isActive={loader}
    // >
    //   <button
    //     onClick={() => setLoader(prevState => !prevState)}
    //     style={{ margin: "10px" }}
    //   >
    //     Toggle Loader{" "}
    //     <span role="img" aria-label="smile">
    //       😄
    //     </span>
    //   </button>
    // </ReactjsOverlayLoader>
    <div>
      <button
        onClick={() => setLoader(prevState => !prevState)}
        style={{ margin: "10px" }}
      >
        Toggle Loader{" "}
        <span role="img" aria-label="smile">
          😄
        </span>
      </button>
      <div
        style={{
          margin: "10px",
          height: "200px",
          width: "400px",
          border: "1px solid pink",
          position: "relative"
        }}
      >
        <ReactjsOverlayLoader
          loaderContent={
            <span style={{ color: "#ffffff" }}> Please wait...</span>
          }
          isActive={loader}
          style={{
            position: "absolute",
            backgroundColor: "rgba(233, 30, 99, 0.81)"
          }}
        >
          <h1>Some content</h1>
        </ReactjsOverlayLoader>
      </div>

      <div
        style={{
          margin: "10px",
          height: "200px",
          width: "400px",
          border: "1px solid pink"
        }}
      >
        <h1>Other content</h1>
      </div>
    </div>
  );
};

export default App;
