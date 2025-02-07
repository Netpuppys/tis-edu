import React from "react";
import BannerImg from "../../public/Banner/mentor.webp";
import Header from "@/components/globalComponents/Header/Header";
import Navbar from "@/components/globalComponents/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import yellowLine from "../../public/pictures/lineImg.png";
import topImage1 from "../../public/mentor/topImage1.webp";
import topImage2 from "../../public/mentor/topImage2.webp";
import image1 from "../../public/mentor/image1.webp";
import image2 from "../../public/mentor/image2.webp";
import image3 from "../../public/mentor/image3.webp";
import background from "../../public/mentor/background.webp";
import Image from "next/image";

function MentorMentee() {
  return (
    <>
      <Navbar />
      <Header
        headerImg={BannerImg}
        headerImgMobile={BannerImg}
        title={"Mentor & Mentee System"}
      />
      <div className="py-8 md:py-[3%]">
        <h2 className="text-[30px] px-4 md:px-0 w-fit mx-auto md:text-[clamp(10px,2.5vw,50px)] leading-tight text-[#b90124] text-center font-[TTChocolates]">
          Benefits of Mentor-Mentee Program in Boarding School
          <Image
            className="ml-auto w-fit max-w-[60%]"
            src={yellowLine}
            alt=""
          />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-full px-4 md:px-0 text-center mt-4 md:mt-8 text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          Benefits to the Mentees on Mentor-Mentee Program in Boarding School
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto mt-8 text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            Tula’s International School, Dehradun
          </strong>
          <br />
          <br />
          The Mentor-Mentee program at Tula’s International School serves as a
          foundation for holistic student development. This initiative ensures
          that students receive personalized guidance and emotional support in a
          structured manner, facilitating their overall growth. The program is
          an essential aspect of our boarding school philosophy, creating a
          nurturing environment that helps mentees develop academically,
          emotionally, and socially. Below is a detailed exploration of the
          benefits mentees derive from this transformative program.
        </h2>
        <div className="flex py-8 md:py-[3%] flex-col md:flex-row w-[90%] md:w-[85%] mx-auto justify-center items-center gap-4">
          <Image
            className="w-full md:w-[50%] h-full rounded-lg overflow-hidden"
            src={topImage1}
            alt=""
          />
          <Image
            className="w-full md:w-[50%] h-full rounded-lg overflow-hidden"
            src={topImage2}
            alt=""
          />
        </div>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            1. Enhanced Self-Confidence
          </strong>
          <br />
          <br />
          Confidence is a key trait for success in any field, and mentees in
          this program benefit immensely from consistent encouragement. Mentors
          act as pillars of support, instilling confidence in their mentees by
          recognizing their eEorts and achievements. Over time, mentees develop
          the courage to face challenges and embrace new opportunities,
          contributing to their personal and academic progress.
          <br />
          <br />
        </h2>

        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">2. Improved Self-Awareness</strong>
          <br />
          <br />
          Through regular discussions and introspection guided by mentors,
          mentees gain a deeper understanding of their strengths, weaknesses,
          and aspirations. This heightened self-awareness allows them to work on
          areas of improvement and leverage their unique abilities, ultimately
          paving the way for well-rounded development.
          <br />
          <br />
        </h2>

        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            3. Guidance for Academic Excellence
          </strong>
          <br />
          <br />
          Mentees benefit significantly from their mentors' academic guidance.
          Mentors help mentees identify effective study techniques, manage their
          time efficiently, and prioritise tasks. This personalised academic
          support ensures that students stay on track with their studies, excel
          in examinations, and achieve long-term educational goals.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            4. Development of Decision-Making Skills
          </strong>
          <br />
          <br />
          In a safe and supportive mentoring relationship, mentees are
          encouraged to make decisions and reflect on their outcomes. With
          mentors offering constructive advice, mentees learn to evaluate
          options carefully, consider consequences, and make well-informed
          choices that positively impact their lives.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            5. Stronger Communication Skills
          </strong>
          <br />
          <br />
          The one-on-one interactions with mentors help mentees build effective
          communication skills. By engaging in meaningful conversations, mentees
          learn how to articulate their thoughts clearly, listen actively, and
          express themselves confidently. These skills benefit them not only in
          their academic environment but also in social and professional
          settings.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            6. Enhanced Critical Thinking and Problem-Solving Abilities
          </strong>
          <br />
          <br />
          Mentors challenge mentees to think critically by asking
          thought-provoking questions and encouraging them to analyse situations
          deeply. This fosters a problem-solving mindset, equipping mentees with
          the ability to tackle academic challenges and real-life issues with
          logic and creativity.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            7. Emotional Support and Stability
          </strong>
          <br />
          <br />
          The boarding environment can sometimes be overwhelming for students
          who are away from home. Mentors provide a safe space for mentees to
          express their feelings and navigate emotional challenges. This
          consistent emotional support ensures that mentees feel secure, valued,
          and understood, enhancing their overall well-being.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            8. Exposure to New Perspectives
          </strong>
          <br />
          <br />
          Mentees benefit from the diverse experiences and knowledge that
          mentors bring to the table. By interacting with mentors, mentees gain
          fresh insights into diEerent cultures, ideas, and career paths. This
          exposure broadens their horizons and helps them develop a global
          outlook.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            9. Increased Motivation and Accountability
          </strong>
          <br />
          <br />
          Mentors encourage mentees to set realistic goals and work diligently
          toward achieving them. By holding mentees accountable for their
          progress, mentors instill a sense of responsibility and discipline.
          This process boosts mentees’ motivation to excel and fosters a
          growth-oriented mindset.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">10. Fostering Resilience</strong>
          <br />
          <br />
          Life is full of challenges, and resilience is a vital skill for
          navigating them. Mentees in the program learn to face setbacks with
          determination and optimism. With mentors guiding them through diEicult
          times, mentees develop the strength to persevere and grow stronger in
          the face of adversity.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            11. Improved Interpersonal Relationships
          </strong>
          <br />
          <br />
          Through the bond they form with their mentors, mentees learn the
          importance of trust, empathy, and respect in relationships. These
          skills enable them to build positive and meaningful connections with
          peers, teachers, and others in their lives.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            12. Encouragement for Lifelong Learning
          </strong>
          <br />
          <br />
          Mentors inspire mentees to view learning as a continuous and rewarding
          journey. By fostering curiosity and a love for exploration, mentors
          help mentees develop an enduring passion for acquiring knowledge and
          skills.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            13. Clarity in Career Goals
          </strong>
          <br />
          <br />
          One of the key benefits of the program is the career guidance provided
          by mentors. Mentees receive valuable advice on potential career paths,
          helping them explore their interests and align their academic efforts
          with their aspirations. This clarity is crucial for making informed
          decisions about their future.
          <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            14. Reduced Stress and Anxiety
          </strong>
          <br />
          <br />
          Boarding school life can be demanding, but the Mentor-Mentee program
          serves as a buffer against stress. By having someone to confide in and
          seek guidance from, mentees experience reduced anxiety and an improved
          sense of balance in their daily lives. <br />
          <br />
        </h2>
        <h2
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <strong className="text-[#b90124]">
            15. Long-Term Impact of the Program
          </strong>
          <br />
          <br />
          The benefits of the Mentor-Mentee program extend far beyond the
          immediate boarding school experience. By nurturing essential life
          skills such as communication, resilience, and leadership, the program
          prepares mentees for future challenges. Mentees carry the lessons
          learned into their personal, academic, and professional lives, making
          them well-rounded individuals who are capable of making meaningful
          contributions to society.
          <br />
          <br />
        </h2>
        <div
          style={{
            fontFamily: "TT Chocolates",
          }}
          className="flex justify-center text-white rounded-lg overflow-hidden relative px-6 py-6 md:px-[2%] md:py-[2%] items-center w-[90%] md:w-[85%] mx-auto text-[clamp(10px,4.5vw,30px)] leading-tight md:text-[clamp(10px,1.3vw,45px)]"
        >
          <Image
            src={background}
            alt=""
            className="w-full absolute object-cover -z-10 h-full top-0"
          />
          <h2>
            <strong className="">Conclusion</strong>
            <br />
            <br />
            The Mentor-Mentee program at Tulas International School is a
            transformative initiative that creates a nurturing and
            growth-oriented environment for mentees. By fostering confidence,
            providing academic guidance, and supporting emotional well-being,
            the program ensures that every student thrives. This holistic
            approach not only enhances the boarding experience but also equips
            students with the skills and mindset needed for lifelong success.
          </h2>
        </div>
        <div className="flex pt-8 md:pt-[3%] flex-col md:flex-row w-[90%] md:w-[85%] mx-auto justify-center items-center gap-4">
          <Image
            className="w-full md:w-[33.33%] h-full rounded-lg overflow-hidden"
            src={image1}
            alt=""
          />
          <Image
            className="w-full md:w-[33.33%] h-full rounded-lg overflow-hidden"
            src={image2}
            alt=""
          />
          <Image
            className="w-full md:w-[33.33%] h-full rounded-lg overflow-hidden"
            src={image3}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MentorMentee;
