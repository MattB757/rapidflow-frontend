import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import Navbar from "@/components/navbar";
import Register from "@/components/register";
// import { Metadata } from "next";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Register />
      <Features />
      {/* <Testimonials /> */}
      {/* <CtaSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
