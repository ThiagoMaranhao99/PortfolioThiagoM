import { useState } from "react";
import HomeSection from "./HomeSection";
import "./App.css";
import Navbar from "./NavBar";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import AboutSection from "./about";
import GridBackground from "./ui/grid-background"
import EducationSection from "./education";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./contact";




function App() {
  return (
    <>
      
      
      <Navbar />
      <HomeSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <GridBackground />
    </>
  );
}

export default App;