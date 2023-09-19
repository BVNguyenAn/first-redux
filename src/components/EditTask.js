import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  DoneAction } from '../action/TodoAction';

const EditTask = (t) => {
  const dispatch = useDispatch();
    const [todo, setTodo] = useState('');
    const handleDone = (todo) => {
        if(todo !== "" && todo !== " "){
            dispatch(DoneAction(t.children,todo))
        }else {
            alert('please enter the change')
        }
    }
  return (
    <>
    <input className='inpEditTodo' value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <button className='editBtn' onClick={() => handleDone(todo)}>Change</button>
    </>
  )
}

export default EditTask