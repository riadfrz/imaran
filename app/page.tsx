import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ForWho from "@/components/ForWho";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PainPoints from "@/components/PainPoints";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <ForWho />
        <PainPoints />
        <Work />
        <Features />
        <Pricing />
        <Testimonials />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
