import React, { useState } from "react";
import Drum from "./Components/Drum";
import SmallDisplay from "./Components/SmallDisplay";
import "./App.css";

const sounds = [
  {
    key: "W",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "Q",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const App = () => {
  const [note, setNote] = useState("");
  const [power, setPower] = useState(true);

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          {sounds.map((sound, i) => (
            <Drum key={i} keyTrigger={sound.key} audio={sound.sound} />
          ))}
        </div>
        <SmallDisplay />
      </div>
    </div>
  );
};

export default App;
