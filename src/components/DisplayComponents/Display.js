import React, {useState} from "react";
import { numButton } from "../../components/ButtonComponents/NumberButtons/NumberButton"


const Display = (props) => {
  return <div className="display">{props.number}</div>;
};


export default Display
