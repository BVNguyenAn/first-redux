import {  DeleteTodoAction } from '../action/TodoAction';
import { useDispatch, useSelector } from 'react-redux';
import ListWork from "../components/ListWork";
          
export const DeleteHandler = (t) => {    
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
      todos && todos.map((t) => (
          <div key={t.id} className='containBtn'>
      <ListWork >
      {t.todo}          
      </ListWork>
      <button onClick={() => deleteBtnHandler(t)} className='deleteBtn'>Delete</button>
      </div>
      ))
    }
    </div>
  )
}