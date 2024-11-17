import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  theme :  JSON.parse(localStorage.getItem('theme')) ?? false,    //The null-coalescing operator = ??
  
};
////console.log(theme)

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      
      setTheme(state, action) {
        if(action.payload === 'dark') {
          state.theme = true;          
        }if (action.payload === 'light'){
          state.theme = false;
        }
      }
    },
  });
  
  export const { setTheme } = themeSlice.actions;
  export default themeSlice.reducer;