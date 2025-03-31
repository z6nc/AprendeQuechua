import { useSound } from "../../hooks/useSound";
import { IconSound } from "../../ui/IconSound";
import { IconPause } from "../../ui/IconSound";

function AudioButton() {
   const {audioRef ,playSound,stopSound, isPlaying} = useSound();
//    const status = statusPlay ? "scale-105" :  "scale-90";
  return (
    <div>
      <button 
        className={`  cursor-pointer bg-orange-500 p-2 text-white rounded `}
        onClick={isPlaying ? stopSound : playSound}
      >
        { isPlaying ?<IconPause/> :  <IconSound/> }
      </button>

      <audio ref={audioRef} >
        <source src="https://assets.mixkit.co/active_storage/sfx/1000/1000-preview.mp3" type="audio/mp3" />
        Tu navegador no soporta el audio.
      </audio>
    </div>
  );
}

export default AudioButton;
