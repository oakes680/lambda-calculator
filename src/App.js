import React, { useState } from "react";
import "./App.css";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

import Display from "./components/DisplayComponents/Display"

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [displayValue, setDisplayValue] = useState('0')
  console.log(setDisplayValue)
  const addNumber = (num) => {
    setDisplayValue(displayValue => displayValue + num)
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}

        <Display number={displayValue} />
        <div className='three'>
          <div className='numSpec'>
            <Specials />
            <Numbers addNumber={addNumber}/>
          </div>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
