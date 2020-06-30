import React, { useState } from "react";
import Drum from "./Components/Drum";
import "./App.css";

const sounds = [
  {
    key: "Q",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: "Heater-1",
  },
  {
    key: "W",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: "Heater-2",
  },
  {
    key: "E",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: "Heater-3",
  },
  {
    key: "A",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: "Heater-4",
  },
  {
    key: "S",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: "Heater-6",
  },
  {
    key: "D",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: "Open-HH",
  },
  {
    key: "Z",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "Kick-n'-Hat",
  },
  {
    key: "X",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: "Kick",
  },
  {
    key: "C",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: "Closed-HH",
  },
];
const App = () => {
  const handleNote = (e, id) => {
    document.querySelector("h2").innerHTML = id;
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <div className="small-display">
            <h2></h2>
          </div>

          <div className="drums">
            {sounds.map((sound, i) => (
              <Drum
                key={i}
                keyTrigger={sound.key}
                audio={sound.sound}
                handleNote={handleNote}
                id={sound.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
