import kitchenImage from "@/assets/kitchen-1.jpg";
import bedroomImage from "@/assets/bedroom-1.jpg";
import livingImage from "@/assets/living-1.jpg";
import heroImage from "@/assets/hero-interior.jpg";

const images = [kitchenImage, bedroomImage, livingImage, heroImage];

const OurCraft = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            OUR CRAFT
          </span>
          <p className="text-muted-foreground mt-2">
            Handpicked interiors reflecting Richwood's passion for detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Interior ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCraft;
