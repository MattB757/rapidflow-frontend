import AboutSection from "@/components/about/about-section";
import OurMissionSection from "@/components/about/our-mission";
import OurVisionSection from "@/components/about/our-vision-section";
import ProcessSection from "@/components/about/process-section";
// import MeetOurTeam from "@/components/about/team-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <ProcessSection />
      <OurMissionSection />
      <OurVisionSection />
      {/* <MeetOurTeam /> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default About;
