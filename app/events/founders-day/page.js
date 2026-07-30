import FoundersDayClient from "./FoundersDayClient";

export const metadata = {
  title: "Founder's Day",
  description:
    "Celebrate Founder's Day at Tula's International School, Dehradun, honouring leadership, teamwork and the school's founding vision.",
  alternates: {
    canonical: "https://tis.edu.in/events/founders-day/",
  },
};

export default function FoundersDayPage() {
  return <FoundersDayClient />;
}
