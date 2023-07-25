import React from 'react'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import formCreateReducer from './reducers/formCreateReducer'

const rootReducer = combineReducers({
  formReducer: formCreateReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;