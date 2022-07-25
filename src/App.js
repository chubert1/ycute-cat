import React from 'react';
import './App.css';
import { Cat } from 'react-kawaii';
import { MOODS } from './mood';

function App() {
  const currentMood = "angry"
  const handleMoodUpdate = (e) => {
    console.log(e)
  }
  return (
    <div className="App">
    <Cat size={320} mood={currentMood} color="#596681" />
    <section>
      {Object.values(MOODS).map((mood) => (
        <button 
          data-type={mood}
          key={mood}
          className={`${currentMood === mood ? "selected" : ""}`}
          onClick={handleMoodUpdate}
        >
        {mood}
        </button>
      ))}
    </section>
    </div>
  );
}

export default App;
