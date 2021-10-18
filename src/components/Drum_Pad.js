import { useEffect } from "react";
import { keyList } from "./Drum_pad_container";
import "./drum-pad.css";
import { useDispatch } from "react-redux";
import { setAudioString } from "../store/audio-string-slice";


const DrumPad = (props) => {
const dispatch = useDispatch()
  var audio;

  useEffect(() => {
    audio = document.getElementById(props.keyWord);
  });
  const playAudio = () => {
    dispatch(setAudioString(props.id))
    audio.play();
  };

  const handleKeyPress = (event) => {
    if (keyList.includes(event.key.toUpperCase())) {
      document.getElementById(event.key.toUpperCase()).click();
    }
  };

  const handleKeyDown = (event) => {
    if (keyList.includes(event.key.toUpperCase())) {
      document.getElementById(
        "pad-" + event.key.toUpperCase()
      ).style.background = "#741188";
      document.getElementById(
        "pad-" + event.key.toUpperCase()
      ).style.borderColor = "#9c919e";
    }
  };

  const handleKeyUp = (event) => {
    if (keyList.includes(event.key.toUpperCase())) {
      document.getElementById(
        "pad-" + event.key.toUpperCase()
      ).style.background = "#4f005f";
      document.getElementById(
        "pad-" + event.key.toUpperCase()
      ).style.borderColor = "#9c919e";
    }
  };

  return (
    <button
      className="drum-pad"
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      id={props.id}
      onClick={playAudio}
    >
      <audio
        type="audio/mpeg"
        src={props.audio}
        className="clip"
        id={props.keyWord}
      ></audio>
      {props.keyWord}
    </button>
  );
};

export default DrumPad;
