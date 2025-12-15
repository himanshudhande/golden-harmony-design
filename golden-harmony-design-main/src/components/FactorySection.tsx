import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import kitchenImage from "@/assets/kitchen-1.jpg";

const FactorySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Factory Outlet
          </h1>
          <p className="text-primary font-medium italic mb-4">
            Precision. Quality. Reliability.
          </p>
          <p className="text-xl text-muted-foreground">
            Where Your Modular Furniture Truly Comes to Life.
          </p>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-center text-lg">
            At Richwood Interio, great design is only the beginning. The true magic happens inside our state-of-the-art in-house factory, where every piece of modular furniture is crafted with engineering accuracy, premium materials, and strict quality checks. This facility is the backbone of our brand — the reason we deliver exceptional finish, consistent quality, and on-time project handovers.
          </p>
        </div>

        {/* Why Factory Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Why Our Factory Makes All the Difference
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* 1. 100% In-House Manufacturing */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              1. 100% In-House Manufacturing – No Outsourcing
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Every wardrobe, kitchen, unit, and storage solution is built at our own production unit. This ensures:
            </p>
            <ul className="space-y-2">
              {["Better quality control", "Faster delivery timelines", "Consistent finishes", "Accountability at every stage"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Advanced Machinery */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              2. Advanced German & Italian Machinery
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Our factory is equipped with:
            </p>
            <ul className="space-y-2">
              {["CNC cutting machines", "Edge banders", "Multi-bore machines", "Precision laminators", "Automated polish stations"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3 italic">
              This ensures seamless edges, perfect alignments, and long-lasting durability.
            </p>
          </div>

          {/* 3. Premium Materials */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              3. Premium Raw Materials & Hardware
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              We use only:
            </p>
            <ul className="space-y-2">
              {["Marine-grade plywood", "Anti-termite & anti-fungal boards", "Branded hinges & channels", "Soft-close fittings", "High-end laminates / acrylic / PU polish"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3 italic">
              Every material undergoes inspection before production begins.
            </p>
          </div>

          {/* 4. Skilled Team */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              4. Skilled Technicians & Experienced Carpenters
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Our factory team includes:
            </p>
            <ul className="space-y-2">
              {["Modular carpenters", "Polish experts", "CNC specialists", "Quality inspectors", "Assembly technicians"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3 italic">
              Their experience ensures craftsmanship that looks elegant and lasts long.
            </p>
          </div>

          {/* 5. Quality Checking */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              5. Multiple-Stage Quality Checking
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              We follow a strict 7-step QC process:
            </p>
            <ul className="space-y-2">
              {["Raw material inspection", "Cutting accuracy check", "Edge banding quality", "Internal structure strength test", "Finishing inspection", "Assembly precision check", "Packaging quality check"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3 italic font-medium">
              Nothing leaves the factory without final approval.
            </p>
          </div>

          {/* 6. Customisation */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              6. Customisation at Its Best
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Every home is unique — and so is every module we produce. Our factory allows us to offer:
            </p>
            <ul className="space-y-2">
              {["Custom sizes", "Custom colours", "Custom fittings", "Custom layouts", "Custom finishes (matt, glossy, textured, PU, veneer)"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3 italic font-medium">
              Your imagination becomes our blueprint.
            </p>
          </div>

          {/* 7. Faster Execution */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-all md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-3 text-primary">
              7. Faster Execution & On-Time Delivery
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Because we control production in-house, we can promise:
            </p>
            <ul className="space-y-2">
              {["Faster fabrication", "Smooth site installation", "Zero delays due to vendors"].map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-3 italic font-medium">
              This keeps your project stress-free and predictable.
            </p>
          </div>
        </div>

        {/* What We Manufacture */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              What We Manufacture?
            </h2>
            <p className="text-muted-foreground mt-2">
              Our factory produces all modular furniture for homes and commercial spaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Modular Kitchens */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Modular Kitchens</h3>
              <ul className="space-y-2">
                {["Base units", "Wall units", "Tall units", "Cutlery & tandem systems", "Shutters and finishes"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wardrobes */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Wardrobes</h3>
              <ul className="space-y-2">
                {["Hinged", "Sliding", "Walk-in units", "Linen storage", "Accessory units"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wall Units */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Modular Wall Units</h3>
              <ul className="space-y-2">
                {["TV units", "Crockery units", "Bar units"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Storage Solutions */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Storage Solutions</h3>
              <ul className="space-y-2">
                {["Shoe racks", "Bookshelves", "Utility units"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial */}
            <div className="bg-card rounded-xl p-6 border border-border md:col-span-2 lg:col-span-2">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Commercial Modular Production</h3>
              <ul className="grid grid-cols-2 gap-2">
                {["Office workstations", "Reception counters", "Storage systems", "Breakout units"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Clients Trust */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Why Clients Trust Our Factory-Made Modular Work?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Durable", desc: "Built with strong internal structure, branded hinges, and moisture-resistant boards." },
              { title: "Perfect Finish", desc: "Thanks to machine-driven polish, cutting, and edge banding." },
              { title: "No On-Site Mess", desc: "Modules are pre-fabricated and installed neatly at your home." },
              { title: "Uniform & Premium Look", desc: "Because everything is produced using systematic technology." },
              { title: "Long-Term Warranty", desc: "Factory finish ensures long life and consistent quality." },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-navy rounded-xl p-5 text-center">
                <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-3">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <h4 className="font-serif font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Factory Process */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Behind the Scenes – Our Factory Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { step: 1, title: "Design Finalisation", desc: "Your design, measurements, and material choices are translated into production drawings." },
                { step: 2, title: "Cutting & Sizing", desc: "Boards are cut with millimetre-level precision using CNC machines." },
                { step: 3, title: "Edge Banding", desc: "Every edge is sealed to avoid moisture and improve aesthetic." },
                { step: 4, title: "Drilling & Assembly Prep", desc: "Holes and joints are made exactly as per design requirements." },
                { step: 5, title: "Finishing Stage", desc: "Acrylic, laminate, veneer, or PU polish is completed here." },
                { step: 6, title: "Quality Check", desc: "Our QC team verifies strength, finish, and alignment." },
                { step: 7, title: "Packing & Dispatch", desc: "Ready modules are safely packed and reach your site." },
                { step: 8, title: "Installation", desc: "Our trained team installs everything systematically." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-gold text-primary-foreground text-sm flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-serif font-bold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={kitchenImage}
                alt="Factory Process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Factory Tour CTA */}
        <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Want to Visit Our Factory?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-6">
            Experience how your furniture is made — step-by-step.
          </p>
          <p className="text-primary-foreground font-bold text-xl mb-6">
            Book a factory tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:7769998244" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                7769998244
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:7720000742" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                7720000742
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorySection;
