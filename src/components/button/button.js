import React from "react";
import "./styles.css"

const Button = ({ value, onClick }) => {
	return (
	  <button className="calculator-button" onClick={() => onClick(value)}>
		{value}
	  </button>
	);
  };

export default Button