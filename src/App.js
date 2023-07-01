import './App.css';
import React, { useState } from 'react';
// import Other from './other.js';

function App() {
  const names = [
    "\"Kushal Chattopadhyay\"", 
    "\"কুশল চট্টোপাধ্যায়\"", 
    "\"クシャル・チャットパディヤイ\"", 
    "\"कुशल चट्टोपाध्याय\"", 
    "\"Кушал Чаттопадхьяй\"",
    "\"კუშალ ჩატოპადიაი\"",
    "\"குஷால் சட்டோபாத்யாய்\"",
    "\"ކުޝަލް ޗައްޓޯޕަދްޔާ އެވެ\"",
    "\"ਕੁਸ਼ਲ ਚਟੋਪਾਧਿਆਏ\"",
    "\"쿠샬 차토파디야이\"",
    "\"ꯀꯨꯁꯥꯜ ꯆꯠꯇꯣꯄꯥꯙ꯭ꯌꯥꯌ꯫\"",
  ];
  const [currentName, setCurrentName] = useState(names[0]);
  
  const change = () => {
    const nextName = names[Math.floor(Math.random()*10)+1];
    setCurrentName(nextName)
  };

  const revert = () => {
    setTimeout(() => {setCurrentName(names[0])}, 2500);
  };
  
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1 onMouseDown={change} onMouseUp={revert} style={{ fontFamily: "Helvetica Neue", cursor: "grab" }} id="name">
          {currentName} 
        </h1>
        <br />
        <div style={{width: "100vh", justifyContent:'True'}}>
          <p style={{marginTop: "-2vh", fontFamily: "Helvetica Neue"}}>
            is a student at Harvard studying Applied Mathematics, Computer Science, and Economics. Interested in machine learning research (primarily the intersection of probabilistic deep learning and computer vision, but also reinforcement learning, transportation, and urban economics), quantitative finance, and software engineering. Experience in machine learning and data science, computer vision, quantitative research, full-stack engineering, and app development. An avid language learner and polyglot, photographer, traveler and foodie. Let's connect.
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
