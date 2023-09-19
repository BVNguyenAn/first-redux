import React from 'react'
import { useDispatch } from 'react-redux';
import { EditingAction } from '../action/TodoAction';


const ListWork = ({ children }) => {  
  const dispatch = useDispatch();
  const changeState = () =>{
    dispatch(EditingAction(children))
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