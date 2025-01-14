import React from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer to disable SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Video = () => {
  return (
    <div
      id="5"
      className="w-full h-full flex flex-col justify-center items-center py-2 md:py-10"
    >
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
  );
};

export default Video;
