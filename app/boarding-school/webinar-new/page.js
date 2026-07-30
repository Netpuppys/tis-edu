import "../../globals.css";
import WebinarNewLanding from "../Pages/WebinarNewLandingPage";

export const metadata = {
  title: "Boarding School Webinar",
  description:
    "Join Tula's International School's admissions webinar to learn about boarding life, academics and the CBSE curriculum in Dehradun, Uttarakhand.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-school/webinar-new/",
  },
};

export default function LandingPage() {
  return (
    <>
      <h1 className="sr-only">
        Boarding School Webinar - Tula&apos;s International School
      </h1>
      <WebinarNewLanding />
    </>
  );
}
