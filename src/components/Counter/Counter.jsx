import React, {useState} from 'react';

export default function Counter()
{
    const [count, setVal] = useState(0)
    return (
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
        <h1 style={{textAlign:"center"}}>COUNTER</h1>
        <div style={{margin: "auto", display:"flex", justifyContent:"center", flexDirection:"row"}}>
            <button  style={{alignSelf:"center", width: "50px",padding: "4px 6px", fontSize: "30px", fontWeight: "800"}} id="sub" onClick={() => {sub()}} disabled={count === 0}>-</button>
            <label  style={{textAlign:"center", padding: "10px", fontSize: "34px", fontWeight: "600", color: "black"}} id="val">Count is: {count}</label>
            <button style={{alignSelf:"center", width: "50px",padding: "4px 6px", fontSize: "30px", fontWeight: "800"}} id="add" onClick={() => {add()}} disabled={count === 10}>+</button>
        </div><br/>
        <button  style={{alignSelf:"center", width: "100px",padding: "4px 6px", fontSize: "25px", fontWeight: "800"}} id="reset" onClick={reset}>Reset</button>
      </div>
    )
  function sub()
  {
    if (count > 0)
    {
      setVal(count -1);
    }
  }
  function add()
  {
    if (count < 10){
      return setVal(count +1);
    }
  }
  function reset()
  {
      setVal(0);
  }
  }
  // button {&:not(.disable):hover{}}
  // npm i -D react-router-dom