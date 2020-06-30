import React, { useEffect } from "react";

const Drum = ({ keyTrigger, audio, handleNote, id }) => {
  const audioRef = React.useRef();

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
  }, []);

  const handleKeyPress = (e) => {
    if (e.code === `Key${keyTrigger}`) {
       audioRef.current.play();
       handleNote(e.code, id);
    }
  };

  const handleClick = (e) => {
    audioRef.current.play();
     handleNote(e.target, id);
  };

  return (
    <div className="drum-pad" id={audio} onClick={handleClick}>
      {keyTrigger}
      <audio
        id={keyTrigger}
        className="clip"
        ref={audioRef}
        src={audio}
      />
    </div>
  );
};

export default Drum;
