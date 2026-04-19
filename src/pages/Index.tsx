import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <SmoothScroll />
      <ParallaxBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <BeforeAfter />
        <Process />
        <Stats />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
