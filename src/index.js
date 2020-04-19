import React from "react";
// import styles from "./styles.module.css";

import Spinning from "./svg-loaders/spinning-circles.svg";
import Audio from "./svg-loaders/audio.svg";
import BallTriangle from "./svg-loaders/ball-triangle.svg";
import Bars from "./svg-loaders/bars.svg";
import Circles from "./svg-loaders/circles.svg";
import Grid from "./svg-loaders/grid.svg";
import Hearts from "./svg-loaders/hearts.svg";
import Oval from "./svg-loaders/oval.svg";
import Puff from "./svg-loaders/puff.svg";
import Rings from "./svg-loaders/rings.svg";
import TailSpin from "./svg-loaders/tail-spin.svg";
import ThreeDots from "./svg-loaders/three-dots.svg";

const reactOverlayLoader = {
  position: "fixed",
  top: 0,
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.61)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const rjolLoaderWrapper = {
  display: "flex",
  flexDirection: "column"
};

const getIcon = iconType => {
  let icon = Spinning;
  switch (iconType) {
    case "Audio":
      icon = Audio;
      break;
    case "BallTriangle":
      icon = BallTriangle;
      break;
    case "Bars":
      icon = Bars;
      break;
    case "Circles":
      icon = Circles;
      break;
    case "Grid":
      icon = Grid;
      break;
    case "Hearts":
      icon = Hearts;
      break;
    case "Oval":
      icon = Oval;
      break;
    case "Puff":
      icon = Puff;
      break;
    case "Rings":
      icon = Rings;
      break;
    case "TailSpin":
      icon = TailSpin;
      break;
    case "ThreeDots":
      icon = ThreeDots;
      break;
  }
  return icon;
};

export const ReactjsOverlayLoader = ({
  children,
  isActive,
  style,
  loaderContent,
  iconType = "Spinning",
  icon = null
}) => {
  console.log(getIcon(iconType));

  return (
    <div className="rjol">
      {children}
      {isActive && (
        <div
          className="rjol__wrapper"
          style={{ ...reactOverlayLoader, ...style }}
        >
          <div className="rjol__loader-wrapper" style={rjolLoaderWrapper}>
            {icon ? (
              <React.Fragment>{icon}</React.Fragment>
            ) : (
              <img src={getIcon(iconType)} alt="" />
            )}
            <span className="rol__loader">{loaderContent || "Loading..."}</span>
          </div>
        </div>
      )}
    </div>
  );
};
