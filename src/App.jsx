import React, { useEffect } from "react";
import backgroundVideo from "./assets/background2.mp4";
import Main2 from "./components/Main2";

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="-z-10 fixed top-0 left-0 object-none min-w-full min-h-dvh"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <Main2 />
    </div>
  );
}
export default App;
