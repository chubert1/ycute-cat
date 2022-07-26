import React from 'react';
import './App.css';
import { Cat } from 'react-kawaii';
import { MOODS } from './mood';
import { updateCatMood, selectMood } from './features/mood/moodSlice';
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const currentMood = useSelector(selectMood)
  const handleMoodUpdate = (e) => {
   const mood = e.target.value;
   dispatch(updateCatMood(mood))
  }
  console.log(updateCatMood.toString())
  return (
    <div className="App">
    <h1>cat</h1>
    <Cat size={320} mood={currentMood} color="#596681" />
    <section>
      {Object.values(MOODS).map((mood) => (
        <button 
          value={mood}
          key={mood}
          className={`${currentMood === mood ? "selected" : ""}`}
          onClick={handleMoodUpdate}
        >
        {mood}
        </button>
      ))}
    </section>
    <section>
    learn react
    </section>
    </div>
  );
}

export default App;
