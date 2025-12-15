import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "art-of-modular-kitchen-design",
    title: "The Art of Modular Kitchen Design",
    excerpt: "Discover the secrets to creating a functional yet beautiful modular kitchen that transforms your cooking experience.",
    author: "Richwood Team",
    date: "December 10, 2024",
    category: "Kitchen Design",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
  },
  {
    id: "wardrobe-storage-solutions",
    title: "Wardrobe Storage Solutions for Modern Homes",
    excerpt: "Maximize your storage space with innovative wardrobe designs that combine elegance with practicality.",
    author: "Richwood Team",
    date: "December 5, 2024",
    category: "Wardrobe Design",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&auto=format&fit=crop",
  },
  {
    id: "interior-design-trends-2025",
    title: "Interior Design Trends for 2025",
    excerpt: "Stay ahead of the curve with the latest interior design trends that will dominate homes in the coming year.",
    author: "Richwood Team",
    date: "November 28, 2024",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
  },
  {
    id: "choosing-right-materials",
    title: "Choosing the Right Materials for Your Furniture",
    excerpt: "A comprehensive guide to selecting durable and aesthetic materials for your custom furniture.",
    author: "Richwood Team",
    date: "November 20, 2024",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop",
  },
  {
    id: "space-planning-small-apartments",
    title: "Space Planning Tips for Small Apartments",
    excerpt: "Transform your compact living space into a functional and stylish home with these expert tips.",
    author: "Richwood Team",
    date: "November 15, 2024",
    category: "Space Planning",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
  },
  {
    id: "benefits-custom-made-furniture",
    title: "The Benefits of Custom-Made Furniture",
    excerpt: "Why investing in bespoke furniture is worth every penny for your dream home.",
    author: "Richwood Team",
    date: "November 8, 2024",
    category: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Design <span className="text-gradient-gold">Insights</span>
          </h1>
          <span className="text-primary font-medium font-serif italic">Our Blog</span>
          <p className="text-muted-foreground mt-4 font-light">
            Explore our collection of design tips, trends, and inspiration to help you create your perfect space
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-elegant block"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Read More */}
                <span className="flex items-center gap-2 text-primary font-medium text-sm group/btn hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" asChild>
            <Link to="/contact">Get Design Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
