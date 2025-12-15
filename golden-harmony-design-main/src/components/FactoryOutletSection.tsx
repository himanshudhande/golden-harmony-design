import { Check, Phone, Factory, Cog, Shield, Users, ClipboardCheck, Palette, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-1.jpg";
import bedroomImage from "@/assets/bedroom-1.jpg";
import livingImage from "@/assets/living-1.jpg";

const whyFactoryItems = [
  {
    icon: Factory,
    title: "100% In-House Manufacturing – No Outsourcing",
    description: "Every wardrobe, kitchen unit, and storage solution is built at our own production unit.",
    points: ["Better quality control", "Faster delivery timelines", "Consistent finishes", "Accountability at every stage"],
  },
  {
    icon: Cog,
    title: "Advanced German & Italian Machinery",
    description: "Our factory is equipped with cutting-edge technology.",
    points: ["CNC cutting machines", "Edge banders", "Multi-bore machines", "Precision laminators", "Automated polish stations"],
    note: "This ensures seamless edges, perfect alignments, and long-lasting durability.",
  },
  {
    icon: Shield,
    title: "Premium Raw Materials & Hardware",
    description: "We use only the finest materials.",
    points: ["Marine-grade plywood", "Anti-termite & anti-fungal boards", "Branded hinges & channels", "Soft-close fittings", "High-end laminates / acrylic / PU polish"],
    note: "Every material undergoes inspection before production begins.",
  },
  {
    icon: Users,
    title: "Skilled Technicians & Experienced Carpenters",
    description: "Our factory team includes:",
    points: ["Modular carpenters", "Polish experts", "CNC specialists", "Quality inspectors", "Assembly technicians"],
    note: "Their experience ensures craftsmanship that looks elegant and lasts long.",
  },
  {
    icon: ClipboardCheck,
    title: "Multiple-Stage Quality Checking",
    description: "We follow a strict 7-step QC process:",
    points: ["Raw material inspection", "Cutting accuracy check", "Edge banding quality", "Internal structure strength test", "Finishing inspection", "Assembly precision check", "Packaging quality check"],
    note: "Nothing leaves the factory without final approval.",
  },
  {
    icon: Palette,
    title: "Customisation at Its Best",
    description: "Every home is unique — and so is every module we produce.",
    points: ["Custom sizes", "Custom colours", "Custom fittings", "Custom layouts", "Custom finishes (matt, glossy, textured, PU, veneer)"],
    note: "Your imagination becomes our blueprint.",
  },
  {
    icon: Clock,
    title: "Faster Execution & On-Time Delivery",
    description: "Because we control production in-house, we can promise:",
    points: ["Faster fabrication", "Smooth site installation", "Zero delays due to vendors"],
    note: "This keeps your project stress-free and predictable.",
  },
];

const productCategories = [
  {
    title: "Modular Kitchens",
    items: ["Base units", "Wall units", "Tall units", "Cutlery & tandem systems", "Shutters and finishes"],
  },
  {
    title: "Wardrobes",
    items: ["Hinged", "Sliding", "Walk-in units", "Linen storage", "Accessory units"],
  },
  {
    title: "Modular Wall Units",
    items: ["TV units", "Crockery units", "Bar units"],
  },
  {
    title: "Storage Solutions",
    items: ["Shoe racks", "Bookshelves", "Utility units"],
  },
  {
    title: "Commercial Modular Production",
    items: ["Office workstations", "Reception counters", "Storage systems", "Breakout units"],
  },
];

const trustPoints = [
  { title: "Durable", description: "Built with strong internal structure, branded hinges, and moisture-resistant boards." },
  { title: "Perfect Finish", description: "Thanks to machine-driven polish, cutting, and edge banding." },
  { title: "No On-Site Mess", description: "Modules are pre-fabricated and installed neatly at your home." },
  { title: "Uniform & Premium Look", description: "Because everything is produced using systematic technology." },
  { title: "Long-Term Warranty", description: "Factory finish ensures long life and consistent quality." },
];

const processSteps = [
  { step: 1, title: "Design Finalisation", description: "Your design, measurements, and material choices are translated into production drawings." },
  { step: 2, title: "Cutting & Sizing", description: "Boards are cut with millimetre-level precision using CNC machines." },
  { step: 3, title: "Edge Banding", description: "Every edge is sealed to avoid moisture and improve aesthetic." },
  { step: 4, title: "Drilling & Assembly Prep", description: "Holes and joints are made exactly as per design requirements." },
  { step: 5, title: "Finishing Stage", description: "Acrylic, laminate, veneer, or PU polish is completed here." },
  { step: 6, title: "Quality Check", description: "Our QC team verifies strength, finish, and alignment." },
  { step: 7, title: "Packing & Dispatch", description: "Ready modules are safely packed and reach your site." },
  { step: 8, title: "Installation", description: "Our trained team installs everything systematically." },
];

const FactoryOutletSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Factory Outlet
          </h1>
          <p className="text-primary text-xl font-medium italic mb-6">
            Precision. Quality. Reliability.
          </p>
          <p className="text-2xl md:text-3xl font-serif text-foreground mb-6">
            Where Your Modular Furniture Truly Comes to Life.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Richwood Interio, great design is only the beginning. The true magic happens inside our state-of-the-art in-house factory, where every piece of modular furniture is crafted with engineering accuracy, premium materials, and strict quality checks. This facility is the backbone of our brand — the reason we deliver exceptional finish, consistent quality, and on-time project handovers.
          </p>
        </div>

        {/* Why Our Factory Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Why Our Factory Makes All the Difference
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyFactoryItems.map((item, index) => (
              <div key={index} className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                {item.note && (
                  <p className="text-muted-foreground text-sm mt-4 ml-16 italic">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What We Manufacture */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            What We Manufacture?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Our factory produces all modular furniture for homes and commercial spaces
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-serif font-bold text-primary mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Trust */}
        <div className="mb-20 bg-gradient-navy rounded-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Why Clients Trust Our Factory-Made Modular Work?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-1">{point.title}</h4>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
            Behind the Scenes – Our Factory Process
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            From design to installation, every step is meticulously executed
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg hover:bg-secondary/40 transition-colors">
                  <span className="w-8 h-8 rounded-full bg-gradient-gold text-primary-foreground text-sm flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img src={kitchenImage} alt="Kitchen production" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <img src={bedroomImage} alt="Wardrobe production" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img src={livingImage} alt="Living room production" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <img src={kitchenImage} alt="Factory work" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Factory Tour CTA */}
        <div className="bg-gradient-gold rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Want to Visit Our Factory?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience how your furniture is made — step-by-step. Book a factory tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 border-background"
              onClick={() => window.open("tel:+917769998244", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              7769998244
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 border-background"
              onClick={() => window.open("tel:+917720000742", "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              7720000742
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryOutletSection;
