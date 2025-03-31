import { useRef, useState } from "react";

export const useSound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true); 
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false); 
    }
  };

  return {
    audioRef,
    isPlaying, 
    playSound,
    stopSound,
  };
};
