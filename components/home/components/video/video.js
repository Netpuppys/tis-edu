"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Dynamically import ReactPlayer to disable SSR
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Video = () => {
  const [clipPathValue, setClipPathValue] = useState(25); // Initial clip-path value
  const { ref, inView, entry } = useInView({
    threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Thresholds: 0.0, 0.1, ..., 1.0
  });

  useEffect(() => {
    if (entry) {
      const scrollProgress = entry.intersectionRatio; // Intersection ratio ranges from 0 to 1
      setClipPathValue(25 + scrollProgress * 75); // Dynamically calculate the clip-path value
    }
  }, [entry]);
  return (
    <div
      id="5"
      className="w-full h-full flex flex-col justify-center items-center py-2 md:py-10"
    >
      <section
        ref={ref} // Attach the observer ref
        style={{
          clipPath: `circle(${clipPathValue}% at center center)`,
          transition: "clip-path 0.3s ease-in-out", // Smooth transition for clip-path
        }}
        className={`top-0 w-full h-full flex clip-circle-50px static section`}
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
      </section>
    </div>
  );
};

export default Video;
