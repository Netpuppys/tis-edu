"use client";
import React from "react";
import Image from "next/image";
import Header from "../globalComponents/Header/Header";
import HeaderMusicImg from "../../public/Header/MusicHeader.png";
import "../../styles/About Tis/ourHistory.css";
import { useMobile } from "../globalComponents/IsMobileContext";
import music from "../../public/Music/Music.png";
import Arts from "../../public/Music/Arts.png";
import Foreignlanguages from "../../public/Music/ForeignLanguages.png";
import Trips from "../../public/Music/Trips.png";
function Music() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Beyond The Curriculum"}
        subtitle={
          "Skills for life aren't just taught in classrooms—they're discovered on stages, fields, and everywhere in between."
        }
        headerImg={HeaderMusicImg}
      />
      <p className="our-history-desc-p">
        At Tula’s International School, we believe in making learning an
        exciting journey full of discovery and fun. Our students dive into
        experiences that ignite their imagination, spark their curiosity, and
        open doors to new worlds. It's where creativity flows freely, and every
        moment is an opportunity to explore, grow, and have a blast along the
        way.
      </p>
      <div className="our-history-main">
        <Image src={music} alt="" />
        <div className="content-history">
          <h3>Music And Dance</h3>
          <h5>
            At Tula’s International School, one of the top residential schools
            in Dehradun, music is not regarded as a standalone subject but is
            incorporated into the curriculum itself. It is an integral part of
            every student’s life. The Music Academy at Tula’s offers students a
            wide array of opportunities in both music and dance. The school has
            well qualified teachers who teach students to play a variety of
            musical instruments, such as the guitar, congo drums, violin, sitar,
            keyboards, drums, harmonium, tabla, and to sing as well. Students
            are exposed to western as well as Indian classical dance forms
          </h5>
        </div>
      </div>
      <div className="our-history-main">
        {isMobile && <Image src={Arts} alt="" />}
        <div className="content-history">
          <h3>Art & Craft</h3>

          <h5>
            As one of the reputed CBSE schools in Dehradun, Tula’s has the only
            Art & Craft workstation of its kind in Uttarakhand. Called
            ‘Colours’, it continually strives to inspire its students to display
            their creativity under the capable guidance of art teachers.
            Students are exposed to different mediums for a wholesome education
            in the artistic sphere. Portrait painting, clay modeling, sketching,
            crafts, Madhubani painting, and creating sculptures are some of the
            creative pursuits that students enjoy doing during their art and
            craft classes.
          </h5>
        </div>
        {!isMobile && <Image src={Arts} alt="" />}
      </div>
      <div className="our-history-main">
        <Image src={Foreignlanguages} alt="" />
        <div className="content-history">
          <h3>Foreign Langauges</h3>
          <h5>
            At Tula&apos;s International School (TIS), we recognize the
            importance of foreign languages in today&apos;s globalized world.
            Alongside German, TIS also teaches French as part of our foreign
            language curriculum. This provides our students with a well-rounded
            linguistic education, enhancing their career prospects and personal
            growth. Students at the University of Mumbai&apos;s Department of
            German and French get a chance to pursue studies at German and
            Austrian Universities under many academic exchange programmes. A
            wide range of exchange programs exists for both school and
            university students between Germany, France, and many
            countries in the world.
          </h5>
        </div>
      </div>
      <div className="our-history-main" style={{ marginBottom: "2rem" }}>
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
      </div>
    </>
  );
}

export default Music;
