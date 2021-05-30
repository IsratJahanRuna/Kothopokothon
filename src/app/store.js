import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import chatReducer from '../features/counter/chatSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat:chatReducer,

  },
});
