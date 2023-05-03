import {Input} from './Input';
import { Numbers } from './numbers';
import { useState } from 'react';

export default function Calculator() {
    const [number, setNumber] = useState('');
    function updateNumber(e)
    {
        console.log(e);
        setNumber(number.concat(e.target.textContent));
    }
    function clear()
    {
      setNumber('');
    }
    function evalNumber() {
      setNumber(eval(number));
    }
    return (
      <div style={{display:"flex", justifyContent:"center", flexDirection: "column"}}>
        <Input number={number} />
        <Numbers updateNumber = {updateNumber} evalNumber={evalNumber}/>
        <button id="clear" style={{textAlign:"center", fontSize: "23px", margin: "auto", marginTop: "13px"}} onClick={clear}>Clear</button>
      </div>
    )
  }
