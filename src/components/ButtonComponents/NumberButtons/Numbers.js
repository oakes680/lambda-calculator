import React, {useState} from "react";
import NumberButton from './NumberButton'
import { numbers } from '../../../data'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [dataNum, setDataNum] = useState(0)

 

  return (
    <div class='numDiv'>
      {
       numbers.map((numButton, index) => (
        <NumberButton key={index} numButton={numButton} setDataNum={setDataNum} dataNum={dataNum} />
      ))}
    </div>
  );
};


export default Numbers