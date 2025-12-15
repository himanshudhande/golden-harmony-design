import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import livingImage from "@/assets/living-1.jpg";
import officeImage from "@/assets/office-1.jpg";
import kitchenImage from "@/assets/kitchen-1.jpg";

const projects = [
  {
    category: "RESIDENTIAL",
    title: "Luxury Residential",
    image: livingImage,
  },
  {
    category: "COMMERCIAL",
    title: "Modern Corporate",
    image: officeImage,
  },
  {
    category: "MODULAR",
    title: "Designer Kitchen",
    image: kitchenImage,
  },
];

const OurWorkPreview = () => {
  return (
    <section className="py-16 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Work
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif font-bold text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="goldOutline" asChild>
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkPreview;
