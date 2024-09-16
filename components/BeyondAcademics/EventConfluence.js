"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderConfluenceImg from "../../public/Header/ConfluenceHeader.png";
import yellowLine from "../../public/pictures/lineImg.png";
import "../../styles/BeyondAcademics/EventConfluence.css";
import { useMobile } from "../globalComponents/IsMobileContext";
import Cresendo from "../../public/Confluence/cresendo.svg";
import Symphony from "../../public/Confluence/symphony.svg";
import Vibrations from "../../public/Confluence/vibration.svg";
import Canvas from "../../public/Confluence/canvas.svg";
import Speakup from "../../public/Confluence/speakUp.svg";
import FutureLens from "../../public/Confluence/futureLens.svg";
export default function EventConfluence() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Confluence"}
        subtitle={
          "Confluence at Tula's International School is a vibrant platform celebrating cultural diversity, talent, and creativity among students."
        }
        headerImg={HeaderConfluenceImg}
      />
      <div className="confluence">
        <h1 className="Confluence-heading">
          Confluence{" "}
          <Image className="yellowLine-confluence" alt="" src={yellowLine} />
        </h1>
        <p1 className="confluence-text">
          Confluence is the annual cultural fest of Tula’s International School,
          Dehradun in which a no. of events are organized with students of
          different schools participating in. Confluence derives its name from
          the very qualities it hopes to exemplify Creativity, Excellence, and
          talent among its participants and organizers alike. It hosts a variety
          of cultural events broadly split up into Performing arts, Literary
          arts and Fine arts along with a variety of fun informal events for
          students to showcase their skills. Excellence and talent among its
          participants and organizers alike <br />
          <br />
          Under Confluence, school organizes Inter School Musical, Cultural as
          well as Dance competitions under seven categories which are as
          follows: <br />
          <ul>
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
        </p1>
        <h1 className="Confluence-heading">
          General Guidelines{" "}
          <Image className="yellowLine-confluence" alt="" src={yellowLine} />
        </h1>
        <p1 className="confluence-text">
          <br />- Change of participants is not permitted under any
          circumstances after the 4th May 2024.
          <br />- Each participating school will be charged a nominal
          registration fee of Rs. 500 per participant.
          <br />- Lunch will be provided to participants, escort students and
          teachers by the host school.
          <br />- A total of 2 helping / escort students and a maximum of two
          teachers are allowed per school.
          <br />- Participants must remain incognito. No school uniform will be
          permitted. No mention must be made of the name(s) of the participating
          school(s) during any event.
          <br />- Students participation number will be provided to each
          participating school for each event.
          <br />- Participants are instructed to bring their own make up kits,
          dresses, instruments and necessary things, school will not provide
          them anything besides Drum set.
          <br />- The decisions of the judges shall be final and binding.
        </p1>
      </div>
      <div className="confluence-images">
        <div className="images-pa">
          <Image src={Cresendo} alt="" />
        </div>
        <div className="text-confluences">
          <h2>Cresendo (War Of Bands)</h2>
          <p3>
            For all those rock stars who aspire to greatness and want to make
            the crowd rock to your music, Confluence ’17 invites you to show you
            madness and spread the rock magic on stage. So all the rock bands
            are welcome to show your talent!!
          </p3>
        </div>
      </div>
      <div className="confluence-images" style={{ backgroundColor: "#b90124" }}>
        {isMobile && (
          <div className="images-pa">
            <Image src={Symphony} alt="" />
          </div>
        )}
        <div className="text-confluences">
          <h2 style={{ color: "#FFF" }}>
            Symphony (Solo Instrumental Performance)
          </h2>
          <p3 style={{ color: "#FFF" }}>
            Are you the next great instrumentalist? Perform a solo that
            showcases your musical talents. Your performance can be an all-out
            jam session where everything is spontaneous and creative, or a
            composed and orchestrated recital. It’s all about creating a great
            video and generating Buzz.
          </p3>
        </div>
        {!isMobile && (
          <div className="images-pa">
            <Image src={Symphony} alt="" />
          </div>
        )}
      </div>
      <div className="confluence-images">
        <div className="images-pa">
          <Image src={Vibrations} alt="" />
        </div>
        <div className="text-confluences">
          <h2>Vibrations Group Dance</h2>
          <p3>
            “Dance” is not only a form of art but its also a mood booster for
            someone or passion of other. So if you think that your dancing hobby
            or passion needs a platform to showcase itself and have a bunch of
            friends following the same. Its time to register yourself for
            Confluence 2017 to be the best.
          </p3>
        </div>
      </div>
      <div className="confluence-images" style={{ backgroundColor: "#b90124" }}>
        {isMobile && (
          <div className="images-pa">
            <Image src={Canvas} alt="" />
          </div>
        )}
        <div className="text-confluences">
          <h2 style={{ color: "#FFF" }}>Canvas (Painting)</h2>
          <p3 style={{ color: "#FFF" }}>
            “Painting is just another way of keeping a diary.” It is an
            infinitely minute part of one’s personality. With painting, the key
            is to keep things fresh and exciting right up to the end so that the
            whole process allows you to express your inner self and thereby
            develop an individuality of approach and a personal style.
          </p3>
        </div>
        {!isMobile && (
          <div className="images-pa">
            <Image src={Canvas} alt="" />
          </div>
        )}
      </div>
      <div className="confluence-images">
        <div className="images-pa">
          <Image src={Speakup} alt="" />
        </div>
        <div className="text-confluences">
          <h2>SpeakUp (Debate)</h2>
          <p3>
            For good ideas and true innovation, you need human interaction,
            conflict, argument, debate. Debates are a great way for students to
            get involved in class. Speaking and listening, oral language, are at
            the foundation of literacy, and debate requires both speaking and
            listening. Debates are one way to increase both skills in the
            classroom.
          </p3>
        </div>
      </div>
      <div
        className="confluence-images"
        style={{ backgroundColor: "#b90124", marginBottom: "2rem" }}
      >
        {isMobile && (
          <div className="images-pa">
            <Image src={FutureLens} alt="" />
          </div>
        )}
        <div className="text-confluences">
          <h2 style={{ color: "#FFF" }}>Futurelens (Movie Making)</h2>
          <p3 style={{ color: "#FFF" }}>
            Filmmaking is a chance to live many lifetimes. It’s very important
            to recognize talent in all facets of filmmaking. Making a movie is
            such a lengthy and intense experience, so it’s wonderful to honor
            actors, directors, producers and all crew members who put so much
            hard work and passion into a project.
          </p3>
        </div>
        {!isMobile && (
          <div className="images-pa">
            <Image src={FutureLens} alt="" />
          </div>
        )}
      </div>
    </>
  );
}
