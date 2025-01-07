"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderSportsImg from "../../public/Header/SPORTS.webp";
import "../../styles/BeyondAcademics/sports.css";
import bookwormIcon from "../../public/Clubs/bookwormIcon.png";
import pootersWheelIcon from "../../public/Clubs/pootersWheelIcon.png";
import RagaRocksIcon from "../../public/Clubs/RagaRocksIcon.png";
import vibgyorIcon from "../../public/Clubs/vibgyorIcon.png";
import Image from "next/image";
import archery from "../../public/pictures/archery.png";
import cycling from "../../public/pictures/cycling.png";
import hockey from "../../public/pictures/hockey.png";
import swimming from "../../public/pictures/swimming.png";
import taekwando from "../../public/pictures/taekwando.png";
import football from "../../public/pictures/football.png";
import shooting from "../../public/pictures/shooting.png";
import horseRiding from "../../public/pictures/horseRiding.png";
import billiards from "../../public/pictures/billiards-single.png";
import squash from "../../public/pictures/squash.png";
import volleyball from "../../public/pictures/volleyball.png";
import basketball from "../../public/pictures/basketball.png";
import cricket from "../../public/pictures/Cricket.png";
import lawnTennis from "../../public/pictures/lawnTennis.png";
import badminton from "../../public/pictures/badminton.png";
import tableTennis from "../../public/pictures/tableTennis.png";
import throwball from "../../public/pictures/throwballSports.png";

