import "../../globals.css";
import WebinarLanding from "../Pages/WebinarLandingPage";

export const metadata = {
  title: "Boarding School Webinar",
  description:
    "Join Tulas International School's admissions webinar to learn about boarding life, academics and the CBSE curriculum in Dehradun, Uttarakhand.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-school/webinar/",
  },
};

export default function LandingPage() {
  return (
    <>
      <h1 className="sr-only">
        Boarding School Webinar - Tulas International School
      </h1>
      <WebinarLanding />
    </>
  );
}
