"use client";
import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Video, Hourglass, MonitorStop } from "lucide-react";
import { Play } from "lucide-react";

export default function Banner() {
  const title = (
    <>
      Join The Free Live Webinar: To Stop The Confusion And Secure Your Child's
      Future by Clearing Your Doubts..
    </>
  );
    const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="w-full px-3 md:px-6 h-full">
        <p className="w-full text-center font-[Mirador800] text-[#b90124] text-[clamp(14px,5vw,60px)] md:text-[clamp(18px,3vw,48px)]">
          The Painful Truth : Why Most Parent are Failing To Choose The Right
          Boarding School ?
        </p>
        <div className="h-[4px] bg-[#b90124] rounded-full my-2 mx-auto" style={{ width: "40%" }}></div>

        <p style={{fontWeight:'800'}} className="w-full text-center text-[clamp(10px,3vw,100px)] md:text-[clamp(10px,1.5vw,100px)] px-12">
          {title}
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---- VIDEO HERE ---- */}
<div className="relative w-full max-w-3xl mx-auto">
      {!play ? (
        <div
          className="relative cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          {/* Thumbnail */}
          <Image
            src="/LandingPage/webinar-thumbnail.png"
            width={1200}
            height={700}
            alt="Webinar Preview"
            className="rounded-xl shadow-lg"
          />

          {/* Custom Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Play size={40} className="text-[#b90124] ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <video
          controls
          autoPlay
          className="w-full rounded-xl shadow-lg"
        >
          <source src="https://assets.tulas.edu.in/tis/webinar-video-compressed.mp4" type="video/mp4" />
        </video>
      )}
    </div>

        {/* Details Section */}
        <div className="space-y-6">
<h3 className="text-3xl text-center font-semibold flex items-center justify-center gap-3">
  <MonitorStop className="text-[#b90124] w-8 h-8" />
  Webinar Details
</h3>

          <div className="h-[2px] bg-[#b90124] rounded-full mx-auto" style={{ width: "40%" , marginTop:'-1px'}}></div>

          <div className="grid grid-cols-2 gap-6 text-lg">
            <DetailCard icon={<Calendar />} label="Date" value="11th Dec 2025" />
            <DetailCard icon={<Clock />} label="Time" value="7:30 PM IST" />
            <DetailCard icon={<Video />} label="Platform" value="Zoom" />
            <DetailCard icon={<Hourglass />} label="Duration" value="45 Minutes" />
          </div>

          <button className="w-full bg-[#b90124] text-white font-semibold py-4 rounded-md hover:bg-[#a40020] transition text-xl">
            Register for FREE Webinar
          </button>
        </div>
      </div>
    </section>
  );
}

function DetailCard({ icon, label, value }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 bg-[#b90124] text-white flex items-center justify-center rounded">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-500">{label}:</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
