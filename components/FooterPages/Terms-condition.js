import React from "react";
import Header from "../globalComponents/Header/Header";
import lineImg from "../../public/pictures/lineImg.png";
import HeaderFAQImg from "../../public/Header/WithdrawalHeader.png";
import Image from "next/image";
import "../../styles/FooterPages/privacy.css";
export default function Terms() {
  return (
    <>
      <Header
        title={"Terms & Conditions"}
        subtitle={
          "Please read our Terms and Conditions to understand the guidelines and policies for our boarding school community."
        }
        headerImg={HeaderFAQImg}
        headerImgMobile={HeaderFAQImg}
      />
      <h1 className="faq-heading">
        Terms &{" "}
        <span>
          Conditions
          <Image src={lineImg} alt="" />
        </span>
      </h1>
      <div className="redbox-Privacy">
        <div className="text-privacy">
          We respect the privacy of those who visit our web site. In accordance
          with this, we have created this policy in order to demonstrate our
          privacy commitment to our users:
          <br />
          <br />
          What this Privacy Policy Covers
          <ul>
            <li>
              This Privacy Policy covers our treatment of personally
              identifiable information that we collect when you are on our site,
              and when you use our services. This policy also covers our
              treatment of any personally identifiable information that third
              parties share with us.
            </li>
            <li>
              This policy does not apply to the practices of organizations that
              we do not own or control or to people that we do not employ or
              manage.
            </li>
          </ul>
          <span>Information Collection and Use</span>
          <br />
          <ul>
            <li>
              We collect personally identifiable information when you register
              on our website, when you use our services, and when you visit our
              pages. We may also receive personally identifiable information
              from third parties.
            </li>
            <li>
              When you register with us, we ask for your name, email address,
              zip code, occupation, industry, and personal interests. Once you
              register with us and sign in to our services, you are not
              anonymous to us.
            </li>
            <li>
              We use this information for three general purposes: to customize
              the content you see, to fulfill your requests for certain
              services, and to contact you about services.
            </li>
            <li>
              We also automatically receive and record information on our server
              logs from your browser including your IP address, cookie
              information and the page you requested. This information is not
              linked to your account and will not be used to identify you.
            </li>
          </ul>
          <span>Information Sharing and Disclosure</span>
          <br />
          <ul>
            <li>
              We will not sell or rent your personally identifiable information
              to anyone.{" "}
            </li>{" "}
            <li>
              We will send personally identifiable information about you to
              other companies or people when{" "}
            </li>{" "}
            <li>We have your consent to share the information; </li>{" "}
            <li>We respond to subpoenas, court orders or legal process; or </li>{" "}
            <li>
              We find that your actions on our web sites violate the Terms of
              Service
            </li>
          </ul>
          <span>Changes to this Privacy Policy</span>
          <br /> <br />
          The privacy policy is subject to modification from time to time. If we
          decide to change our privacy policy, we will post those changes here
          so that you will always know what information we gather, how we might
          use that information and whether we will disclose it to anyone. Any
          significant changes to our privacy policy will be announced on our
          home page. If you do not agree with the changes in our policy you can
          simply discontinue to visit our website.
          <br /> <br />
          <span>Questions or Suggestions</span>
          <br /> <br />
          If you have questions or suggestions complete the enquiry form or send
          an email to us.
        </div>
      </div>
    </>
  );
}
