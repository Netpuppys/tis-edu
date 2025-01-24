"use client";
import React from "react";
import Image from "next/image";
import yellowLine from "../../../public/pictures/lineImg.png";
import "../../../styles/About Tis/headmasterStyle.css";
import HeaderHeadmasterIMg from "../../../public/Header/HeadmasterHeader.png";
import HeaderHeadmasterMobileIMg from "../../../public/Header/HeadmasterHeaderMobile.jpg";
import Header from "../../globalComponents/Header/Header";
import { useMobile } from "../../globalComponents/IsMobileContext";
const CarouselCard = ({ title, description }) => {
  return (
    <div className="carousel-items">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
function Headmaster() {
  const { isMobile } = useMobile();
  return (
    <>
      <Header
        title={"Headmaster’s Profile"}
        headerImg={HeaderHeadmasterIMg}
        headerImgMobile={HeaderHeadmasterMobileIMg}
        subtitle={
          "A headmaster shapes dreams, building a foundation for lifelong success"
        }
      />
      <div className="py-8 md:py-14">
        <h2 className="text-[clamp(20px,6.5vw,50px)] px-4 w-fit mx-auto md:text-[clamp(20px,2.5vw,50px)] text-center font-bold font-[Mirador800]">
          Mr. Raman <span className="text-[#b90124]">Koushal</span>
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
          className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-14 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)]"
        >
          Mr. Raman Koushal, an illustrious luminary in the domain of education,
          and a distinguished faculty member within the hallowed halls of our
          English department. Mr. Koushal, transcends the conventional role. He
          is a paragon of leadership, leading with the highest echelons of
          excellence. His unwavering devotion to our institution, its erudite
          students, and the erudite faculty, has been pivotal in sculpting the
          trajectory of our school. His leadership is characterized by an
          extraordinary fusion of visionary acumen, unwavering zeal, and a
          boundless commitment to unerring excellence. Under his sagacious
          tutelage, our school has consistently demonstrated preeminence across
          diverse academic domains.
          <br />
          <br /> Mr. Koushal himself stands adorned with a plethora of awards
          and accolades, a testament to his invaluable contributions to the
          sphere of education. His virtuosity in the English language and the
          nuanced tapestry of literature has greatly enriched the pedagogical
          voyage of our students, elevating him to the status of an exemplar for
          both the esteemed faculty and the burgeoning student body. As we
          commemorate Mr. Koushal’s seven years of indefatigable service, we
          eagerly anticipate an enduring legacy of his extraordinary
          stewardship. His ardor for the pursuit of knowledge and his
          indefatigable commitment to nurturing the forthcoming generation of
          leaders serve as a wellspring of inspiration to us all. Indeed, we are
          profoundly fortunate to have Mr. Raman Koushal at the helm, guiding us
          towards a future that is not only brighter but also enriched with
          enlightenment.
        </h6>
      </div>

      {/* <div className="carousel-containers">
        <CarouselCard
          title="#1"
          description=<>
            Ranked #1 Best
            <br /> Boarding School
            <br /> (Niche 2023 Best <br />
            High Schools)
          </>
        />
        <CarouselCard title="341" description="students" />
        <CarouselCard title="4:1" description="student:adult ratio" />
        <CarouselCard
          title="37%"
          description=<>
            of students receive
            <br /> financial aid
          </>
        />
      </div> */}
    </>
  );
}

export default Headmaster;
