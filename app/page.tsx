import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import ServiceArea from "@/components/sections/ServiceArea";
import Reviews from "@/components/sections/Reviews";
import CtaBand from "@/components/sections/CtaBand";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Stats />
        <ServiceArea />
        <Reviews />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
