export const AddTodoAction = (todo) => (dispatch, getState) =>{
    const {Todo:{todos} } = getState();
    const hasTodo = todos.find(i => i.id === todo.id);
    if(hasTodo){
        alert('Exist that task')
    }
    if(!hasTodo && todo !== ''){
        dispatch({
            type: 'ADD_TODO',
            payload:[{ isEditing : false ,id : new Date().getTime(), todo}, ...todos]
        })
    } 
};

export const DeleteTodoAction = (todo) => (dispatch, getState) =>{
    const {Todo: {todos}} = getState();
    dispatch({
        type: "DELETE_TODO",
        payload: todos.filter(t => t.id !== todo.id )
    })
    localStorage.setItem('todos', JSON.stringify(getState().Todo.todos))
};