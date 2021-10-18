import DrumPad from "./Drum_Pad";
import "./drum-pad-container.css"
import QAud from "../audio/Q.mp3";
import WAud from "../audio/W.mp3";
import EAud from "../audio/E.mp3";
import AAud from "../audio/A.mp3";
import SAud from "../audio/S.mp3";
import DAud from "../audio/D.mp3";
import ZAud from "../audio/Z.mp3";
import XAud from "../audio/X.mp3";
import CAud from "../audio/C.mp3";
export const keyList = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const DrumPadContainer = () => {
  return (
    <div class="drum-pad-container">
      <DrumPad id="pad-Q" keyWord={keyList[0]} audio={QAud} />
      <DrumPad id="pad-W" keyWord={keyList[1]} audio={WAud} />
      <DrumPad id="pad-E" keyWord={keyList[2]} audio={EAud} />
      <DrumPad id="pad-A" keyWord={keyList[3]} audio={AAud} />
      <DrumPad id="pad-S" keyWord={keyList[4]} audio={SAud} />
      <DrumPad id="pad-D" keyWord={keyList[5]} audio={DAud} />
      <DrumPad id="pad-Z" keyWord={keyList[6]} audio={ZAud} />
      <DrumPad id="pad-X" keyWord={keyList[7]} audio={XAud} />
      <DrumPad id="pad-C" keyWord={keyList[8]} audio={CAud} />
    </div>
  );
};

export default DrumPadContainer;
