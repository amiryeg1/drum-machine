import DrumPadContainer from "./components/Drum_pad_container";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const audioString = useSelector((event) => event.audio.value);
  return (
    <div className="App" id="drum-machine">
      <h1>drum machine</h1>
      <DrumPadContainer />
      <br/>
      <span id="display">{audioString}</span>
    </div>
  );
}

export default App;
