import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file for styling

const Calculator = () => {
  const [result, setResult] = useState('');
  const [history, setHistory] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculation = result + ' = ' + eval(result).toString();
      setResult(eval(result).toString());
      setHistory(calculation + '\n');
    } catch (error) {
      setResult('Error');
    }
  };

  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="history">
        <textarea value={history} readOnly />
      </div>
      <div className="result">
        <input type="text" value={result} readOnly />
      </div>
      <div className="keypad">
        <button className="highlight" onClick={handleClear} id="clear"> C </button>
        <button name="(" onClick={handleClick}> ( </button>
        <button name=")" onClick={handleClick}> ) </button>
        <button className="highlight" onClick={handleBackspace} id="backspace"> ⌫ </button><br/>
        <button name="7" onClick={handleClick}> 7 </button>
        <button name="8" onClick={handleClick}> 8 </button>
        <button name="9" onClick={handleClick}> 9 </button>
        <button name="/" onClick={handleClick}> &divide; </button><br/>
        <button name="4" onClick={handleClick}> 4 </button>
        <button name="5" onClick={handleClick}> 5 </button>
        <button name="6" onClick={handleClick}> 6 </button>
        <button name="*" onClick={handleClick}> &times; </button><br/>
        <button name="1" onClick={handleClick}> 1 </button>
        <button name="2" onClick={handleClick}> 2 </button>
        <button name="3" onClick={handleClick}> 3 </button>
        <button name="-" onClick={handleClick}> - </button><br/>
        <button name="0" onClick={handleClick}> 0 </button>
        <button name="." onClick={handleClick}> . </button>
        <button className="highlight" onClick={handleCalculate} id="equal">  = </button>
        <button name="+" onClick={handleClick}> + </button>
      </div>
    </div>
  );
};

export default Calculator;
