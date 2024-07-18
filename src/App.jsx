import React from "react";
import backgroundVideo from "./assets/background.webm";
import Main2 from "./components/Main2";

function App() {
  return (
    <div className="App">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="-z-10 fixed top-0 left-0 object-cover w-screen h-screen"
      >
        <source src={backgroundVideo} type="video/webm" />
      </video>

      <Main2 />
    </div>
  );
}
export default App;
