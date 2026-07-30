import AwadhClient from "./AwadhClient";

export const metadata = {
  title: "Awadh Tinkering Lab (ATL)",
  description:
    "Explore the AWaDH Tinkering Laboratory at Tula's International School, Dehradun, established with IIT Ropar to nurture innovation, STEM skills and creativity.",
  alternates: {
    canonical: "https://tis.edu.in/awadh-tinkering-lab/",
  },
};

export default function AwadhTinkeringLabPage() {
  return <AwadhClient />;
}
