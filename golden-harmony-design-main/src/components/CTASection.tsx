import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's collaborate to create an interior that reflects your personality and exceeds your expectations
        </p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/contact">
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
