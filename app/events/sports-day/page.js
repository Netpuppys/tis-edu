import SportsDayClient from "./SportsDayClient";

export const metadata = {
  title: "Annual Sports Day",
  description:
    "Relive the Annual Sports Day celebrations at Tula's International School, Dehradun, showcasing student athleticism, teamwork and sportsmanship.",
  alternates: {
    canonical: "https://tis.edu.in/events/sports-day/",
  },
};

export default function SportsDayPage() {
  return <SportsDayClient />;
}
