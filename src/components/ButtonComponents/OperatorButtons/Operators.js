import React, { useState } from "react";
import OperatorButton from './OperatorButton'
import { operators } from '../../../data'
//import any components needed
//console.log({operators})
//Import your array data to from the provided data file


 const Operators = () => {
  // STEP 2 - add the imported data to state
  const [dataOp, setDataOp] = useState(operators)
 
  return (
    <div className='operatorDiv'> 
      {console.log(operators)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       //console.log(dataOp)
      dataOp.map((opButton, index) => (
        <OperatorButton key={index} opButton={opButton} />
      ))
       }
    </div>
    
  );
};



export default Operators