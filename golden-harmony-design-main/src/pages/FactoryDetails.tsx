import Navbar from "@/components/Navbar";
import FactorySection from "@/components/FactorySection";
import Footer from "@/components/Footer";

const FactoryDetails = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <FactorySection />
      </div>
      <Footer />
    </main>
  );
};

export default FactoryDetails;
