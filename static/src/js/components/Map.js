import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map = ({ quests }) => {
  useEffect(() => drawCircles(), [quests]);

  const drawCircles = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const dpi = window.devicePixelRatio;

    const style_height = +getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);
    const style_width = +getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2);

    canvas.setAttribute("height", style_height * dpi);
    canvas.setAttribute("width", style_width * dpi);

    quests.map((q) => drawCircle(q.x, q.y, ctx));
  };

  const drawCircle = (x, y, context) => {
    context.beginPath();
    context.strokeStyle = "#0F172A";
    context.arc(x, y, 25, 0, 2 * Math.PI);
    context.globalAlpha = 0.85;
    context.lineWidth = 10;
    context.stroke();
  };

  return (
    <div className="map relative top-20 left-8">
      <TransformWrapper>
        <TransformComponent>
          <canvas id="canvas" className="customs"></canvas>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

Map.propTypes = {
  quests: PropTypes.arrayOf(
    PropTypes.exact({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Map;
