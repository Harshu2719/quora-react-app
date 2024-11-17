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
            ////console.log(postId, 'wertgwwwwwwwwwwwr  yE3RYHT');
            let compare = (a, b) => {
              if (a.createdAt < b.createdAt) {
                  return -1;
              }
              if (a.createdAt > b.createdAt) {
                  return 1;
              }
              return 0;
          };
            const shortedComment = comments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

            state.comments.set(postId, shortedComment); 
        },

        // awwewfs -> [{}, {}, {}]
        // aweres -> [{}, {}, {}]
        // awser-> [{}, {}, {}]
        // aerews -> [{}, {}, {}]

        addComments(state, action) {
            const postId = action.payload?.postId;
            const comment = action.payload?.comment;
            const postComments = state.comments.get(postId)?? []; 
            postComments.unshift(comment);
            //console.log(postId, 'jaghdjhadmnbj,ahgdk', comment);
        },
        removeComments(state, action) {
          const postId = action.payload?.postId;
          const commentId = action.payload?.commentId;
          const comments = state.comments.get(postId).filter((comment)=> commentId !== comment?._id);
          state.comments.set(postId, comments);
          
        },
        editComment(state, action) {
          const postId = action.payload?.postId;
          const commentId = action.payload?.commentId;
          const comment = action.payload?.comment;
          const comments = state.comments.get(postId).map((obj) => {
            if(obj?._id === commentId) {
              obj.content = comment;
            }              
          })
          state.comments.set(postId, comments);
        }
    },
  });
  
  export const {setComments, addComments, removeComments, editComment } = commentsSlice.actions;
  export default commentsSlice.reducer;