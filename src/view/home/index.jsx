import React from "react";
import Hero from "./hero";
import About from "./about";
import CoreCard from "./coreCard";
import ServicesSlider from "./servicesSlider";
import MySkills from "./mySkills";
import RecentWork from "./recentWork";
import ExperienceTimeline from "./experienceTimeline";
import Contect from "./contect";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <CoreCard />
      <ServicesSlider />
      <MySkills />
      <ExperienceTimeline />
      <RecentWork />
      <Contect />
    </>
  );
};

export default HomePage;
