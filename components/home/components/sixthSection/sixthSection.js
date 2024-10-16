"use-client";

import React, { useState } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import management from "../../../../public/Home/WhyTis/managementSchool.JPG";
import Campus from "../../../../public/Home/WhyTis/Campus.jpg";
import Expert from "../../../../public/Home/WhyTis/expertInstruction.jpg";
import Ratio from "../../../../public/Home/WhyTis/ratioStudent.jpg";
import Training from "../../../../public/Home/WhyTis/TrainingMethods.jpg";
import "../../../../styles/home/components/sixthSection/sixthSection.css";
import Image from "next/image";
export default function SixthSection() {
  const { isMobile } = useMobile();
  const cardsData = [
    {
      id: 0,
      image: Campus,
      heading: "CAMPUS",
      text: "At Tula's International School, our campus is designed to provide an enriching and holistic environment that nurtures the academic, social, and personal development of each student. Spread across lush green landscapes, our state-of-the-art facilities include modern classrooms, advanced science and computer labs, a well-stocked library, and diverse sports amenities.",
    },
    {
      id: 1,
      image: Expert,
      heading: "EXPERT INSTRUCTION",
      text: "At Tula's International School, we prioritise expert instruction to ensure our students receive the highest quality education. Our dedicated faculty comprises experienced educators and industry professionals who bring a wealth of knowledge and a passion for teaching to the classroom. By employing innovative teaching methods and personalised attention, our instructors create a dynamic learning environment that challenges and inspires students.",
    },
    {
      id: 2,
      image: Training,
      heading: "TRAINING METHODS",
      text: "At Tula's International School, we employ cutting-edge training methods that cater to the diverse learning styles of our students. Our approach integrates traditional teaching with modern techniques, including interactive digital tools, project-based learning, and experiential activities. We emphasise hands-on experiences and real-world applications, ensuring that students not only grasp theoretical concepts but also develop practical skills.",
    },
    {
      id: 3,
      image: Ratio,
      heading: "RATIO",
      text: "At Tula's International School, we maintain an optimal student-to-teacher ratio to ensure personalised attention and a supportive learning environment. By keeping class sizes small, our educators can provide individualised instruction, closely monitor each student's progress, and address their unique needs effectively.",
    },
    {
      id: 4,
      image: management,
      heading: "MANAGEMENT",
      text: "At Tula's International School, strong and visionary management is at the heart of our success. Our leadership team is dedicated to creating an educational environment that is both innovative and nurturing. By prioritising strategic planning, transparent communication, and continuous improvement, we ensure that our school remains at the forefront of educational excellence.",
    },
    {
      id: 5,
      image: management,
      heading: "Career Counselling",
      text: "TIS organizes various tests and exposes children to the opportunities to help them make the right subject choices. An effective career guidance program is designed for students to enable them to make effective decisions relating to their future. The students and parents are educated about admission procedures at various educational institutions to help them choose the right career for a brighter future.",
    },
    {
      id: 6,
      image: management,
      heading: "Food and Nutrition",
      text: "Tula’s International School is proud of its exquisite dining area. The food the school is served has been carefully planned with the assistance of a certified dietician to ensure that each day offers students an assortment of proteins, grains, fruits, and vegetables presented in delectable vegetarian dishes.",
    },
    {
      id: 7,
      image: management,
      heading: "The Infirmary",
      text: "The school has ample support services in place for its students to thrive both physically and mentally, including a Wellness Infirmary, equipped with everything that one may need to keep them healthy. Whether its physical or mental, if it needs medical attention, there are the right people here who care about your wellbeing so you don’t have to worry about anything other than being comfortable here.",
    },
    {
      id: 8,
      image: management,
      heading: "Encouraging All-Round Growth",
      text: "We provide an unmatched experience through rigorous academics, intense sports and extracurricular activities, and strong bonds among peers, juniors, and seniors. We encourage Holistic Education by monitoring children to follow natural interests and talents through our dedicated and expert teaching staff.",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(cardsData[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    const nextPage = (currentPage + 1) % cardsData.length;
    setCurrentPage(nextPage);
    setSelectedCard(cardsData[nextPage]);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage === 0 ? cardsData.length - 1 : currentPage - 1;
    setCurrentPage(prevPage);
    setSelectedCard(cardsData[prevPage]);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setSelectedCard(cardsData[pageIndex]);
  };

  return (
    <div id="7">
      <div className="sixth-section-main-div">
        <h2 className="title">
          Why <span>TIS?</span>
        </h2>
        <div className="contentWhyTIS">
          <div className="selected-card-container">
            <p className="focus">A FOCUS ON...</p>

            <div className="heading-text">
              <p className="selected-card-heading">{selectedCard.heading}</p>
              <p className="selected-card-text">{selectedCard.text}</p>
            </div>
          </div>

          <div className="image-WHyTIS">
            <Image
              className="image-card"
              src={selectedCard.image}
              alt="selected-card"
            />
          </div>
        </div>
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevPage}>Previous</button>
        {cardsData.map((_, index) => (
          <button
            key={index}
            className={currentPage === index ? "active" : ""}
            onClick={() => handlePageClick(index)}
            style={{
              display: Math.abs(currentPage - index) <= 1 ? "inline" : "none",
            }}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}
