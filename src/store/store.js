
import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import { counterReducer } from "../reducers/counterReducer";
import thunk from 'redux-thunk';
import { apiReducers } from "../reducers/apiReducers";



const reducers = combineReducers({
    counter: counterReducer,
    dataApi: apiReducers 
});
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(reducers, enhancer);
export default store;