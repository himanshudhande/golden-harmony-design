import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  );
};

export default Portfolio;
