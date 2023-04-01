import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter"
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./Video.css";


function Video({likes, messages, shares, name, description, music, url}) {
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
        src={url}
      ></video>
      <VideoSidebar 
       likes={likes}
       messages={messages}
       shares={shares}
       
       />
      <VideoFooter 
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
}

export default Video;
