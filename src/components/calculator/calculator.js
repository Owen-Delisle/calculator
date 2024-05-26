import React, { useState } from "react";
import "./styles.css";

import Button from "../button/button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleEqual = () => {
    try {
      const res = eval(input);
      setResult(res);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result !== null ? '=' + result : ''}</div>
      </div>
      <div className="button-container">
        {['1', '2', '3', '+'].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        {['4', '5', '6', '-'].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        {['7', '8', '9', '*'].map((value) => (
          <Button key={value} value={value} onClick={handleClick} />
        ))}
        <Button value="C" onClick={handleClear} />
        <Button value="0" onClick={handleClick} />
        <Button value="=" onClick={handleEqual} />
        <Button value="/" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
