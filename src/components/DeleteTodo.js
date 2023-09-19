import {  DeleteTodoAction } from '../action/TodoAction';
import { useDispatch, useSelector } from 'react-redux';
import ListWork from "../components/ListWork";
import  EditTask  from '../components/EditTask';
          
export const DeleteHandler = (t) => {    
  const Todo = useSelector(state => state.Todo)
const {todos} = Todo;
  const dispatch = useDispatch();
  const deleteBtnHandler = (t) => {
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
            <button onClick={() => deleteBtnHandler(t)} className='deleteBtn'>Delete</button>
            </div>
          )
        }else if(t.isEditing){
          return(
            <div key={t.id}>
              <EditTask>
                {t}
              </EditTask>
            </div>
          )
        }
        return('done')
      })
    }
    </div>
  )
}