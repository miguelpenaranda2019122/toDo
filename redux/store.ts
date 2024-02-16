import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import toDoReducer from './reducers';

const rootReducer = combineReducers({ toDoReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));