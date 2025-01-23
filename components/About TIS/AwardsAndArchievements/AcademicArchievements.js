"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import headerAcademicImg from "../../../public/Header/AwardsHeader.png";
import headerAcademicImgMobile from "../../../public/Header/AwardsHeaderMobile.png";
import { useMobile } from "../../globalComponents/IsMobileContext";
import lineImg from "../../../public/pictures/lineImg.png";
import Image2023 from "../../../public/Awards/2023.png";
import Image2022 from "../../../public/Awards/2022.png";
import Image2019 from "../../../public/Awards/2019.png";
import Image2018 from "../../../public/Awards/2018.png";
import Image2017 from "../../../public/Awards/2017.png";
import Image2016 from "../../../public/Awards/2016.png";
import Image2015 from "../../../public/Awards/2015.png";
import Image2014 from "../../../public/Awards/2014.png";
import "../../../styles/About Tis/AwardsAndArchievement.css";
export default function AcademicArchievements() {
  const { isMobile } = useMobile();
  const subTitle =
    "We have won various awards for excellence in education and leadership";
  const data = [
    {
      title: "2023",
      image: Image2023,
      description: (
        <ul className="list-disc text-[#b90124] ml-5 ">
          <li>
            <strong>Mr. Raunak Jain:</strong>
            <br />
            <span className="text-black">
              Awarded <strong>"Educational Reformer of the Year"</strong> by
              Uttarakhand Swarnim Award.
              <br />
              Honored with <strong>"Uttarakhand Icon Awards"</strong> by Satpal
              Maharaj, Minister of Tourism, Uttarakhand.
            </span>
          </li>
          <li>
            <strong>Mr. Raman Koushal (Headmaster):</strong>
            <br />
            <span className="text-black">
              Listed among the <strong>"Top 50 Best Educators" </strong>by
              Education Today.
              <br />
              Awarded <strong>"The Top School Educator" </strong> for Excellence
              in Holistic Teaching Practices by Indian School Awards.
            </span>
          </li>
          <li>
            <strong>Mr. Sangeet Bhardwaj:</strong>
            <br />
            <span className="text-black">
              Recognized as one of the{" "}
              <strong>
                "Top 100 Influential Educationists in Indian Education"
              </strong>{" "}
              by Indian Education Awards.
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "2022",
      image: Image2022,
      description: (
        <>
          Ranked <strong>No.4 in India, No.2 in Uttarakhand,</strong> and{" "}
          <strong>No.1 in Dehradun</strong> in a survey conducted by Education
          Today (2021-22).
          <br />
          Principal of Tula's International School listed under{" "}
          <strong>"50 Effective Principals"</strong> by Education Today.
          <br />
          Awarded <strong>
            "Best Co-ed Boarding School in Dehradun"
          </strong> and{" "}
          <strong>No.5 in North India by The Times of India.</strong>
        </>
      ),
    },
    {
      title: "2019",
      image: Image2019,
      description: (
        <ul className="list-disc  ml-5 ">
          <li>
            Ranked{" "}
            <strong>No.5 Co-Educational Boarding School in North India</strong>{" "}
            by The Times of India.
          </li>
          <li>
            Ranked <strong>No.7 Co-Educational Boarding School in India</strong>{" "}
            by Education Today.
          </li>
          <li>
            Certified as <strong>"Great Indian Schools"</strong> by Forbes.
          </li>
          <li>
            Awarded <strong>"Best Residential School"</strong> by Indian School
            Awards (ISA).
          </li>
          <li>
            Recognized as <strong>"Best Boarding School in Dehradun"</strong>{" "}
            among 25 schools.
          </li>
          <li>
            Won the <strong>"International School Award, India"</strong> for
            Best Residential School.
          </li>
          <li className="text-[#b90124]">
            <strong>Sports Achievements:</strong>
          </li>
          2 Gold, 2 Silver, and 2 Bronze medals in the State Inter-School
          Skating Championship.
          <br />
          Medals in Inter-School Taekwondo Tournament at DPSG Kalegoan (2 Gold,
          2 Silver, 2 Bronze).
          <br />
          Hosted the{" "}
          <strong>1st Tula's International Shooting Tournament,</strong> where
          Tula's won Overall Best Boys Shooting School.
          <br />
          Organized the{" "}
          <strong>2nd Tula's 3-on-3 Basketball U-18 Tournament,</strong>{" "}
          securing runner-up and winning a cash prize of ₹2100.
          <br />
        </ul>
      ),
    },
    {
      title: "2018",
      image: Image2018,
      description: (
        <>
          Ranked <strong>No.8 in India, No.2 in Uttarakhand,</strong> and{" "}
          <strong>No.1 in Dehradun</strong> in a survey by Education Today.
          <br />
          Awarded
          <strong>"Best Residential School in Uttarakhand"</strong> by Golden
          Star Awards, presented by Kirron Kher.
          <br />
          Recognized as{" "}
          <strong>
            "Best International Boarding School in Uttarakhand"
          </strong>{" "}
          by TV100, presented by Shri Shyam Jaju, National Vice President BJP.
        </>
      ),
    },
    {
      title: "2017",
      image: Image2017,
      description: (
        <>
          Honored as the{" "}
          <strong>"Best International Boarding School in Uttarakhand"</strong>{" "}
          by Merit Awards, presented by Chetan Bhagat.
          <br />
          Rated <strong>‘A’ Grade in Evidence of Assessment (EOA)</strong> by
          CBSE.
        </>
      ),
    },
    {
      title: "2016",
      image: Image2016,
      description: (
        <>
          <strong>Ranked No.1 Boarding School in Uttarakhand</strong> for
          Infrastructure Provisions by Education Today.
          <br />
          Hosted the <strong>2nd International Film Festival,</strong> featuring
          artists like Pooja Bhatt, Jimmy Shergill, Divya Dutta, and Nawab Shah.
          <br />
          Chairman of Tula's Group received the{" "}
          <strong>Dr. APJ Abdul Kalam Award.</strong>
          <br />
          Students won multiple medals in Equestrian Sports (Show Jumping,
          Dressage, Eventing) at the Excellentia Horse Show in Delhi.
          <br />
          <strong className="text-[#b90124]">
            Students excelled in Olympiad exams:
          </strong>
          <ul className="list-disc ml-5">
            <li>Devin Gupta (19th SOF National Science Olympiad).</li>
            <li>Rishabh Jain (16th SOF National Cyber Olympiad).</li>
            <li>Kushagra Aggarwal (10th SOF National Mathematics Olympiad).</li>
          </ul>
        </>
      ),
    },
    {
      title: "2015",
      image: Image2015,
      description: (
        <>
          Chairman Sunil Kumar Jain awarded the{" "}
          <strong>"Sardar Vallabh Bhai Patel Rashtriya Ekta Puruskar."</strong>
          <br />
          Executive Director Silky Jain was recognized as the{" "}
          <strong>"Youngest Female Entrepreneur"</strong> with leadership
          certification from Oxford University.
          <br />
          <strong className="text-[#b90124]">Sports Achievements:</strong>
          <ul className="list-disc ml-5">
            <li>
              Gold and Silver medals in Indo-Bhutan Taekwondo Championship.
            </li>
            <li>National Basketball Championship (Under-14).</li>
          </ul>
          Pema Choedon (Class XII) met{" "}
          <strong>President Pranab Mukherjee</strong> under the{" "}
          <strong>Scout & Guide training program.</strong>
        </>
      ),
    },
    {
      title: "2014",
      image: Image2014,
      description: (
        <>
          Launched CSR initiative <strong>"The Tortoise"</strong> to raise
          awareness against child labor.
          <br />
          Kuldeep Singh (Class XI) secured{" "}
          <strong>
            3rd position in the National Taekwondo Championship
          </strong>{" "}
          held in Nepal.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Awards and Achievements"}
        subtitle={subTitle}
        headerImg={headerAcademicImg}
        headerImgMobile={headerAcademicImgMobile}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] py-8 md:py-14 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
      >
        Tula&apos;s International School boasts numerous awards and
        achievements, highlighting our commitment to excellence in academics,
        sports, and extracurricular activities. Our students consistently excel
        in national and international competitions, reflecting the high
        standards of education and dedication at Tula&apos;s International
        School.
      </h6>
      <h3
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="text-[#B90124] mx-auto w-fit font-semibold text-center text-[clamp(15px,7.5vw,60px)] md:text-[clamp(20px,2.5vw,50px)]"
      >
        Achievements of Tula's International School
        <Image
          src={lineImg}
          alt=""
          className="mx-auto md:ml-auto md:mr-0 w-[50%] md:w-fit"
        />
      </h3>
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
              className={`w-full md:w-[30%] pt-8 md:py-14 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <Image
                src={data.image}
                alt=""
                className={`w-full h-full rounded-xl md:rounded-2xl`}
              />
            </div>
            <div
              className={`w-full md:w-[55%] py-8 md:py-14 h-full ${
                index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
              }`}
            >
              <h2 className="font-[TTChocolatesBold] text-[#b90124] font-semibold text-[25px] md:text-[clamp(20px,2vw,50px)]">
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
          </div>
        ))}
      </div>
    </>
  );
}
