import React from "react";
import Image from "next/image";
import "../../../styles/BeyondAcademics/sports.css";
import { useMobile } from "../../globalComponents/IsMobileContext";
import theCircuit from "../../../public/Clubs/TheCircuit.png";
import theCircuitMobile from "../../../public/Clubs/TheCircuitMobile.png";
function TheCircuit() {
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && (
        <>
          <Image className="archiery" src={theCircuitMobile} alt="" />
          <h1 className="MobileSportsHeading">The Circuit</h1>
          <p1 className="SportsMobileText">
            The Club requires students to construct simple and complex projects
            during this activity period. Electronics forms the bedrock of most
            technological progress. As one of the reputed CBSE schools in
            Dehradun, Tula’s students construct devices, such as burglar alarm,
            automatic school bell, mosquito repellent, LED Sequential Running
            Lights, etc. One of the most sought after careers at the campus is
            robotics. Students at TIS do projects like obstacle-avoiding robot,
            cell phone detector, etc.
            <br />
            <br />
          </p1>
        </>
      )}
      {!isMobile && (
        <>
          <div style={{ display: "flex" }}>
            <div className="text-div-sports">
              <h1 className="headingSports">The Circuit</h1>
              <p1 className="sports-text">
                The Club requires students to construct simple and complex
                projects during this activity period. Electronics forms the
                bedrock of most technological progress. As one of the reputed
                CBSE schools in Dehradun, Tula’s students construct devices,
                such as burglar alarm, automatic school bell, mosquito
                repellent, LED Sequential Running Lights, etc. One of the most
                sought after careers at the campus is robotics. Students at TIS
                do projects like obstacle-avoiding robot, cell phone detector,
                etc.
                <br />
                <br />
              </p1>
            </div>

            <Image src={theCircuit} alt="" className="cycling" />
          </div>
          <div className="sports-line"></div>
        </>
      )}
    </>
  );
}

export default TheCircuit;
