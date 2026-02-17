import React from "react";
import Header from "../globalComponents/Header/Header";
import lineImg from "../../public/pictures/lineImg.png";
import HeaderFAQImg from "../../public/Header/WithdrawalHeader.png";
import "../../styles/FooterPages/privacy.css";
import Image from "next/image";
export default function Disclaimer() {
  return (
    <>
      {/* <Header
        title={"Privacy Policy"}
        subtitle={"Take a look at our Privacy Policy for more information!"}
        headerImg={HeaderFAQImg}
        headerImgMobile={HeaderFAQImg}
      /> */}
      <h1 className="faq-heading mt-20">
        Disclaimer
      </h1>
      <div className="redbox-Privacy">
              <h1 className="faq-heading">
        Website {" "}
        <span>
          Usage Policy
          <Image src={lineImg} alt="" />
        </span>
      </h1>
        <div className="text-privacy">
          <span> This disclaimer governs the use of the official website of Tula's International School.</span>
          <br />
          <br />
          While the School endeavors to ensure that all information published on this website is accurate, current, and complete, Tula's International School makes no representations or warranties, express or implied, regarding the absolute accuracy, reliability, suitability, or availability of the information, services, or related graphics contained on the website for any purpose. Information may be updated, modified, or removed without prior notice.
          <br />
          <br />
          <br />
          The content provided on this website is intended for general informational purposes only and should not be considered as a substitute for official communication, admission letters, fee circulars, policy documents, or regulatory notifications issued by the School. Tula’s International School shall not be held liable for any loss or damage, including but not limited to indirect or consequential loss, arising out of or in connection with the use of this website or reliance on the information provided herein.

          <br />
          <br />
          The website may contain links to third-party websites for convenience and reference. Such external sites are not under the control or supervision of Tula’s International School, and the School is not responsible for the content, accuracy, or reliability of any information on those websites.
          <br />
          <br />
         The School reserves the right to revise policies, programs, fee structures, academic details, and other information at any time without prior notice.
          <br />
          <br />
          
        </div>{" "}
      </div>
    </>
  );
}
