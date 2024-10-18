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
      path: "https://youtube.com/shorts/p85D6uf0HzU?feature=shared",
    },
    {
      parent: parent,
      path: "https://youtube.com/shorts/p85D6uf0HzU?feature=shared",
    },
    {
      parent: parent,
      path: "https://youtube.com/shorts/p85D6uf0HzU?feature=shared",
    },
  ];

  const reviews = [
    "Review 1",
    "What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success.",
    "Review 3",
    "Review 4",
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
          slidesPerView={isMobile ? "auto" : 3}
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
                <Image
                  className="h-fit w-fit aspect-[9/16] mx-auto"
                  src={parent.parent}
                  alt=""
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ParentsReviews;
