import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import resourceReducer from "./reducers/anecdoteReducer";

const reducer = combineReducers({
  resource: resourceReducer,
});

const store = createStore(reducer, composeWithDevTools());
console.log(store.getState());

export default store;
