import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/home/hero";
import AboutUs from "../components/home/aboutUs";
import Scervice from "../components/home/service";
import WhyChooseUs from "../components/home/whyChoosUs";
import TestimonialsSection from "../components/home/testimonial";
import SkillsSection from "../components/home/techonology";
import Pagehead from "../commonComponents/meta";
const Home = () => {
  return (
    <>
      <Pagehead
        title="Home"
        description="Welcome to the Home Page of NextWebiPortfolio"
      />

      <section>
        <Hero />
        <AboutUs />
        <Scervice />
        <WhyChooseUs />
        <SkillsSection />
        <TestimonialsSection />
      </section>
    </>
  );
};

export default Home;
