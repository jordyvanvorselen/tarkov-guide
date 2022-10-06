import React from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const App = () => {
  return (
    <div className="map">
      <TransformWrapper>
        <TransformComponent>
          <canvas className="customs"></canvas>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default App;
