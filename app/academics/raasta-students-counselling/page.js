import RaastaClient from "./RaastaClient";

export const metadata = {
  title: "Raasta Students Counselling",
  description:
    "Discover the Raasta Students Counselling programme at Tula's International School, Dehradun, empowering students with life skills and career guidance.",
  alternates: {
    canonical: "https://tis.edu.in/academics/raasta-students-counselling/",
  },
};

export default function RaastaPage() {
  return <RaastaClient />;
}
