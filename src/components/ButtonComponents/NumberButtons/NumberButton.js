import React from "react";
import Display from "../../DisplayComponents/Display"

const NumberButton = (props) => {
  const numButton = props.numButton
  const setDataNum = props.setDataNum
  const DataNum = props.DataNum
  return (
    <button className="numbs" onClick= {() => {setDataNum(numButton);
      return <Display numButton={numButton}/>
    }} >
      {props.numButton} 

    </button>
  );
};


export default NumberButton;


