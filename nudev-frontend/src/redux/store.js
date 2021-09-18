import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import resourceReducer from "./reducers/resourceReducer";
import bookmarkReducer from "./reducers/bookmarkReducer";

const reducer = combineReducers({
  resource: resourceReducer,
  bookmark: bookmarkReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
console.log(store.getState());

export default store;
