import React from "react";

import ReactjsOverlayLoader from "reactjs-overlay-loader";

const App = () => {
  return (
    <ReactjsOverlayLoader
      loaderContent={<span style={{ color: "#ffffff" }}> Please wait...</span>}
      style={{
        backgroundColor: "rgba(233, 30, 99, 0.81)"
      }}
      isActive
    >
      <span role="img" aria-label="smile">
        😄
      </span>
    </ReactjsOverlayLoader>
  );
};

export default App;
