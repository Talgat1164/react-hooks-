import React, { useState } from "react";
import useInput from "./hooks/useInput";

const App = () => {
  const username = useInput("");
  const password = useInput("");

  return (
    <div>
      <input type="text" {...username} placeholder="Username" />
      <input type="text" {...password} placeholder="Password" />
      <button onClick={() => console.log(username.value, password.value)}>
        Click
      </button>
    </div>
  );
};

export default App;
