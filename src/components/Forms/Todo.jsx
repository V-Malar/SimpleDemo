import React, { useState } from 'react'
import { useRef } from 'react';
export default function Todo()
{
    const [value, setValue] = useState(['Reading', 'Walking', 'Travelling']);
    const addVal = useRef();
    function add()
    {
        console.log(value);
        console.log(addVal.current.value);
        addVal.current.value === ''?alert("Please enter your ToDo..."):
        setValue([...value, addVal.current.value]);
    }
    const clear = () => {
        addVal.current.value = '';
    }
    const deleteTask = (taskmatch) => {
        let del = value.filter((task) => task !== taskmatch);
        setValue(del);
        console.log(setValue(del));
    }
    return (
        <>
        <div style={{display:"flex", justifyContent: "center"}}>
            <input placeholder="Type your ToDo" style={{background: "linear-gradient(to right bottom,  rgba(0, 255, 255, 0.493), rgba(255, 0, 255, 0.575)", border:"none", padding: "12px", fontSize: "20px", textAlign: "center"}}type='text' ref={addVal}/>
            <button style={{marginLeft: "12px", padding: "10px", fontSize: "20px"}}onClick={add}>+</button>
            <button style={{marginLeft: "12px", padding: "10px", fontSize: "20px"}}onClick={clear}>CLEAR</button></div>
            {
            value.map((val, index) =>
            {
                return (
                <div key={index}  style={{display: "flex", flexDirection: "row", marginTop: "0.3in", gap: "0.5in", justifyContent:"center", boxSizing: "border-box"}}><br/>
                <span style={{background: "linear-gradient(to right bottom,  lightgreen, lightblue)", border:"none", padding: "12px", fontSize: "20px", color: "darkblue", outline:"none", marginLeft:"0.7in", boxSizing:"border-box", width: "4in"}}>{val}</span>
                <button style={{padding: "10px", fontSize: "20px", backgroundColor: "lightsteelblue", border:"none"}} onClick={() => deleteTask(val)}>DELETE</button>
                </div>
            )}
            )
            }
          </>
    )
}