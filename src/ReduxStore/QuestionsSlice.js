import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  question : []
};

export const questionSlice = createSlice({
    name: 'quest',
    initialState,
    reducers: {
        setQuestion(state, action) {
            state.question = action.payload ;
        },
        clearQuestions(state) {
          state.question = [];
        }
    },
  });
  
  export const { setQuestion, clearQuestions } = questionSlice.actions;
  export default questionSlice.reducer;