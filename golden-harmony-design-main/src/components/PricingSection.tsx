import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Design 2D/3D",
    price: "₹150",
    unit: "/sq.ft",
    subtitle: "Starting at",
    description: "Professional design visualization for your dream space",
    features: [
      "2D layout planning",
      "3D visualization & renders",
      "Material palette selection",
      "Furniture placement",
      "Electrical & lighting plans",
      "False ceiling maps",
      "Colour scheme guidance",
      "Design consultation",
    ],
  },
  {
    title: "Modular Kitchen",
    price: "₹1,600",
    unit: "/sq.ft",
    subtitle: "Starting at",
    description: "Factory-finished modular kitchens with premium hardware",
    features: [
      "Base, wall & tall units",
      "Premium shutters & finishes",
      "Soft-close mechanisms",
      "Cutlery & tandem systems",
      "German/Italian hardware",
      "Moisture-resistant boards",
      "On-site installation",
      "1-year warranty",
    ],
  },
  {
    title: "Interior Design",
    price: "₹2,500",
    unit: "/sq.ft carpet area",
    subtitle: "Starting at",
    description: "Complete interior transformation for your home",
    features: [
      "Full home interior design",
      "Modular furniture included",
      "Civil & electrical work",
      "False ceiling & lighting",
      "Paint & wall treatments",
      "Décor & styling",
      "Project management",
      "1-year warranty",
    ],
  },
  {
    title: "Commercial",
    price: "₹3,000",
    unit: "/sq.ft carpet area",
    subtitle: "Starting at",
    description: "Premium turnkey solutions for exclusive requirements",
    features: [
      "Luxury materials & finishes",
      "Bespoke furniture design",
      "Smart home integration",
      "Commercial projects",
      "Architectural services",
      "Dedicated project manager",
      "Extended warranty",
      "Lifetime consultation",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Pricing & Packages</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Transparent Pricing</h1>
          <p className="text-muted-foreground">
            Choose a package that fits your needs and budget. All prices are indicative and vary based on project scope
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">{plan.title}</h3>

              {plan.price ? (
                <>
                  <p className="text-primary text-sm font-medium italic mb-1">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.unit}</span>
                  </div>
                </>
              ) : (
                <div className="mb-4 h-[52px]" />
              )}

              <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{plan.description}</p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="gold" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Solutions */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-serif font-bold mb-4">Need Something Different?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact us for a personalized quote tailored to your specific requirements and
            budget.
          </p>
          <Button variant="goldOutline" size="lg" asChild>
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
