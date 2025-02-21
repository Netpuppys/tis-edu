"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderMusicImg from "../../public/Banner/beyondCurriculum.webp";
import HeaderMusicImgMobile from "../../public/Banner/beyondCurriculumMobile.webp";
import "../../styles/About Tis/ourHistory.css";
import music from "../../public/Music/Music.webp";
import Arts from "../../public/Music/Arts.webp";
import Foreignlanguages from "../../public/Music/ForeignLanguages.webp";
import Trips from "../../public/Music/Trips.png";
import pootersWheelIcon from "../../public/Clubs/pootersWheelIcon.png";
import RagaRocksIcon from "../../public/Clubs/RagaRocksIcon.png";
import vibgyorIcon from "../../public/Clubs/vibgyorIcon.png";
function Music() {
  const data = [
    {
      title: "Music And Dance",
      icon: pootersWheelIcon,
      image: music,
      description: (
        <>
          At Tula’s International School, one of the top residential schools in
          Dehradun, music is not regarded as a standalone subject but is
          incorporated into the curriculum itself. It is an integral part of
          every student’s life. The Music Academy at Tula’s offers students a
          wide array of opportunities in both music and dance. The school has
          well qualified teachers who teach students to play a variety of
          musical instruments, such as the guitar, congo drums, violin, sitar,
          keyboards, drums, harmonium, tabla, and to sing as well. Students are
          exposed to western as well as Indian classical dance forms
        </>
      ),
    },
    {
      title: "Art & Craft",
      icon: RagaRocksIcon,
      image: Arts,
      description: (
        <>
          As one of the reputed CBSE schools in Dehradun, Tula’s has the only
          Art & Craft workstation of its kind in Uttarakhand. Called ‘Colours’,
          it continually strives to inspire its students to display their
          creativity under the capable guidance of art teachers. Students are
          exposed to different mediums for a wholesome education in the artistic
          sphere. Portrait painting, clay modeling, sketching, crafts, Madhubani
          painting, and creating sculptures are some of the creative pursuits
          that students enjoy doing during their art and craft classes.
        </>
      ),
    },
    {
      title: "Foreign Langauges",
      icon: vibgyorIcon,
      image: Foreignlanguages,
      description: (
        <>
          At Tula&apos;s International School (TIS), we recognize the importance
          of foreign languages in today&apos;s globalized world. Alongside
          German, TIS also teaches French as part of our foreign language
          curriculum. This provides our students with a well-rounded linguistic
          education, enhancing their career prospects and personal growth.
          Students at the University of Mumbai&apos;s Department of German and
          French get a chance to pursue studies at German and Austrian
          Universities under many academic exchange programmes. A wide range of
          exchange programs exists for both school and university students
          between Germany, France, and many countries in the world.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Beyond The Curriculum"}
        subtitle={
          "Skills for life are discovered on stages, fields, and everywhere in between"
        }
        headerImg={HeaderMusicImg}
        headerImgMobile={HeaderMusicImgMobile}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-[4%] mx-auto text-justify md:text-center text-[clamp(10px,4.5vw,30px)] font-normal md:text-[clamp(10px,1.3vw,45px)] leading-tight "
      >
        At Tula’s International School, we believe in making learning an
        exciting journey full of discovery and fun. Our students dive into
        experiences that ignite their imagination, spark their curiosity, and
        open doors to new worlds. It's where creativity flows freely, and every
        moment is an opportunity to explore, grow, and have a blast along the
        way.
      </h6>
      <div className="flex flex-col items-center justify-center">
        {data.map((data, index) => (
          <div
            key={index}
            className={`flex w-full h-full items-center px-8 md:px-0 justify-center ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse bg-[#E8E8E8]"
            }`}
          >
            <div
              className={`w-full md:w-[40%] py-8 md:py-[4%] ${
                index % 2 === 0 ? "md:pl-[12.5%]" : "md:pr-[12.5%]"
              }`}
            >
              <Image
                src={data.image}
                alt=""
                className={`w-full h-full rounded-xl md:rounded-2xl`}
              />
            </div>
            <div
              className={`w-full md:w-[47.5%] h-full ${
                index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
              }`}
            >
              <h2 className="font-[TTChocolatesBold] text-[#b90124] font-semibold text-[clamp(10px,7vw,50px)] md:text-[clamp(10px,2.5vw,50px)]">
                {data.title}
              </h2>
              <h2
                style={{
                  fontFamily: "TT Chocolates",
                }}
                className={`text-[clamp(10px,4.5vw,30px)] pt-2 md:pt-4 md:text-[clamp(10px,1.3vw,45px)] leading-tight text-black font-normal`}
              >
                {data.description}
              </h2>
            </div>
            <div
              className={`w-[50%] -mb-[10%] md:mb-0 relative z-20 md:w-[12.5%] flex md:items-center md:justify-center ${
                index === 0 && "self-end"
              } ${index === 1 && "self-start"} ${index === 2 && "self-start"} ${
                index === 3 && "self-end"
              } ${index === 4 && "self-end"} ${index === 5 && "self-start"} ${
                index === 6 && "self-start"
              } ${index === 7 && "self-end"} ${index === 8 && "self-end"}`}
            >
              <Image
                src={data.icon}
                alt=""
                className={`w-full max-w-[174px] h-full
                  // index % 2 === 0 ? "pl-[12.5%]" : "mr-[12.5%]"
                `}
              />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="our-history-main" style={{ marginBottom: "2rem" }}>
        {isMobile && <Image src={Trips} alt="" />}
        <div className="content-history">
          <h3>Trips & Excursions</h3>

          <h5>
            As befits its reputation as one of the best residential schools in
            Dehradun, Tula&apos;s organizes frequent trips and excursions to
            expose students to the vibrant world that lies outside the
            schoolroom. The school field trip has a long history of public
            education. For decades, students have piled into yellow buses to
            visit a variety of cultural institutions, including art, natural
            history, and science museums, as well as theatres, zoos, and
            historical sites. Although going on a school outing means escaping
            the classroom drudgery for a day, the learning is not necessarily
            paused-rather enhanced.
            <br />
            <br />
            On a field trip, students interact with each other and with their
            teachers in a less formal environment, where they have the
            opportunity to enrich their education through actual experience.
          </h5>
        </div>
        {!isMobile && <Image src={Trips} alt="" />}
      </div> */}
    </>
  );
}

export default Music;
