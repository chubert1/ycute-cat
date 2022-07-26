import { createSlice } from '@reduxjs/toolkit';

export const MOODS = {
    SAD: "sad",
    SHOCKED: "shocked",
    HAPPY: "happy",
    BLISSFUL: "blissful",
    LOVESTRUCK: "lovestruck",
    EXCITED: "excited",
    KO: "ko"
};
const initialState = {
    mood:[ MOODS.SAD],
  };

  export const moodSlice = createSlice({
    name: 'mood',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateCatMood: (state, action) => {
       // state.mood.push(action.payload)
       state.mood = action.payload
      }
    },
   
  });
  export const selectMood = (state) => state.mood.mood;

  export const { updateCatMood } = moodSlice.actions;

  export default moodSlice.reducer;