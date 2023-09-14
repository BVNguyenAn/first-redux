import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, DeleteTodoAction } from './action/TodoAction';
import store from "./store";

function App() {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo)
  const {todos} = Todo;

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
    setTodo('')
    const jobs = store.getState().Todo.todos
    localStorage.setItem('todos', JSON.stringify(jobs))
  }

  const deleteHandler = (t, index) => {
    dispatch(DeleteTodoAction(t, index))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>TODO APP</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Task' value={todo} onChange={(e) => setTodo(e.target.value)}/>
          <button type='submit'>Add</button>
        </form>
        <ul className='allTodo'>
          {
            todos && todos.map((t, index) => (
          <li key={t.id} id={index} className= 'singleTodo'>
          <span className='textTodo'>
            {t.todo}
          </span>
          <button onClick={() => deleteHandler(t, index)}>Delete</button>
          </li>
            ))
          }

        </ul>
      </header>
    </div>
  );
}

export default App;
