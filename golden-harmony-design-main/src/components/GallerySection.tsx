import kitchenImage from "@/assets/kitchen-1.jpg";
import bedroomImage from "@/assets/bedroom-1.jpg";
import livingImage from "@/assets/living-1.jpg";
import officeImage from "@/assets/office-1.jpg";
import heroImage from "@/assets/hero-interior.jpg";

const images = [
  kitchenImage,
  bedroomImage,
  livingImage,
  officeImage,
  heroImage,
  kitchenImage,
  livingImage,
  bedroomImage,
  heroImage,
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            GALLERY
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
