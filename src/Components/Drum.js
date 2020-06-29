import React, { useEffect } from "react";

const Drum = ({ keyTrigger, audio }) => {
  const audioRef = React.createRef();

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
  }, []);

  const handleKeyPress = (e) => {
    if (e.code === `Key${keyTrigger}`) {
      playAudio();
    }
  };

  const playAudio = (e) => {
    audioRef.current.play();
  };

  return (
    <div className="drum-pad" id={audio} onClick={playAudio}>
      {keyTrigger}
      <audio id={keyTrigger} className="clip" ref={audioRef} src={audio} />
    </div>
  );
};

export default Drum;
