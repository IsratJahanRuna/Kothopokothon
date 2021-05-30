import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import userReducer from '../features/counter/userSlice';
import chatReducer from '../features/counter/chatSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat:chatReducer,
=======
import counterReducer from '../features/counter/counterSlice';
import chatReducer from '../features/counter/chatSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat:chatReducer,

>>>>>>> prantik
  },
});