import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map = ({ coordinates }) => {
  useEffect(() => drawCircles(), [coordinates]);

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

    coordinates.map((quest) =>
      quest.coordinates.map((c) => drawCircle(c.x, c.y, ctx))
    );
  };

  const drawCircle = (x, y, context) => {
    context.beginPath();
    context.strokeStyle = "#0F172A";
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.globalAlpha = 0.85;
    context.lineWidth = 10;
    context.stroke();
  };

  function logMousePosition(event) {
    const canvas = document.getElementById("canvas");
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    alert(`X: ${x}\nY: ${y}`);
  }

  return (
    <div className="map relative top-20 left-8">
      <TransformWrapper>
        <TransformComponent>
          <canvas
            id="canvas"
            className="lighthouse"
            onClick={logMousePosition}
          ></canvas>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

Map.propTypes = {
  coordinates: PropTypes.arrayOf(
    PropTypes.exact({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Map;
