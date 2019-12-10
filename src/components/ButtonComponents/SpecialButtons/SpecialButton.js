import React from "react";
import { tsPropertySignature } from "@babel/types";


const SpecialButton = (props) => {
  return (
    <button className="specials">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.specButton}
    </button>
  );
};


export default SpecialButton;