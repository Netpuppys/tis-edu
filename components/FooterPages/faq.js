"use client";
import React, { useState } from "react";
import Header from "../globalComponents/Header/Header";
import "../../styles/FooterPages/faq.css";
import lineImg from "../../public/pictures/lineImg.png";
import HeaderFAQImg from "../../public/Header/WithdrawalHeader.png";
import { FaLongArrowAltDown } from "react-icons/fa";
import Image from "next/image";
export default function FAQ() {
  const questions = [
    "What is the procedure to get admission in School?",
    "What does “the modern gurukul” means?",
    "Which Board is the school affiliated to?",
    "What is TIS associated with?",
    "What sports facilities do you have? My child likes to play a particular sports - is there any coaching facility?",
    "What extracurricular activities are there for students?",
    "What makes TIS different from other schools?",
    "What is the average class size?",
    "What kind of food do you provide?",
    "How about the hostels for girls/boys?",
    "How frequently can the parents meet their wards?",
    "What is the teacher student ratio?",
    "How can you assure about the security of my child?",
    "How far is the school from Railway station/Airport?",
    "What are the International Languages offered? Is it compulsory or optional?",
    "How are parents informed about the progress of their ward?",
    "What arrangements have you made for sick students?",
    "Do you have qualified teachers? How do you appoint the teachers?",
    "How big is the school and what infrastructure has been provided?",
    "How do the students communicate with their parents? What can the parents do if due to some emergency they need to speak to their wards?",
    "Is there any arrangement for pickup and drop of students?",
  ];

  const answers = [
    <>
      The session commences in the month of April for grades from V to IX and
      XI. Admission to the school is open for all boys and girls between the age
      of 8 to 16 irrespective of their religion, caste or nationality. The
      registration needs to be done first; registered candidates will appear for
      a written test in the month of Jan/Feb. The written test will be based on
      the syllabus of the class the child is currently in. On the clearance of
      the written exam, there will be an interaction of the parents and the
      child with the Principal. A letter of admission will be issued thereafter
      to the selected candidates. Documents are required to be furnished at the
      time of evaluation, followed by submission of fees.
      <br />
      Note: Announcement of dates & syllabus will be updated on the website
    </>,
    <>
      Modern Gurukul is a concept wherein the students go to their gurus to
      obtain knowledge through digital mediums. The teachers in the Tula’s
      International are regarded as Gurus who put all their efforts in giving a
      shape to the future of the student. We focus on the Mind, body and soul,
      along with Moral values, traditions, spiritual, and ethics as they teach
      important values and ideas, manners and values which help our students in
      their future life.
      <br />
      <br />
      TIS believe that schooling should not only ensure the good grades but also
      the overall development of a child into a good human being. Tula’s
      International focus on the major parts of Gurukul education system –
      Discipline, Creativity, Right attitude, Empathy, and strong moral values.
      The concept of Modern Gurukul in the campus covers all fields of life and
      put great efforts in creating young minds with ethics and humanity among
      the students. TIS create an environment where students can learn various
      mysteries of life by the gurus. The beauty and simplicity of the Gurukul
      system is knit together with modern facilities.
    </>,
    <>
      The school is affiliated to Central Board of Secondary Education, New
      Delhi. Proposed – International Baccalaureate School,
      <br />
      <br />– Cambridge International Examinations Board.
    </>,
    <>
      TIS is associated with the
      <br />
      <br />
      TRINITY COLLEGE LONDON – offers an unrivalled choice of qualifications for
      students and teachers of speech and drama subjects, at all levels of
      experience and ability, designed to encourage the progressive development
      of integrated performance and communication skills over time. Study
      Strands include speech and drama, individual acting skills, Shakespeare,
      communication skills, Musical Theatre and Performance Arts.
      <br />
      <br />
      MUN (Model United Nations) – is an educational simulation which students
      learn about diplomacy, relations and the Nations. MUN involves and teaches
      – public speaking, debating and writing skills in addition to thinking,
      teamwork and leadership abilities. TIS’s MUN is organised at inter school
      level.
      <br />
      <br />
      IAYP (International Award for Young People) – TIS is a member of IAYP,
      also known as Duke of Edinburgh’s Award. The aim of this program is to
      motivate young people aged between 14 and 25 years to involve in voluntary
      self development activities. The award consists of four mandatory
      sections: Service, Adventurous Journey, Skills and Physical Recreation.
      There are three levels of award- Bronze, Silver award and Gold.
      <br />
      <br />
      LION’S CLUB – It gives young people opportunity to serve their communities
      and make a positive impact. They offer a great way to have fun, make new
      friends and develop valuable leadership skills. The young leo’s act as
      project organizer, time manager and team leader. We at Tula’s are creating
      awareness in the nearby villages about social issues like educating girl
      child and say no to drugs.
    </>,
    <>
      The sports facilities offered at TIS are unprecedented and world class
      like Football (an inhouse academy aided by national level football field),
      Pool (where regular classes for students are held that helps them to focus
      and improve concentration), Skating arena, Cycling, 8 Layered Synthetic
      Basketball Court, two Squash Courts (approved by WSF), an Indoor Wooden
      Badminton Court (approved by Badminton World Federation), an 8 Layered
      Synthetic Lawn Tennis Court (approved by International Tennis Federation),
      Cricket with Practising Net (Net-practice is held daily under the watchful
      eye of the cricket coach), a Volleyball Court, Taekwondo, Table Tennis and
      many more. Upcoming is an all-weather swimming pool of 25m*15m (half
      Olympic size) with a Jacuzzi. Students are trained by experienced coaches
      and staffs that are handpicked in helping developing skills among the
      students.
    </>,
    <>
      <ul>
        <li>
          Potter’s Wheel/Clay Modeling: Thinking and giving shapes to one’s
          imagination using clay.
        </li>
        <li>
          Shutterbug/Photography: We help students study and explore the
          colourful field of photography.
        </li>
        <li>
          Flamingo /Dance: The students dance to their heart’s content and learn
          various dance forms.
        </li>
        <li>
          Khana Khazana/Cookery: Our students experiment and evolve different
          recipes.
        </li>
        <li>
          Raga Rocks/Music At TIS, music is not regarded as a standalone subject
          but is incorporated in the curriculum itself and is an integral part
          of every student’s life.
        </li>
        <li>
          The Circuit Club/Electronics: The students construct simple to complex
          projects patiently during the activity period.
        </li>
        <li>
          Bookworm/Book reading: Students meet prominent authors like Chetan
          Bhagat, Ruskin Bond, Bhaavna Arora and many more to get inspired.
        </li>
        <li>
          Vibgyor/Art and Craft: Students are exposed to different mediums of
          art and craft for exploring their creative side.
        </li>
        <li>
          Gulmohar/Nature: Students work diligently to see that the plants and
          trees in the campus are well protected.
        </li>
        <li>
          Robotics Club: The Robotics Club encourage the students to participate
          in Robotics competitions which are held at Technical Fests.
        </li>
        <li>
          Astronomy Club: TIS attempts to bring about an interest and awareness
          in the field of Astronomy and Space Research through Astronomy club.
        </li>
        <li>
          Horse Riding: TIS is associated with Equestrian Federation of India,
          and we are proud to offer one of the best horse riding arenas.
        </li>
        <li>
          Gym: An hour of physical activity each school day allows students to
          be active and therefore burn calories, build muscle and work out
          stress.
        </li>
      </ul>
    </>,
    <>
      The name “the modern Gurukul” itself makes us different from other
      schools. TIS is a modern school with old ethics, values but with modern
      facilities, infrastructure, International sports facilities and many more.
      Only in TIS one can find International Film Festivals organised for our
      students. We have a concept of “Student Council” where meetings are
      organized with the teaching staff and principal, and with everybody’s
      agreement rules are formed. TIS is an inclusive and collaborative learning
      environment, which focuses on the overall development of the child. By
      providing state-of-the-art learning facilities, TIS enables students to
      pursue well-rounded academic excellence and recognizes that besides
      academics, good learning is also about enjoying the experience of life as
      a whole through the arts, athletics, outreach and much more.
    </>,
    <>
      Average class size is 24 students in senior section and 12 students in
      junior section.
    </>,
    <>
      We provide healthy and purely vegetarian food. The menu is set by expert
      dieticians and chefs keeping the child’s health and growth in mind. You
      are welcome to have a meal with us and experience it yourself.
    </>,
    <>
      Tula’s International School has separate boarding houses for girls and
      boys. Each dorm houses four children with independent bed with storage
      space, cupboard, study table, book rack and a personal soft board for pin
      ups. Large windows in each room not only allow natural light to flow but
      also allow students to enjoy the scenery outside. Each floor of the hostel
      has eco-friendly washrooms and bathing cells.
      <br />
      <br />
      Cleanliness is maintained round the clock by helpers on duty. The House
      Master and House Mother look after the emotional as well as the academic
      needs of students along with the tutors. The laundry is well equipped with
      modern washers, dryers and ironing equipment to take care of the laundry
      needs of the boarders. We believe the Himalayan breeze is therapeutic in
      itself. The supplies and provisions provided are individual and not on a
      sharing basis.
    </>,
    <>
      Parents who like to meet their wards need to drop a mail, reply to the
      same will be received on the same day, thus with the permission of the
      principal, they can come and meet their wards.
    </>,
    <>Teacher student ratio is 1:5</>,
    <>
      Security personnel are stationed at all the entrance & exit of the school
      & hostel premises, 24×7. All common spaces, in & around the school campus,
      including the extracurricular & sports facilities would be under 24 hours
      CCTV surveillance & monitored by security head. Junior students & girls
      students would have lady-caregivers at their hostels & would be supervised
      by wardens. Principal and most of the teachers & instructors are housed in
      the school campus & are accessible by students at all the times.
    </>,
    <>
      The school is around 17 kms from the railway station and around 30 kms
      from Airport.
    </>,
    <>
      International languages offered are – German, French and Spanish. Students
      have to opt for any one.
    </>,
    <>
      We do share monthly academic progress of the child with the parents
      through e-mails and post also. Also if the parents would like to speak
      with the Dean of Academics/Principal regarding the academics, they are
      allowed to do so. If the parents want to meet the teachers, with a prior
      appointment they can.
    </>,
    <>
      TIS believes that a healthy mind resides in a healthy body. To ensure a
      safe and healthy stay on campus, the school has a well-equipped infirmary
      to meet the medical needs of students. A doctor, matron and an ambulance
      on campus ensures that students’ health is taken very seriously. At the
      same time, in case of any emergency, all such cases are transported
      directly to the nearest hospital and the parents are informed immediately
      about the same. We urge all parents to inform the infirmary about
      students’ specific health issues right at the beginning of the school
      year.
    </>,
    <>
      We have an excellent team of dedicated teachers and support staff that is
      committed to maintaining our high standards in all areas of learning.
      Renowned teachers from across the country are selected to ensure that your
      child gets the best.
    </>,
    <>
      TIS have been awarded No. 1 in Infrastructure provision by Education
      today. The education city, of which TIS is an integral part covers around
      24 acres. The campus has several playing fields interspersed with grassy
      knolls, beautiful gardens and tree-lined avenues. Thoughtfully designed
      all facilities in the school are within close walking distance. Also the
      school houses three separate boarding houses, two for boys and one girls,
      an auditorium with 500+ seating capacity, air conditioned digital library,
      a reference library, state of art science laboratories, a computer lab,
      gymnasium, ATM, Play grounds, Guest House, cafeteria, special labs for
      Maths practical’s, two dining blocks and an open air amphitheatre.
    </>,
    <>
      Students are allowed to call their parents/siblings/grandparents on
      Sundays. In case of emergency, the parents can call on the
      warden’s/Principal’s/co-ordinator’s number.
    </>,
    <>
      Yes, we do provide pickup and drop facility till a particular point, just
      to provide more comfort to our parents.
    </>,
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <Header
        title={"FAQ"}
        subtitle={
          "Got questions? Find quick answers about admissions, courses, and campus life in our FAQ section!"
        }
        headerImg={HeaderFAQImg}
        headerImgMobile={HeaderFAQImg}
      />
      <h1 className="faq-heading">
        Frequently Asked{" "}
        <span>
          Questions
          <Image src={lineImg} alt="" />
        </span>
      </h1>
      <div className="question-box">
        {questions.map((item, index) => (
          <div key={index} className="questionAndAnswerBox">
            <div
              onClick={() => toggleExpand(index)}
              className={`question ${expanded === index ? "expanded" : ""}`}
            >
              {item}
              <div className="icon-to-expand">
                <div
                  className={`arrow-icon ${expanded === index ? "up" : "down"}`}
                >
                  <FaLongArrowAltDown />
                </div>
              </div>
            </div>
            <div className={`answer ${expanded === index ? "expanded" : ""}`}>
              {answers[index]}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
