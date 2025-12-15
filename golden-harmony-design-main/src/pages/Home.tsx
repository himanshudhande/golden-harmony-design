import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurWorkPreview from "@/components/OurWorkPreview";
import OurCraft from "@/components/OurCraft";
import USPSection from "@/components/USPSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurWorkPreview />
      <OurCraft />
      <USPSection />
      <MapSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Home;
