import FoodAndNutrition from "../../../components/BoardingLife/FoodAndNutrition/FoodAndNutrition";
import "../../globals.css";
import Navbar from "../../../components/globalComponents/navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
export const metadata = {
  title: "Food & Nutrition",
  description:
    "Explore the nutritious dining and food programme for boarding students at Tula's International School, a CBSE boarding school in Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/boarding-life/food-and-nutrition/",
  },
};

export default function FoodAndNutritionPage() {
  return (
    <>
      <Navbar />
      <FoodAndNutrition />
      <Footer />
    </>
  );
}
