import React from "react";

import Header from "../../globalComponents/Header/Header";
import HeaderPastoralImg from "../../../public/Header/pastoralHeader.png";
import "../../../styles/BoardingLife/pastoral.css";
export default function PastoralCare() {
  const bannerText =
    "Our Pastoral Care ensures students' well-being, giving them a supportive environment for growth and development.";

  return (
    <>
      <Header
        title={"Pastoral Care"}
        subtitle={bannerText}
        headerImg={HeaderPastoralImg}
      />
      <p className="text-pastoral">
        The greatest strengths can be found not in the bricks and mortar that
        make up a building but in people’s relationships. Many people working
        together can indeed create a great school community. The Boarding School
        community encourages healthy relationships with one another. It helps
        develop friendships that will be sustained for life as friends
        transition from student to alumni – as these graduates support their
        past connections by watching each other’s successes as they build their
        own. <br />
        <br />
        Pastoral care is a sheer demonstration of concern for the growth and
        well-being of every student. It focuses on cultivating an environment
        and psychology that supports every student’s physical, social,
        intellectual, emotional, and spiritual development. It is a commitment
        to the broader school community in general.
        <br />
        <br /> At Tula’s International School, one of our core focuses is
        creating a space that feels like home for all our students. To achieve
        this, we always think outside the box. The facilities we can offer –
        areas such as classrooms, dorms and teacher’s residences – should
        provide comfort and relaxation for students at any given time.
        <br />
        <br /> The hostel is spacious and brightly lit so that each child will
        feel comforted whilst they are away from home. The sleeping arrangements
        are carefully planned to provide room for every child, while all can use
        recreational facilities. <br />
        <br />
        At TIS, we take pride in our prestigious Pastoral Care team. We provide
        valuable services such as; <br />
        <br />
        It is establishing a school culture that emphasises keeping each other
        safe, being aware of each other’s needs, and coming to the aid of others
        when necessary. <br />
        <br />
        Participating in outside activities together can combat feelings of
        isolation. <br />
        <br />I am keeping track of every student’s progress. Counselling
        students who are suffering from mental distress or loss.
      </p>
    </>
  );
}
