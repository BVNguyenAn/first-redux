import { legacy_createStore as createStore  } from "redux";
import { combineReducers, applyMiddleware  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from "./reducer/TodoReducer";

const reducer = combineReducers({
    Todo:TodoReducer,
});

 const loadState = () => {
    try {
      const stateString = localStorage.getItem("todos");
      return JSON.parse(stateString);
    } catch (error) {
      return undefined;
    }
  };

const persistedState = {
  Todo: {
    todos: loadState()
  }
};

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    persistedState || initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store