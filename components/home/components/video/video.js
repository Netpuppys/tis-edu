import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div id="5">
      <div className="w-full h-full relative">
        <div className="hidden md:block w-full h-full">
          <ReactPlayer
            url={"https://assets.tulas.edu.in/Desktop_TIS.mp4"}
            playing
            muted
            loop
            width="100%"
            height="100%"
            playsinline
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  playsInline: true,
                },
              },
            }}
          />
        </div>
        <div className="md:hidden w-full h-full">
          <ReactPlayer
            url="https://assets.tulas.edu.in/Mobile_TIS.mp4"
            playing
            muted
            loop
            width="100%"
            height="100%"
            playsinline
            config={{
              file: {
                attributes: {
                  autoPlay: true,
                  muted: true,
                  playsInline: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
