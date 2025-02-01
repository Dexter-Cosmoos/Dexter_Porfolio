import React from "react";
import { EarthCanvas, BallCanvas, StarsCanvas } from "./components";

const App = () => {
  return (
    <div>
      <h1>3D Canvas Components</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <EarthCanvas />
      </div>
      <div style={{ width: '100%', height: '500px' }}>
        <BallCanvas icon="path/to/your/icon.png" />
      </div>
      <div style={{ width: '100%', height: '500px' }}>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;