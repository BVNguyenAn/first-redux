import {  DeleteTodoAction } from '../action/TodoAction';
import { useDispatch, useSelector } from 'react-redux';
import ListWork from "../components/ListWork";
import { useState } from 'react';
          
export const DeleteHandler = (t) => {    
  const [todo, setTodo] = useState('');
  const Todo = useSelector(state => state.Todo)
const {todos} = Todo;
  const dispatch = useDispatch();
  const deleteBtnHandler = (t) => {
      console.log(t);
  dispatch(DeleteTodoAction(t))
}

  return(
    <div>
    {
      todos && todos.map((t) => {
        if(!t.isEditing){
          return(
            <div key={t.id} className='containBtn'>
            <ListWork>
            {t}          
            </ListWork>
            <button onClick={() => deleteBtnHandler(t)} className='deleteBtn'>Edit</button>
            </div>
          )
        }else if(t.isEditing){
          return(
            <>
            <input key={t.id} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={() => console.log(todo)}>Change</button>
            </>
          )
        }
      })
    }
    </div>
  )
}