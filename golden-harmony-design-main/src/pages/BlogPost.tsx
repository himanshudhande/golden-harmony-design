import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "art-of-modular-kitchen-design",
    title: "The Art of Modular Kitchen Design",
    excerpt: "Discover the secrets to creating a functional yet beautiful modular kitchen that transforms your cooking experience.",
    author: "Richwood Team",
    date: "December 10, 2024",
    category: "Kitchen Design",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
    content: `
      <p>A modular kitchen is more than just a cooking space—it's the heart of your home where functionality meets aesthetics. At Richwood Interio, we believe that every kitchen should be designed to reflect your lifestyle while maximizing efficiency.</p>
      
      <h2>Understanding Your Space</h2>
      <p>Before diving into design choices, it's crucial to understand the dimensions and layout of your kitchen space. Consider the work triangle—the relationship between your sink, stove, and refrigerator. This fundamental principle ensures smooth workflow during cooking.</p>
      
      <h2>Choosing the Right Materials</h2>
      <p>The materials you choose for your modular kitchen will determine its durability and appearance. High-quality laminates, acrylic finishes, and solid wood options each offer unique benefits. We recommend choosing materials that balance aesthetics with maintenance requirements.</p>
      
      <h2>Storage Solutions</h2>
      <p>Effective storage is the backbone of any modular kitchen. From pull-out drawers to corner carousel units, modern solutions help you utilize every inch of space. Consider your cooking habits and storage needs when planning cabinet layouts.</p>
      
      <h2>Lighting Matters</h2>
      <p>Proper lighting transforms your kitchen experience. Combine ambient lighting with task lighting under cabinets to create a well-lit workspace. Consider adding accent lights to showcase your beautiful backsplash or display areas.</p>
      
      <h2>The Richwood Approach</h2>
      <p>At Richwood Interio, we take a personalized approach to kitchen design. We listen to your needs, understand your cooking style, and create a space that's uniquely yours. Our expert craftsmen ensure every detail is perfect, from the cabinet hinges to the countertop edges.</p>
    `,
  },
  {
    id: "wardrobe-storage-solutions",
    title: "Wardrobe Storage Solutions for Modern Homes",
    excerpt: "Maximize your storage space with innovative wardrobe designs that combine elegance with practicality.",
    author: "Richwood Team",
    date: "December 5, 2024",
    category: "Wardrobe Design",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&auto=format&fit=crop",
    content: `
      <p>Your wardrobe is more than just storage—it's a personal sanctuary where you start and end your day. A well-designed wardrobe can transform your morning routine and keep your belongings organized and accessible.</p>
      
      <h2>Assessing Your Needs</h2>
      <p>Before designing your wardrobe, take inventory of your clothing and accessories. How many shirts, pants, and dresses do you own? Do you have a collection of shoes or accessories that need special storage? Understanding your needs helps us create the perfect solution.</p>
      
      <h2>Maximizing Vertical Space</h2>
      <p>Modern homes often lack horizontal space, making it essential to think vertically. Double hanging rods, overhead storage, and built-in drawers help you utilize every inch of available space effectively.</p>
      
      <h2>Accessory Organization</h2>
      <p>Dedicated compartments for ties, belts, jewelry, and watches keep your accessories visible and accessible. Pull-out trays and velvet-lined drawers add a touch of luxury while protecting your valuables.</p>
      
      <h2>Lighting and Mirrors</h2>
      <p>Integrated LED lighting illuminates your wardrobe contents, making it easy to find what you need. Full-length mirrors and internal mirrors add functionality while making the space feel larger.</p>
      
      <h2>Custom Solutions by Richwood</h2>
      <p>Every wardrobe we create at Richwood Interio is custom-designed to fit your space and lifestyle. From walk-in closets to compact built-in wardrobes, we craft solutions that are both beautiful and practical.</p>
    `,
  },
  {
    id: "interior-design-trends-2025",
    title: "Interior Design Trends for 2025",
    excerpt: "Stay ahead of the curve with the latest interior design trends that will dominate homes in the coming year.",
    author: "Richwood Team",
    date: "November 28, 2024",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
    content: `
      <p>As we approach 2025, interior design is evolving to embrace sustainability, technology, and a return to craftsmanship. Here are the trends that will shape homes in the coming year.</p>
      
      <h2>Sustainable Materials</h2>
      <p>Eco-conscious design is no longer optional—it's essential. Expect to see more bamboo, recycled materials, and sustainably sourced woods in furniture and finishes. At Richwood, we're committed to offering sustainable options without compromising on quality.</p>
      
      <h2>Warm Minimalism</h2>
      <p>The cold, stark minimalism of the past is giving way to warm minimalism. Think clean lines and uncluttered spaces, but with warm colors, natural textures, and comfortable furnishings that make spaces feel inviting.</p>
      
      <h2>Smart Home Integration</h2>
      <p>Technology continues to shape our homes. From voice-controlled lighting to automated window treatments, smart home features are becoming seamlessly integrated into design. We design furniture and spaces that accommodate and enhance these technologies.</p>
      
      <h2>Curved Furniture</h2>
      <p>Soft, curved forms are replacing sharp angles. Rounded sofas, arched doorways, and organic shapes create a sense of flow and comfort in living spaces.</p>
      
      <h2>Artisanal Craftsmanship</h2>
      <p>There's a growing appreciation for handcrafted pieces with visible craftsmanship. At Richwood Interio, our artisanal approach to furniture making aligns perfectly with this trend—every piece we create tells a story of skilled hands and attention to detail.</p>
    `,
  },
  {
    id: "choosing-right-materials",
    title: "Choosing the Right Materials for Your Furniture",
    excerpt: "A comprehensive guide to selecting durable and aesthetic materials for your custom furniture.",
    author: "Richwood Team",
    date: "November 20, 2024",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop",
    content: `
      <p>The materials you choose for your furniture determine not just how it looks, but how it performs over time. Understanding your options helps you make informed decisions that you'll be happy with for years to come.</p>
      
      <h2>Solid Wood Options</h2>
      <p>Teak, sheesham, and oak are popular choices for their durability and natural beauty. Each wood has unique characteristics—teak is moisture-resistant, sheesham has beautiful grain patterns, and oak offers strength and versatility.</p>
      
      <h2>Engineered Wood</h2>
      <p>MDF, plywood, and particle board offer cost-effective alternatives to solid wood. High-quality engineered wood with proper finishing can be durable and beautiful, making it perfect for modular furniture.</p>
      
      <h2>Laminates and Veneers</h2>
      <p>Laminates offer endless design possibilities with consistent quality and easy maintenance. Veneers provide the beauty of natural wood at a lower cost. Both options can create stunning finishes for modern interiors.</p>
      
      <h2>Hardware and Fittings</h2>
      <p>The quality of hinges, drawer slides, and handles significantly impacts furniture longevity. We use premium hardware from trusted brands to ensure smooth operation for years.</p>
      
      <h2>The Richwood Difference</h2>
      <p>We source our materials from trusted suppliers and never compromise on quality. Our team helps you understand the pros and cons of each option, ensuring you make the best choice for your needs and budget.</p>
    `,
  },
  {
    id: "space-planning-small-apartments",
    title: "Space Planning Tips for Small Apartments",
    excerpt: "Transform your compact living space into a functional and stylish home with these expert tips.",
    author: "Richwood Team",
    date: "November 15, 2024",
    category: "Space Planning",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
    content: `
      <p>Living in a small apartment doesn't mean sacrificing style or functionality. With smart planning and the right furniture choices, you can create a space that feels open, organized, and uniquely yours.</p>
      
      <h2>Multi-Functional Furniture</h2>
      <p>Invest in furniture that serves multiple purposes. A sofa bed for guests, a dining table that doubles as a workspace, or an ottoman with hidden storage—these pieces maximize utility without cluttering your space.</p>
      
      <h2>Vertical Storage Solutions</h2>
      <p>When floor space is limited, think vertical. Wall-mounted shelves, tall bookcases, and overhead cabinets help you store more without taking up valuable floor area.</p>
      
      <h2>Light and Color</h2>
      <p>Light colors and strategic lighting make small spaces feel larger. Use mirrors to reflect light and create the illusion of depth. Choose furniture with legs to allow light to flow underneath.</p>
      
      <h2>Declutter Regularly</h2>
      <p>In small spaces, clutter is the enemy. Regular decluttering and having designated storage for everything helps maintain a sense of order and spaciousness.</p>
      
      <h2>Custom Solutions</h2>
      <p>Off-the-shelf furniture often doesn't fit perfectly in small or oddly shaped spaces. Custom furniture designed specifically for your space ensures every inch is utilized effectively. That's where Richwood Interio excels—creating bespoke solutions for compact living.</p>
    `,
  },
  {
    id: "benefits-custom-made-furniture",
    title: "The Benefits of Custom-Made Furniture",
    excerpt: "Why investing in bespoke furniture is worth every penny for your dream home.",
    author: "Richwood Team",
    date: "November 8, 2024",
    category: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    content: `
      <p>In a world of mass-produced furniture, custom-made pieces stand out for their quality, fit, and personal meaning. Here's why investing in bespoke furniture is a decision you won't regret.</p>
      
      <h2>Perfect Fit</h2>
      <p>Custom furniture is designed specifically for your space. No awkward gaps, no pieces that are too big or too small. Every inch is utilized efficiently, creating a cohesive look that ready-made furniture simply cannot achieve.</p>
      
      <h2>Quality Materials</h2>
      <p>When you choose custom, you choose the materials. From the wood type to the finish, every element is selected based on your preferences and quality standards. The result is furniture that looks better and lasts longer.</p>
      
      <h2>Personal Expression</h2>
      <p>Your home should reflect who you are. Custom furniture allows you to express your personality through design choices, colors, and details that resonate with your style.</p>
      
      <h2>Built to Last</h2>
      <p>Mass-produced furniture is often designed for a limited lifespan. Custom pieces are built with longevity in mind, using superior construction techniques and materials that stand the test of time.</p>
      
      <h2>The Richwood Promise</h2>
      <p>At Richwood Interio, every piece we create is a testament to craftsmanship and attention to detail. We work closely with you throughout the design process, ensuring the final product exceeds your expectations. When you invest in Richwood, you invest in quality that lasts generations.</p>
    `,
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Post Not Found</h1>
          <Button variant="gold" asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-xl mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-foreground prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Navigation */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex justify-between items-center gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  <div className="text-left">
                    <span className="text-xs block">Previous</span>
                    <span className="font-medium text-sm line-clamp-1">{prevPost.title}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-right"
                >
                  <div>
                    <span className="text-xs block">Next</span>
                    <span className="font-medium text-sm line-clamp-1">{nextPost.title}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-8 bg-card border border-border rounded-xl">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              Ready to Transform Your Space?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and bring your vision to life.
            </p>
            <Button variant="gold" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default BlogPost;
