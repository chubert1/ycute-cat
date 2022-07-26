import moodReducer, {
    updateCatMood,selectMood, MOODS
  } from './moodSlice.';

describe('mood reducer', () => {
  
    const initialState = {
      mood : [MOODS.sad],
    };
    it('should handle initial state', () => {
        expect(selectMood()).toBe({
          mood: [MOODS.sad],
        });
      });
      it('should handle updapte', () => {
        const actual = moodReducer(initialState, updateCatMood("sad"));
        expect(actual.value).toBe("sad");
      });

});
