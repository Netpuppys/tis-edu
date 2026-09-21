import "../../globals.css";
import Landing from "../Pages/LandingPage";

export const metadata = {
  title: "Admissions Open",
  description:
    "Admissions are now open at Tulas International School, a CBSE co-ed boarding school in Dehradun for Classes 4 to 12. Apply now for 2026-27.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-school/admission-open/",
  },
};

export default function LandingPage() {
  return (
    <>
      <h1 className="sr-only">
        Admissions Open - Tulas International School
      </h1>
      <Landing />
    </>
  );
}
