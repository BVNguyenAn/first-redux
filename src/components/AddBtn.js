import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodoAction } from '../action/TodoAction';
import store from "../store";

export const AddBtn = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
    setTodo('')
    const jobs = store.getState().Todo.todos
    localStorage.setItem('todos', JSON.stringify(jobs))
  }
  return (
    <form className='formTodo' onSubmit={handleSubmit}>
    <input placeholder='Task' value={todo} required={true} className='inpTodo' onChange={(e) => setTodo(e.target.value)}/>
    <button className='addBtn' type='submit'>Add</button>
  </form>
  )
}
