import ProminentClient from "./ProminentClient";

export const metadata = {
  title: "Prominent Personalities",
  description:
    "Meet the prominent personalities, alumni and dignitaries associated with Tula's International School, a CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/prominent-personalities/",
  },
};

export default function ProminentPersonalitiesPage() {
  return <ProminentClient />;
}
