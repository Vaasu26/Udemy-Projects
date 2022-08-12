import React, {useState} from 'react';
import './toDoList.css'

const ToDoList = () => {
    
    const[toDoList, setToDoList] = useState("");
    const[list, setList] = useState([]);

    const handleList = () => {
        setList([...list, toDoList]);
    }

    const handleDelete = (ind) => {
        let duplicateList = [...list];
        duplicateList.splice(ind, 1);
        setList(duplicateList);
    }


  return (
    <div className='container'>
        <h1>To Do List Application</h1>
        <div className='row justify-content-center'>
            <input type = "text" className='col-md-6 m-1' style = {{height : "40px"}} value = {toDoList} onChange={(e) => {setToDoList(e.target.value)}}></input>
            <button className='btn btn-success col-md-1' onClick={handleList}>Add Task</button>
        </div>
        {
            list && list.map((lists, index) => {
                return(
                    <div className='row justify-content-center'>
                        <h3 className='col-md-6 m-1'>{`${index + 1}. ${lists}`}</h3>
                        <button className='btn btn-danger col-md-1 m-1' onClick={() => {handleDelete(index)}}>Delete</button>
                    </div>
                )
            })
        }
        <div className='row justify-content-center'>
            <h6 className='m-1'>{`Total Tasks - ${list.length}`}</h6>
        </div>
    </div>
  )
}

export default ToDoList