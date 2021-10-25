import DrumPad from "./Drum_Pad";
import QAud from "../audio/Q.mp3";
import WAud from "../audio/W.mp3";
import EAud from "../audio/E.mp3";
import AAud from "../audio/A.mp3";
import SAud from "../audio/S.mp3";
import DAud from "../audio/D.mp3";
import ZAud from "../audio/Z.mp3";
import XAud from "../audio/X.mp3";
import CAud from "../audio/C.mp3";
import "./drum-pad-container.css";

const data = [
  { id: "pad-Q", keyWord: "Q", audio: QAud },
  { id: "pad-W", keyWord: "W", audio: WAud },
  { id: "pad-E", keyWord: "E", audio: EAud },
  { id: "pad-A", keyWord: "A", audio: AAud },
  { id: "pad-S", keyWord: "S", audio: SAud },
  { id: "pad-D", keyWord: "D", audio: DAud },
  { id: "pad-Z", keyWord: "Z", audio: ZAud },
  { id: "pad-X", keyWord: "X", audio: XAud },
  { id: "pad-C", keyWord: "C", audio: CAud },
];

const DrumPadContainer = () => {
 
  return (
    <div class="drum-pad-container">
      {data.map((pad) => (
        <DrumPad id={pad.id} keyWord={pad.keyWord} audio={pad.audio} />
      ))}
    </div>
  );
};

export const keyList = data.keyWord;
export default DrumPadContainer;
