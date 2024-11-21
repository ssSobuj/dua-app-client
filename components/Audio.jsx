import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { HiPlay } from "react-icons/hi2";

const Audio = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mt-12 mb-[-40px] custom-audio-player-container">
      <audio id="custom-audio" className="custom-audio-player">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div
        className="custom-audio-player-button"
        onClick={() => {
          const audio = document.getElementById("custom-audio");
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }}
      >
        <img src="/audiobtn.svg" alt="" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Audio;
