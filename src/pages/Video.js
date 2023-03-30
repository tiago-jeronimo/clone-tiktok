import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
        
        function isTrue() {
        videoRef.current.pause();
        setPlay(false);
        }

        function isFalse() {
        videoRef.current.play();
        setPlay(true);
        }

    play ? isTrue() : isFalse();
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
      ></video>
    </div>
  );
}

export default Video;
