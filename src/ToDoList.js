import React from "react";
import './ToDoList.css';
 function ToDoList(props){

return(<>
<div className="todo_style">
<button className="cross" onClick={()=>{props.onSelect(props.id)}} >⨯</button>
<li style={{color:"rgb(101, 101, 133)",fontSize:"22px"}}>{props.text}</li>
</div>
</>)
 }
 export default ToDoList;