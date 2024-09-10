import { configureStore } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import questionsSlice from './QuestionsSlice';
import  commentsSlice  from './CommentsSlice';

const store = configureStore({
    reducer: {
        userInfo: authSlice,
        question: questionsSlice,
        postComments: commentsSlice,
    }
})

export default store;