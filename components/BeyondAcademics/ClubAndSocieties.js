"use client";
import React from "react";
import Header from "../globalComponents/Header/Header";
import HeaderClubsImg from "../../public/Header/ClubsHeader.png";
import bookworm from "../../public/Clubs/Bookworm.png";
import bookwormIcon from "../../public/Clubs/bookwormIcon.png";
import pootersWheelIcon from "../../public/Clubs/pootersWheelIcon.png";
import RagaRocksIcon from "../../public/Clubs/RagaRocksIcon.png";
import vibgyorIcon from "../../public/Clubs/vibgyorIcon.png";
import pottersWheel from "../../public/Clubs/pottersWheel.png";
import ragaRocks from "../../public/Clubs/RagaRocks.png";
import theCircuit from "../../public/Clubs/TheCircuit.png";
import khanaKhazana from "../../public/Clubs/KhanaKhazana.png";
import vibgyor from "../../public/Clubs/Vibgyor.png";
import shutterBug from "../../public/Clubs/Shutterbug.png";
import gulmohar from "../../public/Clubs/Gulmohar.png";
import flamingo from "../../public/Clubs/Flamingo.png";
import Image from "next/image";

export default function ClubAndSocieties() {
  const data = [
    {
      title: "Bookworm",
      icon: bookwormIcon,
      image: bookworm,
      description: (
        <>
          "Reading is to the mind what exercise is to the body"-with this motto
          in mind, the students at one of Dehradun's best schools, TIS, strut
          about the campus with their proud literary possessions- Harry Potter
          and the Philosopher's Stone, Life of Pi, Malgudi Days, The Da Vinci
          Code, and many more. The book lovers also get to interact with
          authors, such as Chetan Bhagat, Ruskin Bond, Ranjit Lal and Bhavna
          Arora, among others.
        </>
      ),
    },
    {
      title: "Potters Wheel",
      icon: pootersWheelIcon,
      image: pottersWheel,
      description: (
        <>
          Clay modeling may look a simple process but when practiced leads to
          unexpected and even crooked shapes, depending upon the skill of the
          potters’s hand. Yet this work allows one to think and give shape to
          one’s imaginations working with shapes of clay. The students work for
          hours on end with infinite patience to bring out their creative
          talents. Their hands might get dirt but it is a learning process
          unlike any other.
        </>
      ),
    },
    {
      title: "Vibgyor",
      icon: vibgyorIcon,
      image: vibgyor,
      description: (
        <>
          As one of the reputed schools in Dehradun, Tula’s has the only Art &
          Craft workstation of its kind in Uttarakhand. Called ‘Vibgyor’, it
          continually strives to inspire its students to display their
          creativity under the capable guidance of art teachers. Students are
          exposed to different mediums for a wholesome education in the artistic
          sphere. Portrait painting, sketching, crafts, Madhubani painting, and
          creating sculptures are some of the creative pursuits that students
          enjoy doing during their art and craft classes.
        </>
      ),
    },
    {
      title: "Raga Rocks",
      icon: RagaRocksIcon,
      image: ragaRocks,
      description: (
        <>
          At Tula’s, music is not regarded as a standalone subject but is
          incorporated into the curriculum itself. It forms an integral part of
          every student’s life. The school has qualified teachers who teach
          students to play a variety of musical instruments, such as the guitar,
          congo drums, violin, sitar, keyboards, drums, harmonium, table, and to
          sing as well. Students are exposed to western as well as Indian
          classical dance forms.
        </>
      ),
    },
    {
      title: "The Circuit",
      icon: bookwormIcon,
      image: theCircuit,
      description: (
        <>
          The Club requires students to construct simple and complex projects
          during this activity period. Electronics forms the bedrock of most
          technological progress. As one of the reputed CBSE schools in
          Dehradun, Tula’s students construct devices, such as burglar alarm,
          automatic school bell, mosquito repellent, LED Sequential Running
          Lights, etc. One of the most sought after careers at the campus is
          robotics. Students at TIS do projects like obstacle-avoiding robot,
          cell phone detector, etc.
        </>
      ),
    },
    {
      title: "Khana Khazana",
      icon: pootersWheelIcon,
      image: khanaKhazana,
      description: (
        <>
          Food is the magic key that can open many doors, as the saying goes.
          The Cookery Club at Tula’s, one of the best co-ed boarding school in
          Dehradun, is not about nutrients and calories. It’s about sharing.
          It’s about honesty. It’s about identity. At the Tula’s Cookery Club,
          students experiment with different recipes and create new and varied
          dishes. The challenge lies in creating dishes that cater to different
          palates. Cooking is such a vast and creative field. This is one club
          loved by students of both sexes.
        </>
      ),
    },

    {
      title: "Shutterbug",
      icon: vibgyorIcon,
      image: shutterBug,
      description: (
        <>
          The great photographer Dorothea Lange once said, ‘’Photography takes
          an instant out of time, altering life by holding it still.’’ To view
          the world through a camera gives a totally different perspective to
          life. The leaves, when viewed through a lens, become an art in itself
          and the hummingbirds seem to sing their own songs. Creativity,
          imagination and passion are the key that sets one apart from the
          crowd. Like a fingerprint, no two images are the same. It is for the
          viewer to interpret the captured image though the artist may have a
          different opinion. As one of Dehradun’s top schools, it lets students
          study and explore the colourful field of photography.
        </>
      ),
    },
    {
      title: "Gulmohar",
      image: gulmohar,
      icon: RagaRocksIcon,
      description: (
        <>
          Gardening is an art in itself. The students at TIS work hard to see
          that plants and trees in the campus are well protected. Tula’s
          International School students have pledged their loyalty towards
          Mother Earth and contribute in every possible way to spread awareness
          about environmental issues.
        </>
      ),
    },
    {
      title: "Flamingo",
      icon: bookwormIcon,
      image: flamingo,
      description: (
        <>
          Dance is one of humankind’s great creative expressions. A performing
          art which has sublime aesthetic and symbolic value, dance involves the
          dancer to surrender himself utterly before the audience and give away
          something of himself. At Tula’s, all forms of dance, whether classical
          or Western, are encouraged by the school’s trained dance instructors.
          The aim is to free students of their inhibitions and let them sway to
          the rhythm of their chosen dance form.
        </>
      ),
    },
  ];
  return (
    <>
      <Header
        title={"Clubs And Societies"}
        subtitle={
          "Clubs and societies enrich the students with skills & a passion for friendships."
        }
        headerImg={HeaderClubsImg}
        headerImgMobile={HeaderClubsImg}
      />
      <h6
        style={{
          fontFamily: "TT Chocolates",
        }}
        className="w-full px-8 md:px-0 md:w-[75%] pt-8 md:pt-20 mx-auto text-justify md:text-center text-[clamp(15px,4.5vw,30px)] font-normal md:text-[clamp(18px,1.3vw,45px)] "
      >
        The Tula’s International family strives to create a positive environment
        where all students are challenged and inspired to achieve their
        potential. Academics and activities form the backbone of TIS. As a
        result, the school has been ranked among the top boarding schools in
        Dehradun.
        <br />
        <br />
        We believe for the Clubs to function effectively, student participation
        is a must. The more students form and manage the various committees and
        clubs the better it bodes for their overall development. These Clubs and
        Committees gives them a platform to discover and bring to the fore their
        hidden talents, so essential for an all-round education.
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
              className={`w-full md:w-[37.5%] py-8 md:py-20 ${
                index % 2 === 0 ? "md:pl-[12.5%]" : "md:pr-[12.5%]"
              }`}
            >
              <Image
                src={data.image}
                alt=""
                className={`w-full h-full rounded-3xl `}
              />
            </div>
            <div
              className={`w-full md:w-[50%] h-full ${
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
              } ${index === 7 && "self-end"} ${index === 8 && "self-end"}`}
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
