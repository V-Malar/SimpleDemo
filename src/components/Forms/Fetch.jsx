import React, { useState } from 'react';
import { useEffect } from 'react';
export default function Fetch()
{
    const [datas, updateDatas] = useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>
    {
        updateDatas(data);
    })
},[])
const display = (dId, userId, dTitle) => {
    let l = document.getElementById(dId);
    l.style.visibility = "visible";
    l.innerHTML = ` User ID: ${userId}<br/> Title:   ${dTitle}`;
}
    return(
        <>
        <ul className="fetch">
        {
            datas.map((dataFetch)=>
            {
                return (
                    <div  key={dataFetch.id}>
                    <li onClick={()=>{display(dataFetch.id, dataFetch.userId, dataFetch.title)}}>{dataFetch.id} <hr/>Click ID</li>
                    <label id = {dataFetch.id}></label>
                    {/* {window.location.reload(false)} */}
                    </div>
                )
            })
        }
        </ul>
        </>
    )
}