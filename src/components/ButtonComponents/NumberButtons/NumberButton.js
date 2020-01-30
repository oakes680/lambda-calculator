import React from "react";


const NumberButton = (props) => {
  console.log(props)

  return (
    <button className="numbs" onClick={() => props.addNumber(props.numButton)} >
      {props.numButton} 

    </button>
  );
};


export default NumberButton;


