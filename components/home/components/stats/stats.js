import Image from "next/image";
import React from "react";
import campus from "../../../../public/statsNew/campus.png";
import sports from "../../../../public/statsNew/sports.png";
import image1 from "../../../../public/statsNew/image1.png";
import medical from "../../../../public/statsNew/medical.png";
import image2 from "../../../../public/statsNew/image2.png";
import ratio from "../../../../public/statsNew/ratio.png";
import image3 from "../../../../public/statsNew/image3.png";
import years from "../../../../public/statsNew/years.png";
import ranking from "../../../../public/statsNew/ranking.png";
import image4 from "../../../../public/statsNew/image4.png";
import college from "../../../../public/statsNew/college.png";
import image5 from "../../../../public/statsNew/image5.png";
import stem from "../../../../public/statsNew/stem.png";
import image6 from "../../../../public/statsNew/image6.png";

function NewStats() {
  const stats = [
    { number: "22", title: "ACRE CAMPUS", icon: campus, aspect: "1-1" },
    { number: "16+", title: "OLYMPIC SPORTS", icon: sports, aspect: "1-1" },
    { img: image1, aspect: "1-1" },
    {
      number: "24*7",
      title: "MEDICAL ASSISTANCE",
      icon: medical,
      aspect: "1-1",
    },
    { img: image2, aspect: "2-1" },
    { number: "5:1", title: "STUDENT RATIO", icon: ratio, aspect: "1-1" },
    { img: image3, aspect: "1-1" },
    { number: "19+", title: "YEARS OF EXPERIENCE", icon: years, aspect: "1-1" },
    { number: "4th", title: "RANKING IN INDIA", icon: ranking, aspect: "1-1" },
    { img: image4, aspect: "1-1" },
    {
      number: "100%",
      title: "COLLEGE ACCEPTANCE",
      icon: college,
      aspect: "1-1",
    },
    { img: image5, aspect: "1-1" },
    { number: "60%", title: "STEM PARTICIPATION", icon: stem, aspect: "1-1" },
    { img: image6, aspect: "2-1" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-[95%] md:w-[80%] mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative md:group ${
            stat.aspect === "2-1"
              ? "col-span-2 aspect-[2/1]"
              : "col-span-1 aspect-square"
          }`}
        >
          {/* Image */}
          <div className="relative overflow-hidden w-full h-full">
            {stat.img && (
              <div className=" w-full h-full">
                <Image
                  src={stat.img}
                  alt=""
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 md:group-hover:scale-110"
                />
                {/* Animated border */}
                <div className="absolute hidden md:block top-10 left-10 h-full w-[1px] bg-white transition-all duration-500 ease-in-out md:group-hover:left-0 md:group-hover:top-0"></div>
                <div className="absolute hidden md:block top-10 left-10 h-[1px] w-full bg-white transition-all duration-500 ease-in-out md:group-hover:left-0 md:group-hover:top-0"></div>
              </div>
            )}
            {stat.icon && (
              <div
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
                style={{
                  fontFamily: "TT Chocolates",
                }}
              >
                <Image src={stat.icon} alt="" className="w-[40%] h-fit mb-3" />
                <h3 className="text-[#3D3D3D] text-[clamp(20px,3vw,70px)] font-light">
                  {stat.number}
                </h3>
                <h3 className="text-base md:text-lg text-[#707070]">{stat.title}</h3>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewStats;