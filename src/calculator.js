import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleButtonClick = (value) => {
    if (error) {
      setError(false); // Reset error state
    }

    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Safely evaluate the expression
      } catch (e) {
        setError(true);
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className={`display ${error ? "error" : ""}`}>{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "DEL", "C", "0", ".", "=", "+"].map(
          (btn) => (
            <button
              key={btn}
              className={btn === "=" ? "equals" : ""}
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
