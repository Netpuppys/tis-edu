"use client";
import Header from "../globalComponents/Header/Header";
import Image from "next/image";
import HeaderCelebrationsImg from "../../public/Header/EventsHeader.png";
import React from "react";
import "../../styles/BeyondAcademics/EventsCelebration.css";
import { useMobile } from "../globalComponents/IsMobileContext";
import aashirwad from "../../public/Celebrations/aashirwad.webp";
import dahiHandi from "../../public/Celebrations/dahiHandi.webp";
import InterHouse from "../../public/Celebrations/InterHouse.webp";
import ChaiPeCharcha from "../../public/Celebrations/ChaiPeCharcha.webp";
import HouseFeast from "../../public/Celebrations/HouseFeast.webp";
import Dramatics from "../../public/Celebrations/dramatics.webp";
import Chandaryaan from "../../public/Celebrations/chandrayaan.webp";
import FacultySkill from "../../public/Celebrations/faculty.webp";
import Gaushala from "../../public/Celebrations/gaushala.webp";

export default function Events() {
  const { isMobile } = useMobile();

  return (
    <>
      <Header
        title={"Celebrations"}
        subtitle={
          "Unforgettable school events help in cultivating talent and building bonds."
        }
        headerImg={HeaderCelebrationsImg}
      />

      <div style={{ marginTop: "3rem" }} className="container-events">
        <div className="left-events">
          <Image src={aashirwad} alt="" />
        </div>
        {!isMobile && (
          <div
            style={{ borderRadius: "20px 20px 0px 0px" }}
            className="line-center-events"
          ></div>
        )}
        <div className="right-events">
          <h2>Ashirwad Ceremony</h2>
          <p3 style={{ width: "90%" }}>
            The one who seeks blessings from Maa Saraswati and elders, is
            blessed with intelligence and knowledge. TIS solemnised Ashirwad
            Ceremony for classes 10th and 12th. The underlying aim of the
            ceremony was to seek blessings from the supreme for the forthcoming
            Board Examinations and to motivate the students to come up with
            flying colours. The ceremony commenced with the worship of Mata
            Saraswati followed by the prayer Humko Shakti Dena. The students
            were given the traditional Tilak, stationery kit and sweets as a
            mark of Good Luck. The programme concluded with the Chairman
            sir&apos;s address.
          </p3>
        </div>
      </div>
      <div className="container-events">
        {isMobile && (
          <div className="left-events">
            <Image src={dahiHandi} alt="" />
          </div>
        )}
        <div className="right-events">
          <h2>Dahi Handi Celebration</h2>
          <p3 style={{ width: "90%" }}>
            The vibrant and lively festival of Janmashtami, celebrating the
            birth of Lord Shree Krishna, was marked with great fervour and
            enthusiasm at TIS, through the traditional Dahi Handi event.
            Students and staff came together to witness the thrilling event. The
            event lasted for an hour where students from all houses
            participated, showcasing their strength, coordination and teamwork.
            <br />
            <br />
            The event was not only about competition but also about unity and
            camaraderie among the students. Throughout the event, the safety of
            all participants was of utmost importance. Mattresses were
            strategically placed around the formation to ensure the well-being
            of every participant, reflecting the school’s commitment to the
            welfare of students.
          </p3>
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        {!isMobile && (
          <div className="left-events">
            <Image src={dahiHandi} alt="" />
          </div>
        )}
      </div>
      <div className="container-events">
        <div className="left-events">
          <Image src={InterHouse} alt="" />
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        <div className="right-events">
          <h2>Inter-House Folk Dance Competition</h2>
          <p3 style={{ width: "90%" }}>
            The Inter-House folk dance competition showcased dance forms from
            different parts and cultures of our country and they did it with
            immense dedication. The competition was held to highlight the
            diverse culture and traditions of rich country INDIA. It was judged
            by a panel of esteemed judges and choreographers, Mr, Naresh Shah,
            Ms. Isha Thakur and Mr. Michael John.
            <br />
            <br />
            The students gave us outstanding performances and definitely made
            the choice for the judges difficult. Congratulations to the winners
            and participants. Music department keeps it up always.
          </p3>
        </div>
      </div>
      <div className="container-events">
        {isMobile && (
          <div className="left-events">
            <Image src={ChaiPeCharcha} alt="" />
          </div>
        )}
        <div className="right-events">
          <h2>Chai Pe Charcha</h2>
          <p3 style={{ width: "90%" }}>
            The 34 cabinet members of Tula’s International School availed an
            opportunity to interact with director Mr Raunak Jain at semi formal
            platform to share their ideas and problems vis a vis academic
            session 23-24. The Cabinet members exuded confidence and promised to
            fulfil their responsibilities under the guidance and protocol of
            school policies. The icing on the cake was the sumptuous snacks
            served with cold beverages. With the director’s inspiring words and
            all authorities in attendance, the high tea concluded with a big
            smile written large on students&apos; faces.
          </p3>
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        {!isMobile && (
          <div className="left-events">
            <Image src={ChaiPeCharcha} alt="" />
          </div>
        )}
      </div>
      <div className="container-events">
        <div className="left-events">
          <Image src={HouseFeast} alt="" />
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        <div className="right-events">
          <h2>House Feast</h2>
          <p3 style={{ width: "90%" }}>
            The much awaited house fees took place at various venues. The event
            was a grand success and saw the participation of all the houses. The
            feast provided an opportunity for the members to come together to
            celebrate their achievements while also fostering the spirit of
            teamwork and cooperation. Highlights of the feast - Ribbon cutting
            ceremony, Tilak ceremony, HM Sir speech, Complements by juniors,
            games, music, stand up comedy, 12th batch students speech, food and
            cultural performances, etc. It was a vibrant evening and left many
            memorable moments.
          </p3>
        </div>
      </div>
      <div className="container-events">
        {isMobile && (
          <div className="left-events">
            <Image src={Dramatics} alt="" />
          </div>
        )}
        <div className="right-events">
          <h2>Dramatics Competition</h2>
          <p3 style={{ width: "90%" }}>
            The inter house drama competition held brought the acting skills of
            our talented students to the LimeLight. The panel of judges included
            Mr. Ravi Shah and Mr. Mukesh Kumar, both renowned actors of the
            Garhwali film industry. Everyone witnessed the shared effort and
            dedication put into each and every play.
            <br />
            <br />
            After all the participants presented their plethora of extraordinary
            talents, the results were announced to the audience full of
            anticipation. As the second runners up were the Spartans. The first
            runner up were the Titans. Finally the place was seized by the
            Athenas. Congratulations to all the actors.
          </p3>
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        {!isMobile && (
          <div className="left-events">
            <Image src={Dramatics} alt="" />
          </div>
        )}
      </div>
      <div className="container-events">
        <div className="left-events">
          <Image src={Chandaryaan} alt="" />
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        <div className="right-events">
          <h2>Chandrayaan by VR.</h2>
          <p3 style={{ width: "90%" }}>
            TIS heads of departments attended a pilot workshop presented by team
            of Mr. Lalit Chopra and Mr Priyank Agarwal, where practical virtual
            visit sessions were conducted in which teachers and students had a
            real virtual experience of landing of Chandrayaan 1 and 2 and also a
            physiology of human digestive system. The school is in the process
            of arranging a Virtual lab visit for its enthusiastic Science
            students in future.
          </p3>
        </div>
      </div>
      <div className="container-events">
        {isMobile && (
          <div className="left-events">
            <Image src={FacultySkill} alt="" />
          </div>
        )}
        <div className="right-events">
          <h2>Faculty Skill Development</h2>
          <p3 style={{ width: "90%" }}>
            Basic Mountaineering course at NIMAS, Dirang, a journey that started
            as a course and ended as a lifetime experience! Imagine yourself in
            the middle of Huge mountains with a bunch of co-mountaineers under
            the guidance of highly experienced Army personnel to train you. One
            can understand the amount of discipline and tough life it would come
            with. For me it was a roller coaster ride of emotions, beginning
            with the mindset that it will be a piece of cake for me to finish
            the course and I will have fun there. I started my training very
            enthusiastically. Although it was tougher than I thought it would
            be, it was all achievable in the first preparatory week but as we
            moved up from the base camp and started with the actual training
            truth bombs hit hard. Once stamina, endurance and more importantly
            the will power! We were at 10500 feet high, trekking over 15 to 20
            kgs rucksacks on our shoulders.
          </p3>
        </div>
        {!isMobile && <div className="line-center-events"></div>}
        {!isMobile && (
          <div className="left-events">
            <Image src={FacultySkill} alt="" />
          </div>
        )}
      </div>
      <div style={{ marginBottom: "3rem" }} className="container-events">
        <div style={{ paddingBottom: "3rem" }} className="left-events">
          <Image src={Gaushala} alt="" />
        </div>
        {!isMobile && (
          <div
            style={{ borderRadius: "0px 0px 20px 20px" }}
            className="line-center-events"
          ></div>
        )}
        <div style={{ paddingBottom: "3rem" }} className="right-events">
          <h2>Gaushala Visit at Rispana</h2>
          <p3 style={{ width: "90%" }}>
            TIS organised a visit to Gaushala at Rispana, Dehradun for students
            under IAYP program. This set off after their Academic session at
            11:30 a.m., and reaching the intended destination at around 1:00
            p.m. The place is home to 25 cows with generating proximity 60
            litres of milk everyday. More than half of which goes to poor people
            who cannot afford such necessities. The students got to know about
            what type of water is said to the cows and how they are prepared.
            Students got the opportunity to feed the cattle freshly prepared for
            order and water. It was indeed an exciting hands-on experience for
            all.
          </p3>
        </div>
      </div>
    </>
  );
}
