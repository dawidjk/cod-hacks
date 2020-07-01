import React, { useState } from "react";
import "./App.css";
import ColorScreen, { colors } from "./ColorScreen";
import ReactAudioPlayer from "react-audio-player";

// const recurseConfirm = () => {
//   // eslint-disable-next-line no-restricted-globals
//   confirm('Get Gud Bud');
//   recurseConfirm();
// }
const url = "https://cod.dawidjk.me";

const App = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    setInterval(() => {
      setIndex((index) => (index + 1) % colors.length);
      const newTab = window.open();
      if (newTab) {
        newTab.location.href = url;
      }
    }, 10);
  }, []);

  // recurseConfirm();

  return (
    <div>
      <ColorScreen index={index} />
      <ReactAudioPlayer autoPlay src="/song.ogg" />
    </div>
  );
};

export default App;