function Sport() {
  const data = [
    {
      title: "Archery",
      icon: bookwormIcon,
      image: archery,
      description: (
        <>
          We at Tula’s offers comprehensive archery programs in a safe and fun
          environment. Tula’s International School has a state of the art
          archery ground with many different target lanes spread out over
          natural terrain of our campus.
          <br />
          <br />
          Participation in archery not only engages them in a sport but it also
          improves leadership skills, adds confidence, fosters respect, and
          develops honorable and competent adults.
          <br />
          <br />
          It will benefit them physically as well as mentally and make them
          ready to tackle real-time problems in their life. Under the
          supervision of our expert coaches, archery training is imparted to
          make them professional archers.
        </>
      ),
    },
    {
      title: "Cycling",
      icon: pootersWheelIcon,
      image: cycling,
      description: (
        <>
          Tula’s, one of Dehradun’s best schools, has installed a velodrome
          where cycling enthusiasts can practice to their heart’s content after
          school hours. TIS is the first school in Dehradun to have a cycling
          track specially installed to produce top cyclists who can represent
          India in foreign tournaments.
          <br />
          <br />
          To increase interest among students in this competitive sport, we have
          a dedicated coach who trains students in the nuances of cycling.
          Cycling lessons are conducted after school is over. It is every
          cyclist’s ambition to win the Tour de France. At Tulas’ we have taken
          a small step in the hope that one day a Tulaite will triumph at
          cycling’s most hallowed event.
        </>
      ),
    },
    {
      title: "Hockey",
      icon: vibgyorIcon,
      image: hockey,
      description: (
        <>
          Field hockey at Tula’s International School represents an exciting
          opportunity for students to engage in a dynamic and competitive sport
          while fostering teamwork, discipline, and physical fitness. As one of
          the premier institute of Education in the region, Tula’s International
          School is committed to providing a well-rounded education that
          includes a diverse range of extracurricular activities, including
          sports like field hockey.
          <br />
          <br />
          Under the guidance of experienced coaches and staff, students at
          Tula’s International School have the chance to learn and develop their
          skills in field hockey, whether they are beginners or experienced
          players. The school offers state-of-the-art facilities, including
          well-maintained fields and equipment, to ensure that students have the
          resources they need to excel in the sport.
          <br />
          <br />
          Participation in field hockey at Tula’s International School goes
          beyond just physical exercise; it instills values such as
          sportsmanship, perseverance, and leadership. Students learn to work
          together as a team, supporting and encouraging one another both on and
          off the field.Furthermore, field hockey at Tula’s International School
          provides opportunities for students to compete in interschool
          tournaments and championships, allowing them to showcase their talents
          and represent their school with pride.
        </>
      ),
    },
    {
      title: "Swimming",
      icon: RagaRocksIcon,
      image: swimming,
      description: (
        <>
          Most hotels, health clubs, fitness centre and private clubs have
          swimming centre now which have given rise to the trend of swimming and
          made it an essential skill. Tula’s International School realises the
          importance of keeping up with the fast paced world and now boasts of
          an added sports facility, a swimming centre.
          <br />
          <br />
          Given its high standard of sports facilities, Tula’s now also offers
          swimming to the students who have a desire to learn swimming as well
          as to those who are passionate for swimming as a sport
        </>
      ),
    },
    {
      title: "Tae-kwon-do",
      icon: bookwormIcon,
      image: taekwando,
      description: (
        <>
          Tae-kwon-do is a Korean martial art with a heavy emphasis on kicks.
          Tae-kwon-do is characterised by its emphasis on head-height kicks,
          jumping and spinning kicks, and fast kicking techniques. Quick
          reaction, concentration, equilibrium, breath control, correct body
          mass and terrific speed makes one a champion in this sport.
          <br />
          <br />
          Our dedicated coach imparts the students to learn this martial art and
          perfect it. Tula’s is a member of Uttarakhand State Tae-kwon-do
          Association. We are also proud winners of the National Karate
          Championship held last year.
        </>
      ),
    },
    {
      title: "Football",
      icon: pootersWheelIcon,
      image: football,
      description: (
        <>
          We, at TIS, want to help students’ play the beautiful game in the
          right spirit. We have an in-house football academy aided by a national
          level football field. This caters for all abilities, from beginners to
          more experienced players, and provides an opportunity for children to
          develop their technical, psychological, as well as physical skills.
          <br />
          <br />
          This is in line with professional coaching manuals. Students are
          trained by experienced coaching staff who are handpicked to help
          develop football skills among students. We proudly organize the
          prestigious state-level inter-school football tournament, known as the
          "Shri S.D. Jain Memorial Football Tournament." This highly anticipated
          event brings together talented young athletes from various schools,
          fostering a spirit of healthy competition and sportsmanship.
        </>
      ),
    },
    {
      title: "Shooting Range",
      icon: vibgyorIcon,
      image: shooting,
      description: (
        <>
          Tula’s International School has a state of the art shooting range with
          quality equipment that aims to hone the talent of the budding
          shooters. Students can use the 7-lane indoor shooting range for 10M
          pistol and rifle shooting. They can practice under the skilled
          guidance of Mr. Amar Singh, an international level shooter.The
          shooting range is accessible to students 24/7, allowing 7 shooters to
          practice at one time.
          <br />
          <br />
          The school is a member of the Uttarakhand State Rifle Association and
          awaits membership confirmation from International Shooting Sports
          Federation (ISSF) and National Rifle Association of India as well.
        </>
      ),
    },
    {
      title: "Horse Riding",
      image: horseRiding,
      icon: RagaRocksIcon,
      description: (
        <>
          Horse riding is also known as equestrianism. There are different types
          of horse riding competitions all over the world, such as thoroughbred
          horse racing, steeple chasing, endurance riding, etc.
          <br />
          <br />
          As one of the top residential schools in Dehradun, Tula’s has begun
          offering horse riding lessons to its students at all levels. We offer
          riding lessons for beginners as well as the experienced. Our expert
          coaches also train the more experienced students in dressage, show
          jumping and eventing. We have a fine selection of horses and ponies.
          We have a stable and a small paddock which can hold up to 10 horses.
        </>
      ),
    },
    {
      title: "Billiards & Snooker",
      icon: bookwormIcon,
      image: billiards,
      description: (
        <>
          At Tula's International School, we offer top-notch facilities for
          snooker and billiards, providing students with the opportunity to
          engage in these classic cue sports. Playing snooker and billiards is
          not only a fun and relaxing pastime but also an excellent way for
          students to develop important skills such as strategic thinking,
          precision, and concentration. Our well-maintained tables and
          professional-grade equipment ensure a high-quality playing experience,
          whether students are beginners or advanced players.
          <br />
          <br />
          In addition to honing their skills on the table, students can also
          benefit from the social aspect of these sports, fostering camaraderie
          and sportsmanship. Our dedicated instructors are available to provide
          guidance and coaching, helping students to improve their techniques
          and understanding of the games.
        </>
      ),
    },
    {
      title: "Squash (Indoor)",
      icon: pootersWheelIcon,
      image: squash,
      description: (
        <>
          Squash is a great way to get fit, compete, or just have fun. The sport
          is becoming more and more popular across the country. One of the top
          boarding schools in Dehradun, TIS has two squash courts which have
          been approved by the World Squash Federation. These have optimum
          lighting and ventilation. Our special flooring provides accurate ball
          bounce, provides resilience and grip and prevents player fatigue.
          <br />
          <br />
          Tula’s Squash Centre offers a variety of programs for juniors from
          elementary school through high school. The programs are aimed at all
          levels: from beginners to expert players, all play in their own
          styles, as they move through high school with the help of professional
          coaching staff.
        </>
      ),
    },
    {
      title: "Volleyball",
      icon: vibgyorIcon,
      image: volleyball,
      description: (
        <>
          Volleyball is a popular sport that is played professionally as well in
          schools, backyards and beaches. This simple game can be enjoyed
          anywhere all you have to do is to set up a net. A typical volleyball
          game uses six players on each side.
          <br />
          <br />
          Among the best international Dehradun schools, Tula’s provides its
          students a world-class volleyball court where they can perfect their
          game. It has built-in lateral forgiveness which reduces stress on
          knees and joints.
          <br />
          <br />
          It has the added advantage of being easily installed over hard, flat
          surfaces. No wonder students at TIS are showing renewed interest in
          this gentle game!
        </>
      ),
    },
    {
      title: "Basketball (Synthetic Court)",
      icon: RagaRocksIcon,
      image: basketball,
      description: (
        <>
          Students at Tula’s International are coached by professional trainers
          to teach them the intricacies of basketball. Our outdoor basketball
          synthetic 8-layered court has been approved by the International
          Basketball Association (IBA) and provides the following benefits to
          our students:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Outstanding shock absorption – Efficient joint and cartilage
              protection
            </li>
            <li>
              Optimal vertical deformation – Advanced comfort, reduces risk of
              physical injuries
            </li>
            <li>
              Optimal traction coefficient – helps reduces the risk of slips and
              trips
            </li>
            <li>Environment friendly – free of solvents and heavy metals</li>
          </ul>
          <br />
          We have a rigorous training system that challenges players to maximize
          their abilities through comprehensive basketball-specific strength,
          flexibility, movement, agility, and speed training while seamlessly
          integrating on-court basketball skill instruction.
          <br />
          <br />
          We, at TIS, provide a unique opportunity for the student-athlete to
          become part of an environment of elite athletic training. Our programs
          enable students to have a great school experience while they continue
          to train like a professional with world class infrastructure which has
          been approved by IBA.
        </>
      ),
    },
    {
      title: "Cricket with Practice Net",
      icon: bookwormIcon,
      image: cricket,
      description: (
        <>
          Tula’s International school offers turf & cemented practicing net for
          cricket which is according to the international standards along with
          the night vision facility so that students can improve their skills
          because “Practice Makes a Man Perfect’’.
          <br />
          <br />
          The cricket training programme at TIS is being facilitated by
          professional coaches. We have a state-of –the-art stadium with a
          seating capacity of more than 1000 people who can watch students’
          execute those perfect straight drives!
          <br />
          <br />
          Our coaching is about developing better people, no matter what age or
          ability, not just better cricketers. We aim to adopt an
          ‘athlete-centred’ approach where the needs of each individual comes
          first. Sports is a team game and this is reflected in our style of
          grooming youngsters where each student puts his teammate before
          himself.
        </>
      ),
    },
    {
      title: "Lawn Tennis (Synthetic Court)",
      icon: pootersWheelIcon,
      image: lawnTennis,
      description: (
        <>
          Our International Tennis Federation (ITF) approved tennis courts have
          a special 8-layer cushioned synthetic flooring, which provides better
          grip and prevents injuries
          <br />
          <br />
          Our partner company who has designed the court is accredited with the
          International Tennis Federation, the Asian Tennis Federation and the
          American Sports Builders Association. The 8 layer flooring has the
          following benefits:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Outstanding shock absorption – Efficient joint and cartilage
              protection
            </li>
            <li>
              Optimal vertical deformation – Advanced comfort, reduces risk of
              physical injuries
            </li>
            <li>
              Optimal traction coefficient – A perfectly balanced grip and slip,
              reduces the risk of slips and trips
            </li>
            <li>Environment friendly – free of solvents and heavy metals</li>
          </ul>
        </>
      ),
    },
    {
      title: "Badminton",
      icon: vibgyorIcon,
      image: badminton,
      description: (
        <>
          All students at TIS have the opportunity to play badminton during the
          course of each school year. We also provide a coaching club for boys
          and girls who wish to refine their badminton skills. At TIS, we
          believe it is our duty to provide students with world-class badminton
          infrastructure.
          <br />
          <br />
          For us it is a matter of pride that our badminton court has been
          approved by the Badminton World Federation (BWF). It helps provide the
          following benefits to our students:
          <br />
          <br />
          <ul className="ml-5 list-disc">
            <li>
              Outstanding shock absorption – Efficient joint and cartilage
              protection
            </li>
            <li>
              Optimal vertical deformation – Advanced comfort, reduces risk of
              physical injuries
            </li>
            <li>
              Optimal traction coefficient – helps reduces the risk of slips and
              trips
            </li>
            <li>Environment friendly – free of solvents and heavy metals.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Table Tennis",
      image: tableTennis,
      icon: RagaRocksIcon,
      description: (
        <>
          Indoor games are not as popular with students as outdoor games. To
          develop students interest towards indoor games we offer a specific
          sports arena that houses an area dedicated to table tennis.
          <br />
          <br />
          The TT tables are procured from the best sports houses of India. The
          table tennis arena has special sports flooring approved by sports
          commission for better and save play.
          <br />
          <br />
          Being an indoor game, the sports arena has been arranged with ample
          amount of light, making it suitable for playing in the nights as well.
        </>
      ),
    },
    {
      title: "Throwball",
      icon: bookwormIcon,
      image: throwball,
      description: (
        <>
          Throw ball is a physically demanding sport that takes skill and
          focusing ability. Tula’s International school has individual Throw
          ball playground which is accessible for each and every student.
          <br />
          <br />
          They can exhibit true sportsman spirit through various sports events.
          They learn to reign over the field and rein their strong emotion and
          utilize their potential. Young minds are trained under talented
          individuals to excel at national and international level sports
          competitions.
          <br />
          <br />
          Through the sports facilities, we strive to create various factors
          such as leadership, teamwork in our students which benefit them life
          long.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Sports"}
        subtitle={
          "Sports instill discipline, teamwork, and well-being in students' lives."
        }
        headerImg={HeaderSportsImg}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-20 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
      >
        As a Sports Boarding school in Dehradun, Tula’s offers its students the
        best sporting infrastructure of any educational institution in Dehradun.
        It has a fully fledged program to develop students into professional
        athletes who can make their mark in sporting events across the globe.
        Among the most sought-after sports at TIS are volleyball, cycling and
        horse riding.
      </h6>
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
              className={`w-full md:w-[37.5%] pt-8 md:py-20 ${
                index % 2 === 0 ? "md:pl-[10%]" : "md:pr-[10%]"
              }`}
            >
              <Image
                src={data.image}
                alt=""
                className={`w-full h-full rounded-3xl `}
              />
            </div>
            <div
              className={`w-full md:w-[50%] py-8 md:py-20 h-full ${
                index % 2 === 0 ? "pl-0 md:pl-16" : "pr-0 md:pr-16"
              }`}
            >
              <h2 className="font-[TTChocolatesBold] text-[#b90124] font-semibold text-[30px] md:text-[clamp(20px,2.5vw,50px)]">
                {data.title}
              </h2>
              <h2
                style={{
                  fontFamily: "TT Chocolates",
                }}
                className={`text-[clamp(15px,4.5vw,30px)] pt-4 md:pt-8 md:text-[clamp(18px,1.3vw,45px)] text-black font-normal`}
              >
                {data.description}
              </h2>
            </div>
            <div
              className={`w-[50%] -mb-[10%] md:mb-0 relative z-20 md:w-[12.5%] flex md:items-center md:justify-center ${
                index === 0 && "self-end"
              } ${index === 1 && "self-start"} ${index === 2 && "self-start"} ${
                index === 3 && "self-end"
              } ${index === 4 && "self-end"} ${index === 5 && "self-start"} ${
                index === 6 && "self-start"
              } ${index === 7 && "self-end"} ${index === 8 && "self-end"} ${
                index === 9 && "self-start"
              } ${index === 10 && "self-start"} ${index === 11 && "self-end"} ${
                index === 12 && "self-end"
              } ${index === 13 && "self-start"} ${
                index === 14 && "self-start"
              } ${index === 15 && "self-end"} ${index === 16 && "self-end"}`}
            >
              <Image
                src={data.icon}
                alt=""
                className={`w-full max-w-[174px] h-full
                       // index % 2 === 0 ? "pl-[12.5%]" : "mr-[12.5%]"
                     `}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sport;
