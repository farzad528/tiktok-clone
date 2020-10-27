import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video className="video__player" src={"../public/videos/tiktok1.mp4"}></video>
      <h1>this is a video</h1>
      {/* VideoFooter /> */}
      {/* VideoSidebar /> */}
    </div>
  );
}

export default Video;
