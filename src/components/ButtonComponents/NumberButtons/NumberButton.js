import React from "react";

const NumberButton = (props) => {
  const {numbs, setNumbs} = props
  return (
    <button className="numbs">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.numButton}
      {console.log(numbs)}
    </button>
  );
};


export default NumberButton;


