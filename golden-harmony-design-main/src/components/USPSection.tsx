import { Factory, Cog, Shield, Users, ClipboardCheck, Palette } from "lucide-react";

const uspItems = [
  {
    icon: Palette,
    title: "Premium Yet Practical Designs",
    description: "Luxury aesthetics combined with everyday functionality for homes that inspire.",
  },
  {
    icon: Cog,
    title: "3D Visualisation Before Execution",
    description: "See your space come alive before a single nail is hammered.",
  },
  {
    icon: Factory,
    title: "Factory-Finished Perfection",
    description: "Every module is machine-crafted for flawless finish and lasting quality.",
  },
  {
    icon: Shield,
    title: "After-Project Support & Warranty",
    description: "We stand by our work with dedicated after-sales support and warranty coverage.",
  },
  {
    icon: ClipboardCheck,
    title: "Strong Focus on Space Optimisation",
    description: "Every inch is utilised intelligently for maximum storage and comfort.",
  },
  {
    icon: Users,
    title: "Personalised, Non-Template Designs",
    description: "No cookie-cutter solutions — only designs crafted uniquely for you.",
  },
];

const USPSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            OUR USP
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
            Why Richwood Interio Stands Apart
          </h2>
          <p className="text-muted-foreground">
            Factory-backed precision. Premium materials. Unmatched craftsmanship.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
