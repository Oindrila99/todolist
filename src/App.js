import React, {useState} from "react";
import './App.css';
import Item from "./Item";
import Input from "./Input";


function App() {

  const[items,setItems]=useState([])

  function addItem(item){
setItems(prevItems=>{
return[...prevItems,item]

})
  }
function deleteItem(id){
  setItems(prevItems => {
    return prevItems.filter((item, index) =>{
      return index !== id;
    });
  })
  }
  return (
    <div className="App">
      <div><h1>ToDoList</h1></div>
      <Input 
        onAdd={addItem}
      />
      <div>
      <ul>
      {items.map((item, index) =>(
        <Item 
        key={index}
        id={index}
        text={item}
        onDelete={deleteItem}

        />

      ))}
      
      </ul>
      </div>
    </div>
  );
}

export default App;
