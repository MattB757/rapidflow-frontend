import CtaSection from "@/components/cta-section";
import Features from "@/components/features-section";
import Footer from "@/components/footer-section";
import HexpropLanding from "@/components/hexprep-landing";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/testimonials-section";
// import Register from "@/components/register";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HexpropLanding />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}
