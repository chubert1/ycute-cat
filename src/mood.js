
// action type
export const UPDAPTE_MOOD = "UPDATE-MOOD";
export const MOODS = {
    SAD: "sad",
    SHOCKED: "shocked",
    HAPPY: "happy",
    BLISSFUL: "blissful",
    LOVESTRUCK: "lovestruck",
    EXCITED: "excited",
    KO: "ko"
};
const INITIAL_STATE = { mood : MOODS.SAD};

// action creator
export const updateCatMood = (payload) => ({
    type: UPDAPTE_MOOD,
    payload
});

// reducer 
export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDAPTE_MOOD:
            return {...state, mood: action.payload}; 
        default:
            return state;
    }
};