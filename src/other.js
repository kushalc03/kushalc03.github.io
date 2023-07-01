import './App.css';
import React, { useState } from 'react';

function Other() {
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
      <h1 onMouseDown={change} onMouseUp={revert} style={{ fontFamily: "Roboto", cursor: "grab" }} id="name">
        {currentName}
      </h1>

      
    </div>
    
  );
}

export default Other;
