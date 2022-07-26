import { configureStore } from '@reduxjs/toolkit';
import  moodReducer  from '../features/mood/moodSlice';

export const store = configureStore({
  reducer: {
    mood: moodReducer,
  },
});
