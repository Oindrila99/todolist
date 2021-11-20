import React from "react";


function Item(props){
    return <div 
    onClick={()=>{
      props.onDelete(props.id);
    }}
    
    >
        <ul>
        <li>
          {props.text}
        </li>
        </ul>
      </div>
}


export default Item