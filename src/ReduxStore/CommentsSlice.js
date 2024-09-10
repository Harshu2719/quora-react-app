import {createSlice} from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
enableMapSet();
const initialState = {
  comments : new Map()
};

export const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setComments(state, action) {
            const postId = action.payload?.id;
            const comments = action.payload?.comments;
            console.log(postId, 'wertgwwwwwwwwwwwr  yE3RYHT');
            state.comments.set(postId, comments); 
        },

        // awwewfs -> [{}, {}, {}]
        // aweres -> [{}, {}, {}]
        // awser-> [{}, {}, {}]
        // aerews -> [{}, {}, {}]

        addComments(state, action) {
            const postId = action.payload?.id;
            const comment = action.payload?.comment;
            const postComments = state.comments.get(postId)?? []; 
            postComments.push(comment);
        },
        removeComments(state, action) {
          const postId = action.payload?.postId;
          const commentId = action.payload?.commentId;
          const comments = state.comments.get(postId).filter((comment)=> commentId !== comment?._id);
          state.comments.set(postId, comments);
        }
    },
  });
  
  export const {setComments, addComments, removeComments } = commentsSlice.actions;
  export default commentsSlice.reducer;