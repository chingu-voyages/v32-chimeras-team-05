import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import resourceReducer from "./reducers/resourceReducer";

const reducer = combineReducers({
  resource: resourceReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState());

export default store;
