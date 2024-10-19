"use client";

import React, { useRef, useState, useEffect } from "react";
import { useMobile } from "../../../globalComponents/IsMobileContext";
import invCommaIcon from "../../../../public/icons/commas.svg";
import "../../../../styles/home/components/parentsReviews/ParentsReviews.css";
import previousIcon from "../../../../public/pictures/previous.png";
import nextIcon from "../../../../public/pictures/next.png";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import parent from "../../../../public/pictures/parents.png";

function ParentsReviews() {
  const { isMobile } = useMobile();
  const [activeIndex, setActiveIndex] = useState(1); // Set default index to 1

  const parents = [
    {
      parent: parent,
      path: "https://player.vimeo.com/video/1020966853?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      parent: parent,
      path: "https://player.vimeo.com/video/1020966607?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      parent: parent,
      path: "https://player.vimeo.com/video/1020966777?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      parent: parent,
      path: "https://player.vimeo.com/video/1020966663?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
  ];

  const reviews = [
    "Tula's International School has truly exceeded our expectations. The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child's growth. We are grateful for the personalized attention and the care the school offers.",
    "We have seen a remarkable improvement in our child's confidence and skills since joining Tula's. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.",
    "Our experience at Tula's International School has been outstanding. The nurturing environment and the attention given to each student’s individual progress have made a world of difference in our child's learning journey. The school's commitment to excellence is evident.",
    "The caring approach of the teachers at Tula's has been instrumental in our child's development. Their personalized teaching methods have helped our child excel academically and socially. We couldn't be happier with the school's dedication to each student's success.",
  ];

  const swiperRef = useRef();

  // Update the review text based on the active index of the swiper
  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.realIndex);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex, 0); // Set default index to 1 on component mount
    }
  }, [swiperRef]);

  return (
    <div
      className="w-full flex flex-col md:flex-row justify-center items-center min-h-[75vh]"
      id="11"
    >
      <div className="w-full md:w-1/2 px-[7%]">
        <div className="w-full flex justify-center items-end">
          <Image
            src={invCommaIcon}
            alt=""
            className="w-[8%] -mb-[1vh] md:-mb-[3vh]"
          />
          <h2 className="w-[92%] text-center pb-[1.5vh] md:pb-[3vh] border-[#b90124] border-b leading-tight text-[8vh] font-[900] font-[TTChocolatesBold]">
            From The <br />
            <span className="text-[#b90124] font-[Mirador800]">Parents</span>
          </h2>
        </div>
        <h3
          className="pt-[5vh] text-[clamp(20px,1.5vw,45px)]"
          style={{ fontFamily: "TT Chocolates" }}
        >
          {reviews[activeIndex]}
        </h3>
      </div>
      <div className="w-full md:w-1/2 py-8 md:py-0 min-h-[60vh] md:min-h-[85vh] relative flex flex-col items-center justify-center">
        <div className="w-[50%] h-full absolute right-0 bg-[#b90124] rounded-s-[70px]"></div>
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          // slidesPerView={isMobile ? 1.3 : 3}
          slidesPerView={isMobile ? "auto" : 4}
          centeredSlides={true}
          initialSlide={1} // Set the default active slide to index 1
          onSlideChange={handleSlideChange}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
        >
          {parents.map((parent, index) => (
            <div className="rounded-3xl overflow-hidden" key={index}>
              <SwiperSlide>
                {/* <Image
                  className="h-fit w-fit aspect-[9/16] mx-auto"
                  src={parent.parent}
                  alt=""
                /> */}
                <div className="h-fit w-fit aspect-[9/16] mx-auto">
                  <div className="w-full h-full object-cover border border-black rounded-3xl overflow-hidden">
                    <iframe
                      src={parent.path}
                      // frameBorder="0"
                      // allowfullscreen
                      className="w-full h-full object-cover bg-transparent"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ParentsReviews;
