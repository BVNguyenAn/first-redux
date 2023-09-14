export const AddTodoAction = (todo) => (dispatch, getState) =>{
    const {Todo:{todos} } = getState();
    const hasTodo = todos.find(i => i.todo === todo);
    if(!hasTodo && todo !== ''){
        dispatch({
            type: 'ADD_TODO',
            payload:[{id : todo, todo}, ...todos]
        })
    } 
};

export const DeleteTodoAction = (todo, i) => (dispatch, getState) =>{
    const {Todo: {todos}} = getState();
    console.log(i);
    dispatch({
        type: "DELETE_TODO",
        payload: todos.filter(t => t.id !== todo.id )
    })
    localStorage.setItem('todos', JSON.stringify(getState().Todo.todos))
};