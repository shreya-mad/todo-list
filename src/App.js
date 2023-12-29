import {React,useState} from "react";
import './App.css';
import ToDoList from "./ToDoList";

function App(){
   const[input,setinput]=useState();
   // below one is for taking empty array
   const[item,setItem]=useState([]);
   const listOfItem=()=>{
      // oldItem will have all the  data present in useState([])
      setItem((oldItem)=>{
       return[...oldItem,input];
      })
      setinput('')
   }
   const deleteItem=(id)=>{
     console.log('deleted')
     setItem((oldItem)=>{
      return(oldItem.filter((arrElem,index)=>{
        return index!==id;
      }))
     })
   }
return(<>
<div className="main_div">
   <div className="center_div">
      <h1 className="input">toDo List</h1>
      <input type="text" onChange={(e)=>setinput(e.target.value)} value={input} placeholder="add-item" id="text"/>
      <button id='plus' onClick={listOfItem}>+</button>
      <ol style={{listStyle:"none"}}>
         {item.map((itemVal,index)=>{
            return(<ToDoList 
            key={index}
            id={index}
            text={itemVal}
            onSelect={deleteItem}
            />)
         })}
      </ol>
   </div>
</div>
</>)
   }
export default App;