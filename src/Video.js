import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      ></video>
      <VideoFooter
        channel="fullstackfarzzy"
        description="check out this new build"
        song="Usher - Yeah"
      />
      <VideoSidebar likes={111} messages={222} shares={333} />
    </div>
  );
}

export default Video;
