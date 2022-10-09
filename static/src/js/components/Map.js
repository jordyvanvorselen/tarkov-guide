import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Map = () => {
  return (
    <div className="map relative top-20 left-8">
      <TransformWrapper>
        <TransformComponent>
          <canvas className="customs"></canvas>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
