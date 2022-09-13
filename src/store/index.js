import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../reducers/post.reducer';

const reducer = combineReducers({
  postReducer,
})

const store = configureStore({
  reducer,
})

export default store;