import React from 'react';
import './App.css';

function Todo(){

const [tasks,setTasks]=React.useState([])
const [newTask,setNewTask]=React.useState("")
const [edittask,setedittask]=React.useState(null)

const changehandler=(e)=>{
setNewTask(e.target.value)
}

const addTask=()=>{
if(newTask.trim()==="")return
if(edittask!==null){
let updated=[...tasks]
updated[edittask]=newTask
setTasks(updated)
setedittask(null)
}else{
setTasks([...tasks,newTask])
}
setNewTask("")
}

const editTask=(i)=>{
setedittask(i)
setNewTask(tasks[i])
}

const deleteTask=(i)=>{
let updated=[...tasks]
updated.splice(i,1)
setTasks(updated)
}

return(
<div className="a">
<h1 className="b">My Todo List</h1>
<div className="c">
<input className="d" type="text" placeholder="Add a new task" value={newTask} onChange={changehandler}/>
<button className="e" onClick={addTask}>{edittask!==null?"Update":"Add"}</button>
</div>
<ul className="f">
{tasks.map((t,i)=>(
<li key={i} className="g">
<span>{t}</span>
<div className="h">
<button className="i" onClick={()=>deleteTask(i)}>Delete</button>
<button className="j" onClick={()=>editTask(i)}>Edit</button>
</div>
</li>
))}
</ul>
</div>
)
}

export default Todo
