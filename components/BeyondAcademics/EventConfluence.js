"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderConfluenceImg from "../../public/Banner/confluence.webp";
import HeaderConfluenceImgMobile from "../../public/Banner/confluenceMobile.webp";
import yellowLine from "../../public/pictures/lineImg.png";
import "../../styles/BeyondAcademics/EventConfluence.css";
import { useMobile } from "../globalComponents/IsMobileContext";
import Cresendo from "../../public/Confluence/cresendo.svg";
import Symphony from "../../public/Confluence/symphony.svg";
import Vibrations from "../../public/Confluence/vibration.svg";
import Canvas from "../../public/Confluence/canvas.svg";
import Speakup from "../../public/Confluence/speakUp.svg";
import FutureLens from "../../public/Confluence/futureLens.svg";
import bookwormIcon from "../../public/Clubs/bookwormIcon.png";
import pootersWheelIcon from "../../public/Clubs/pootersWheelIcon.png";
import RagaRocksIcon from "../../public/Clubs/RagaRocksIcon.png";
import vibgyorIcon from "../../public/Clubs/vibgyorIcon.png";
export default function EventConfluence() {
  const { isMobile } = useMobile();
  const data = [
    {
      title: "Cresendo (War Of Bands)",
      image: Cresendo,
      icon: bookwormIcon,
      description:
        "For all those rock stars who aspire to greatness and want to make the crowd rock to your music, Confluence ’17 invites you to show you madness and spread the rock magic on stage. So all the rock bands are welcome to show your talent!!",
    },
    {
      title: "Symphony (Solo Instrumental Performance)",
      image: Symphony,
      icon: pootersWheelIcon,
      description:
        "Are you the next great instrumentalist? Perform a solo that showcases your musical talents. Your performance can be an all-out jam session where everything is spontaneous and creative, or a composed and orchestrated recital. It’s all about creating a great video and generating Buzz.",
    },
    {
      title: "Vibrations Group Dance",
      image: Vibrations,
      icon: vibgyorIcon,
      description:
        "“Dance” is not only a form of art but its also a mood booster for someone or passion of other. So if you think that your dancing hobby or passion needs a platform to showcase itself and have a bunch of friends following the same. Its time to register yourself for Confluence 2017 to be the best.",
    },
    {
      title: "Canvas (Painting)",
      image: Canvas,
      icon: RagaRocksIcon,
      description:
        "“Painting is just another way of keeping a diary.” It is an infinitely minute part of one’s personality. With painting, the key is to keep things fresh and exciting right up to the end so that the whole process allows you to express your inner self and thereby develop an individuality of approach and a personal style.",
    },
    {
      title: "SpeakUp (Debate)",
      image: Speakup,
      icon: bookwormIcon,
      description:
        "For good ideas and true innovation, you need human interaction, conflict, argument, debate. Debates are a great way for students to get involved in class. Speaking and listening, oral language, are at the foundation of literacy, and debate requires both speaking and listening. Debates are one way to increase both skills in the classroom.",
    },
    {
      title: "Futurelens (Movie Making)",
      image: FutureLens,
      icon: pootersWheelIcon,
      description:
        "Filmmaking is a chance to live many lifetimes. It’s very important to recognize talent in all facets of filmmaking. Making a movie is such a lengthy and intense experience, so it’s wonderful to honor actors, directors, producers and all crew members who put so much hard work and passion into a project.",
    },
  ];
  return (
    <>
      <Header
        title={"Confluence"}
        subtitle={
          "A vibrant celebration of diversity, talent, and creativity at TIS Confluence"
        }
        headerImg={HeaderConfluenceImg}
        headerImgMobile={HeaderConfluenceImgMobile}
      />
      <div className="py-8 md:py-14">
        <h2 className="text-[30px] w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Confluence
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h6
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-14 mx-auto text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
        >
          Confluence is the annual cultural fest of Tula’s International School,
          Dehradun in which a no. of events are organized with students of
          different schools participating in. Confluence derives its name from
          the very qualities it hopes to exemplify Creativity, Excellence, and
          talent among its participants and organizers alike. It hosts a variety
          of cultural events broadly split up into Performing arts, Literary
          arts and Fine arts along with a variety of fun informal events for
          students to showcase their skills. Excellence and talent among its
          participants and organizers alike
          <p className="py-1"></p>
          Under Confluence, school organizes Inter School Musical, Cultural as
          well as Dance competitions under seven categories which are as
          follows: <p className="py-1"></p>
          <ul className="ml-5 list-disc">
            <li>VIBRATIONS – GROUP DANCE</li>
            <li>CATCH ME IF YOU CAN – TREASURE HUNT</li>
            <li>CRESCENDO – BATTLE OF BANDS</li>
            <li>CANVAS – PAINTING </li>
            <li>SPEAK UP – ENGLISH DEBATE </li>
            <li>FUTURELENS – MOVIE MAKING </li>
            <li>ADVERTO – AD BAG </li>
            <li>TYCOON – BUSINESS IDEA </li>
            <li>RAP ON TAP – RAP SONG </li>
            <li>SHUTTER BUG – PHOTOGRAPHY </li>
          </ul>
        </h6>
        <h2 className="text-[30px] pt-8 md:pt-14 w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          General <span className="text-[#b90124]">Guidelines</span>
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h6
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-14 mx-auto text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
        >
          <ul className="ml-5 list-decimal">
            <li>
              Change of participants is not permitted under any circumstances
              after the 4th May 2024.
            </li>
            <li>
              Each participating school will be charged a nominal registration
              fee of Rs. 500 per participant.
            </li>
            <li>
              Lunch will be provided to participants, escort students and
              teachers by the host school.
            </li>
            <li>
              A total of 2 helping / escort students and a maximum of two
              teachers are allowed per school.
            </li>
            <li>
              Participants must remain incognito. No school uniform will be
              permitted. No mention must be made of the name(s) of the
              participating school(s) during any event.
            </li>
            <li>
              Students participation number will be provided to each
              participating school for each event.
            </li>
            <li>
              Participants are instructed to bring their own make up kits,
              dresses, instruments and necessary things, school will not provide
              them anything besides Drum set.
            </li>
            <li>The decisions of the judges shall be final and binding.</li>
          </ul>
        </h6>
      </div>
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
              className={`w-full md:w-[37.5%] pt-8 md:py-14 ${
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
              className={`w-full md:w-[50%] py-8 md:py-14 h-full ${
                index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
              }`}
            >
              <h2 className="font-[TTChocolatesBold] text-[#b90124] font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)]">
                {data.title}
              </h2>
              <h2
                style={{
                  fontFamily: "TT Chocolates",
                }}
                className={`text-[clamp(15px,4.5vw,30px)] pt-2 md:pt-4 md:text-[clamp(18px,1.3vw,45px)] text-black font-normal`}
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
    </>
  );
}
