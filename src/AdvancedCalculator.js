import React, { useState } from "react";
import "./calculator.css";

const AdvancedCalculator = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleButtonClick = (value) => {
    if (error) {
      setError(false); // Reset error state
    }

    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate the expression
      } catch (e) {
        setError(true);
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "DEL") {
      setInput(input.slice(0, -1)); // Delete last character
    } else if (value === "IncrementBy2") {
      try {
        setInput((parseFloat(input) + 2).toString()); // Increment by 2
      } catch (e) {
        setError(true);
        setInput("Error");
      }
    } else if (value === "x²") {
      try {
        setInput((Math.pow(parseFloat(input), 2)).toString()); // Square
      } catch (e) {
        setError(true);
        setInput("Error");
      }
    } else if (value === "√x") {
      try {
        setInput((Math.sqrt(parseFloat(input))).toString()); // Square root
      } catch (e) {
        setError(true);
        setInput("Error");
      }
    } else {
      setInput(input + value); // Append value to input
    }
  };

  return (
    <div className="calculator">
      <div className={`display ${error ? "error" : ""}`}>{input || "0"}</div>
      <div className="buttons">
        {[
          "7", "8", "9", "/", 
          "4", "5", "6", "*", 
          "1", "2", "3", "-", 
          "DEL", "C", "0", "+", 
          ".", "=", "%", "+2",
          "x²", "√x"
        ].map((btn) => (
          <button
            key={btn}
            className={btn === "=" ? "equals" : ""}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdvancedCalculator;
