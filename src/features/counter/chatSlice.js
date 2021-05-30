import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';


// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const chatSlice = createSlice({
  name: 'chat',
  initialState:{
    chatId:null,
    chatName:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChat: (state,action) => {

      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName;
    },
    logout: (state) => {
      state.chat = null;
    },
    
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { login, logout } = chatSlice.actions;

export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default chatSlice.reducer;
