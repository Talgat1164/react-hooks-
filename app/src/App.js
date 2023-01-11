import React, { useRef, useState } from "react";
import Hover from "./components/Hover";
import useHover from "./hooks/useHover";
import useInput from "./hooks/useInput";

const App = () => {
  const ref = useRef();
  const isBlackHovering = useHover(ref);
  return (
    <div>
      <Hover />
      <div
        ref={ref}
        style={{
          width: 300,
          height: 300,
          background: isBlackHovering ? "blue" : "green",
          marginTop: 10,
        }}
      ></div>
    </div>
  );
};

export default App;
