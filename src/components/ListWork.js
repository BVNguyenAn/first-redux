import React from 'react'
import store from "../store";

const ListWork = ({ children }) => {
  const changeState = () =>{
    children.isEditing = !children.isEditing
    const jobs = store.getState().Todo.todos
    console.log(jobs);
    localStorage.setItem('todos', JSON.stringify(jobs))
  }
  return (
        <li>
            <span onClick={changeState} className='singleTodo'>
            { children.todo }
        </span>
</li>
  )
}

export default ListWork