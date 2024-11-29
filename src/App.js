import React, { useState } from "react";
import BasicCalculator from "./calculator";
import AdvancedCalculator from "./AdvancedCalculator";
import "./App.css";

const App = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="toggle-button"
      >
        {showAdvanced ? "Switch to Basic Calculator" : "Switch to Advanced Calculator"}
      </button>
      {showAdvanced ? <AdvancedCalculator /> : <BasicCalculator />}
    </div>
  );
};

export default App;
