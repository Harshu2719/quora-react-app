import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import questionsSlice from './QuestionsSlice';
import  commentsSlice  from './CommentsSlice';

const store = configureStore({
    reducer: {
        userInfo: authSlice,
        question: questionsSlice,
        postComments: commentsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Customize your middleware here
      }),
})

export default store;