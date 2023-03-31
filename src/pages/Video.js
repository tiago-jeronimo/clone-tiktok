import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter"
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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
