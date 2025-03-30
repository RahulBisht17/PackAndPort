import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import EstimateForm from "../Components/Home/EstimateForm";
import OurServices from "../Components/Home/OurServices";
import FAQSection from "../Components/FAQs";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <EstimateForm />
      <OurServices />
      <FAQSection />
    </div>
  );
};
export default Home;
