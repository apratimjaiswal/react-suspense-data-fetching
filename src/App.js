import React from "react";
import { fetchColorData } from "./api";

const resource = fetchColorData();

const App = () => {
  return (
    <div>
      <h1>Random Color Generator</h1>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <ColorDetails />
      </React.Suspense>
    </div>
  );
};

const ColorDetails = () => {
  const color = resource.color.read();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: 100,
          height: 100,
          marginRight: 16,
          backgroundColor: color.hex_value,
        }}
      ></div>
      <h1>Color name: {color.color_name}</h1>
    </div>
  );
};

export default App;
