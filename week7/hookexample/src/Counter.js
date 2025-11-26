import React, { useState } from "react";
import "./App.css";

function Hook_ControlledButtonState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App-header">
      <form>
        <h1>Click count: {count}</h1>
        <button type="button" onClick={handleClick}>
          Click me
        </button>
      </form>
    </div>
  );
}

export default Hook_ControlledButtonState;
