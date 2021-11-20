import React, {useState} from "react";



function Input(props){

  const[item,setItem]  =useState("")

function handleChange(event){
setItem(event.target.value)
}


    return (<div className="form">
      
      <input type="text" onChange={handleChange} value={item}></input>
      <button type="button" onClick={()=>{
props.onAdd(item);
      }}>Add</button>
      
    </div>)
}

export default Input