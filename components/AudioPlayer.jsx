import React, { useState, useRef, useEffect } from "react";
import { ImLoop } from "react-icons/im";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setIsLooping] = useState(false); // Loop state

  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      // Update progress bar and running time
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        const progress =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        if (progressRef.current) {
          progressRef.current.style.width = `${progress}%`;
        }
      };

      // Enable looping if isLooping is true
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReplay = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping); // Toggle the loop state
  };

  // Handle progress bar click and update audio time
  const handleProgressClick = (e) => {
    const progressBar = progressRef.current;
    const clickPosition = e.nativeEvent.offsetX; // Position of the click
    const progressBarWidth = progressBar.offsetWidth; // Width of the progress bar
    const newTime =
      (clickPosition / progressBarWidth) * audioRef.current.duration;

    // Ensure audio element is not paused and is ready to seek
    if (audioRef.current.paused) {
      audioRef.current.play();
    }

    audioRef.current.currentTime = newTime; // Update the audio current time
    setCurrentTime(newTime); // Update the state to reflect the new time
  };

  return (
    <div className="flex items-center gap-4 p-3 w-80 h-20">
      {/* Play/Pause Button */}
      <button onClick={togglePlayPause}>
        <img src="/audiobtn.svg" alt="" className="cursor-pointer" />
      </button>

      {/* Progress Bar */}
      <div className="flex-grow relative" onClick={handleProgressClick}>
        <div className="h-2 bg-gray-300 rounded-full">
          <div
            ref={progressRef}
            className="h-full bg-green-500 rounded-full"
            style={{
              width: `${
                (currentTime / (audioRef.current?.duration || 1)) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Running Time */}
      <span className="text-sm text-gray-600">
        {new Date(currentTime * 1000).toISOString().substr(14, 5)}
      </span>

      {/* Loop Button */}
      <button
        className={`focus:outline-none ${
          isLooping ? "text-green-500" : "text-gray-400"
        }`} // Active color for loop
        onClick={toggleLoop}
      >
        <ImLoop />
      </button>

      {/* Replay Button */}
      <button
        className="text-gray-400 focus:outline-none"
        onClick={handleReplay}
      >
        <ImLoop />
      </button>

      {/* Audio element */}
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

export default AudioPlayer;
