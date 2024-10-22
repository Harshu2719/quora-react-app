import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  theme : false,
  
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      setTheme(state, action) {
        if(action === 'dark') {
            state.theme = true;
        }else {
            state.theme = false;
        }
      }
    },
  });
  
  export const { setTheme } = themeSlice.actions;
  export default themeSlice.reducer;