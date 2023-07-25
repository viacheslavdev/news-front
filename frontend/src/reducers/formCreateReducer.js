import React from 'react'

const initialState = {
    name: '',
    email: '',
  };
  
  const formCreateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_NAME':
        return {
          ...state,
          name: action.payload,
        };
      case 'UPDATE_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  };
  
  export default formCreateReducer;