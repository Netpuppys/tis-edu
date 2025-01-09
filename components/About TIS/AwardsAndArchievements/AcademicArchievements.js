"use client";
import React from "react";
import Image from "next/image";
import Header from "../../globalComponents/Header/Header";
import headerAcademicImg from "../../../public/Header/AwardsHeader.png";
import headerAcademicImgMobile from "../../../public/Header/AwardsHeaderMobile.png";
import { useMobile } from "../../globalComponents/IsMobileContext";
import Image2023 from "../../../public/Awards/2023.png";
import Image2022 from "../../../public/Awards/2022.png";
import Image2019 from "../../../public/Awards/2019.png";
import Image2018 from "../../../public/Awards/2022.png";
import Image2017 from "../../../public/Awards/2022.png";
import Image2016 from "../../../public/Awards/2019.png";
import Image2015 from "../../../public/Awards/2015.png";
import Image2014 from "../../../public/Awards/2022.png";
import "../../../styles/About Tis/AwardsAndArchievement.css";
export default function AcademicArchievements() {
  const { isMobile } = useMobile();
  const subTitle =
    "Tula's International School has earned recognition through various awards, highlighting excellence in education and leadership.";

  return (
    <>
      <Header
        title={"Awards and Achievements"}
        subtitle={subTitle}
        headerImg={headerAcademicImg}
        headerImgMobile={headerAcademicImgMobile}
      />
      <div className="award-desc">
        <p className="award-desc-p">
          Tula&apos;s International School boasts numerous awards and
          achievements, highlighting our commitment to excellence in academics,
          sports, and extracurricular activities.
          <br />
          <br />
          Our students consistently excel in national and international
          competitions, reflecting the high standards of education and
          dedication at Tula&apos;s International School.
        </p>

        <div className="red-div-year"> 2023</div>
        <div className="awards-content">
          <Image src={Image2023} alt="" />
          <div className="content-awards">
            <ul>
              <li>
                Mr. Raunak Jain, was Awarded as &quot;Educational Reformer of
                the Year&quot; by Uttarakhand Swarnim Award 2023.
              </li>

              <li>
                Mr. Raunak Jain, was Awarded as &quot;Uttarakhand Icon
                Awards&quot; by Satpal Maharaj Minister, Uttarakhand, Tourism
                Department 2023.
              </li>

              <li>
                Headmaster, Tula&apos;s International School Mr. Raman Koushal
                was Awarded as &quot;Top 50 Best Educator Award&quot; by
                Education Today 2023.
              </li>

              <li>
                Headmaster Tula&apos;s International School Mr. Raman Koushal
                was Awarded as &quot;The Top School Educator&quot; award For
                Excellence In Holistic Teaching Practices by Indian School
                Awards 2023.
              </li>

              <li>
                Mr. Sangeet Bhardwaj, TOP 100 Influential Educationist in Indian
                Education by Indian Education Awards 2023.
              </li>
            </ul>
          </div>
        </div>
        <div className="red-div-year"> 2022</div>
        <div className="awards-content">
          {isMobile && <Image src={Image2022} alt="" />}
          <div className="content-awards">
            <ul>
              <li>
                Tula&apos;s International School has been Ranked No. 4 in India,
                No.2 in Uttarakhand & Ranked no.1 in Dehradun in a survey
                conducted by Education Today in 2021-22.
              </li>

              <li>
                Principal of Tula&apos;s International School has been listed
                under 50 Effective Principals 2022, by Education Today in 2022.
              </li>

              <li>
                Tula&apos;s International School has been awarded as the Best
                Co-ed Boarding School in Dehradun and No.5 in North India by The
                Times of India.
              </li>
            </ul>
          </div>
          {!isMobile && <Image src={Image2022} alt="" />}
        </div>
        <div className="red-div-year"> 2019</div>
        <div className="awards-content">
          <Image src={Image2019} alt="" />
          <div className="content-awards">
            <ul>
              <li>
                Ranked No.5 Co-Educational Boarding School in North India by
                Times of India 2019
              </li>

              <li>
                Ranked No.7 Co-Educational Boarding School in India by Education
                Today 2019.
              </li>

              <li>Certified as Great Indian Schools by Forbes.</li>

              <li>Best residential school in 2019 by ISA.</li>

              <li>
                Tula&apos;s International School is awarded Best Boarding School
                in 2019 among 25 Schools in Dehradun.
              </li>

              <li>
                Tulas International School won International School Award, India
                2019 for Best Residential School.
              </li>

              <li>
                Tula&apos;s Taekwondo Team 2 Students had participated in
                National Taekwondo Championship 2019 on 18 th May 2019.
                Hyderabad where Gunjan Lamba secure 3 rd Rank in All India
                Taekwondo category in under 14 age group 55 kg.
              </li>

              <li>
                Tula&apos;s Skater&apos;s won 2 Gold, 2 Silver and 2 Bronze
                Medals in State Inter- School Skating Championship held in GRD
                Academy on 21 st April, 2019.
              </li>

              <li>
                2 Gold, 2 Silver and 2 Bronze Medals in Inter School Taekwondo
                Tournament DPSG Kalegoan on 26th April 2019.
              </li>

              <li>
                Tula&apos;s Organised 1 st Tula&apos;s International school
                shooting Tournament 2019 where Approx. 73 Shooter had
                participated. (Unison World School, Selaqui International
                School, DPSG Selaqui, Mission Olympic Shooting Academy) where
                Tula&apos;s Won Overall Best Boys Shooting School.
              </li>

              <li>
                Tula&apos;s Organised 2 nd Tula&apos;s 3 on 3 Basket Ball U-18
                Tournament where 13 Team had participated. And Tula&apos;s was
                Runner Up and won 2100/- and trophy
              </li>
            </ul>
          </div>
        </div>
        <div className="red-div-year"> 2018</div>
        <div className="awards-content">
          {isMobile && <Image src={Image2018} alt="" />}
          <div className="content-awards">
            <ul>
              <li>
                Ranked No.8 in India, No.2 in Uttarakhand, and No.1 in Dehradun
                in a survey conducted by Education Today in 2018 for exemplary
                contribution to the education field.
              </li>

              <li>
                &quot;Best Residential School in Uttarakhand 2018&quot; for
                outstanding and exemplary contribution towards education and was
                presented by Trivendra Singh Rawat (Honourable Chief Minister of
                Uttarakhand)
              </li>

              <li>
                &quot;Best International Boarding School in Uttarakhand&quot; by
                TV100 in May 2018. The award was presented by Shri Shyam Jaju
                National Vice President BJP
              </li>

              <li>
                &quot;Best Boarding School in Uttarakhand&quot; By Golden star
                Award the award was presented by Kirron Kher( Member of
                Parliament and Actor)
              </li>
            </ul>
          </div>
          {!isMobile && <Image src={Image2018} alt="" />}
        </div>
        <div className="red-div-year"> 2017</div>
        <div className="awards-content">
          <Image src={Image2017} alt="" />
          <div className="content-awards">
            <ul>
              <li>
                &quot;Best International Boarding School in Uttarakhand&quot;,
                one of the India&apos;s Most Prominent Award 2017 organized by
                Merit Awards & Market Research Pvt. Ltd. The award was presented
                by Chetan Bhagat (Renowned author and actor).
              </li>

              <li>
                Awarded with &apos;A&apos; grade in Evidence of Assessment (EOA)
                by CBSE.
              </li>

              <li>
                &quot;University of York&quot; from London has visited the
                school for its foreign programs.
              </li>
            </ul>
          </div>
        </div>
        <div className="red-div-year"> 2016</div>
        <div className="awards-content">
          {isMobile && <Image src={Image2016} alt="" />}
          <div className="content-awards">
            <ul>
              <li>
                Mrs. Shalini Sharma, Principal of Tula&apos;s International has
                received an appreciation letter from the Ministry of HRD
                Government India for the commendable academic performance of
                class XII students in the year 2016.
              </li>

              <li>
                TIS Ranked as No 1 boarding school in Uttarakhand for
                &quot;Infrastructure Provisions&quot; by Education Today in
                2016.
              </li>

              <li>
                Tula&apos;s hosted the second International Film Festival on 3rd
                October 2016. The second day marked interaction with the artists
                Pooja Bhatt, Jimmy Shergill, Sushma Seth, Divya Dutta, Hemant
                Pandey and Nawab Shah.
              </li>

              <li>
                The Chairman of Tula&apos;s Group was awarded by Dr. APJ Abdul
                Kalam award in 2016.
              </li>

              <li>
                Awarded with &apos;A&apos; grade in Evidence of Assessment (EOA)
                by CBSE.
              </li>

              <li>
                Mohit Redhu and Ankit Nain won 1 gold, 1 silver and 3 bronze
                under various categories of Show Jumping, Dressage & Eventing at
                Equestrian sports (Excellentia Horse Show) held at Delhi.
              </li>

              <li>
                Parneet Grewal and Ansh Balana as a team got first prize along
                with gifts from the Informatics Singapore out of a total 5000
                participants (open competitions of schools & colleges) in USP
                the Survivor 4 held at Dehradun.
              </li>

              <li>
                Rishabh Jain, Devin Gupta and Kushagra Aggarwal, students of
                Tula&apos;s International School were felicitated for having
                qualified the 2nd level Olympiad exam in India. Devin Gupta
                received a merit Certificate for 19th SOF National Science
                Olympiad, Rishabh Jain for 16th SOF National Cyber Olympiad and
                Khuhagra Aggarwal for 10th SOF National Mathematics Olympiad.
              </li>
            </ul>
          </div>
          {!isMobile && <Image src={Image2016} alt="" />}
        </div>
        <div className="red-div-year"> 2015</div>
        <div className="awards-content">
          <Image src={Image2015} alt="" />
          <div className="content-awards">
            <ul>
              <li>
                Devin Gupta got selected for National Basketball Championship
                under 14 category.
              </li>

              <li>
                The Chairman of Tula&apos;s Group, Sunil Kumar Jain was awarded
                by &quot;Sardar Vallabh Bhai Patel Rashtriya Ekta
                Puruskar.&quot;
              </li>

              <li>
                Executive Director of Tula&apos;s Group, Silky Jain was awarded
                &quot;Skilltree Education Evangelist&quot; by Skilltree.
              </li>

              <li>
                Executive Director of Tula&apos;s Group, Silky Jain was awarded
                &quot;Youngest Female Entrepreneur&quot; to have Leadership
                certification from Oxford University London.
              </li>

              <li>
                Khushi Singhania of class VII qualified from State level to
                National level and got a scholarship of Rupees 10,000/-
                in National Science Olympiad.
              </li>

              <li>
                Mohit Rajput of class XI won Gold Medal under-16 category and
                Kuldeep Singh of class XII notched up Silver Medalin Indo-Bhutan
                Taekwondo Championship under-17 category held in Bhutan.
              </li>

              <li>
                Pema Choedon of Class XII, got a golden chance to meet the
                President of India &quot;Pranab Mukherjee&quot; at Rashtriya
                Bhawan, New Delhi under the Scout & Guide training program.
              </li>

              <li>
                Awarded with &apos;A&apos; grade in Evidence of Assessment (EOA)
                by CBSE.
              </li>
            </ul>
          </div>
        </div>
        <div className="red-div-year"> 2014</div>
        <div className="awards-content" style={{ marginBottom: "2rem" }}>
          {isMobile && <Image src={Image2014} alt="" />}
          <div className="content-awards">
            <ul>
              <li>
                Tula&apos;s International School started its own CSR Initiative
                (Awareness to Stop Child Labour) by name &apos;The
                Tortoise&apos; under which students visited Sherpur village for
                creating awareness in the society to Stop Child Labor.
              </li>

              <li>
                Kuldeep Singh of class XI won 3rd Position in National Taekwondo
                Championship held at Nepal.
              </li>
            </ul>
          </div>
          {!isMobile && <Image src={Image2014} alt="" />}
        </div>
      </div>
    </>
  );
}
