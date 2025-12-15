import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Eye, ExternalLink } from "lucide-react";
import kitchenImage from "@/assets/kitchen-1.jpg";
import bedroomImage from "@/assets/bedroom-1.jpg";
import livingImage from "@/assets/living-1.jpg";
import officeImage from "@/assets/office-1.jpg";
import heroImage from "@/assets/hero-interior.jpg";

// Video portfolio items - YouTube and Instagram
const videoProjects = [
  {
    title: "Luxury Living Room Transformation",
    description: "Complete makeover of a modern living space with premium finishes",
    platform: "youtube",
    videoId: "7pD9uYY6KXM", // Replace with actual video ID
    views: "1.2M views",
    duration: "8:24",
  },
  {
    title: "Modular Kitchen Design Walkthrough",
    description: "Step-by-step tour of our premium modular kitchen installation",
    platform: "youtube",
    videoId: "8aYf798VM4U", // Replace with actual video ID
    views: "856K views",
    duration: "12:15",
  },
  {
    title: "Master Bedroom Interior Design",
    description: "Elegant bedroom design featuring custom wardrobes and lighting",
    platform: "youtube",
    videoId: "kNNShJYwLzs", // Replace with actual video ID
    views: "2.1M views",
    duration: "6:45",
  },
  {
    title: "Office Space Redesign Project",
    description: "Corporate office transformation for enhanced productivity",
    platform: "youtube",
    videoId: "xz2VqDSPIvM", // Replace with actual video ID
    views: "1.8M views",
    duration: "10:30",
  },
];

// Instagram Reels
const instagramReels = [
  {
    title: "Modern Living Room Makeover",
    description: "A quick glimpse of this beautiful transformation",
    platform: "instagram",
    embedCode: "DNs-rc7WLuo",
    views: "320K views",
  },
  {
    title: "Cozy Home Decor Ideas",
    description: "Quick reel showing simple and stylish decor tips for every room",
    platform: "instagram",
    embedCode: "DJQqQvpy4za",
    views: "385K views",
  },
];

// Image projects
const imageProjects = [
  {
    title: "Serene Residence",
    description: "Luxury villa featuring minimalist design and seamless indoor-outdoor living",
    image: heroImage,
  },
  {
    title: "Corporate Headquarters",
    description: "Modern office space designed to inspire productivity and collaboration",
    image: officeImage,
  },
  {
    title: "Contemporary Villa",
    description: "A sophisticated urban home blending contemporary aesthetics with traditional warmth",
    image: livingImage,
  },
  {
    title: "Luxury Penthouse",
    description: "High-end penthouse with panoramic views and premium finishes",
    image: bedroomImage,
  },
  {
    title: "Designer Kitchen",
    description: "Custom modular kitchen with premium materials and smart storage solutions",
    image: kitchenImage,
  },
  {
    title: "Boutique Hotel",
    description: "Elegant hospitality space with unique character and memorable experiences",
    image: heroImage,
  },
];

const PortfolioSection = () => {
  const handleYouTubeClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/richwoodinterio/", "_blank");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Spaces That <span className="text-gradient-gold">Inspire</span>
          </h1>
          <span className="text-primary font-medium font-serif italic">Our Portfolio</span>
          <p className="text-muted-foreground mt-4 font-light">
            Explore our curated collection of exceptional design projects across residential, commercial, and
            architectural domains
          </p>
        </div>

        {/* Video Portfolio Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-2">
            Video <span className="text-gradient-gold">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 font-light">
            Watch our design transformations come to life
          </p>

          {/* YouTube Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {videoProjects.map((video, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleYouTubeClick(video.videoId)}
              >
                {/* YouTube Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600 rounded-full p-4 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 rounded text-xs font-medium">
                    {video.duration}
                  </div>

                  {/* YouTube Badge */}
                  <div className="absolute top-3 left-3 bg-red-600 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1">
                    <Play className="w-3 h-3 fill-white" />
                    YouTube
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 font-light">{video.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <ExternalLink className="w-3 h-3" />
                      <span>Watch on YouTube</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Reels */}
          <h3 className="text-2xl font-serif font-bold text-center mb-2">
            Instagram <span className="text-gradient-gold">Reels</span>
          </h3>
          <p className="text-muted-foreground text-center mb-8 font-light">Quick design inspiration on Instagram</p>

          <div className="grid md:grid-cols-2 gap-8">
            {instagramReels.map((reel, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[2px] cursor-pointer"
                onClick={handleInstagramClick}
              >
                <div className="bg-card rounded-xl overflow-hidden">
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                      <p className="text-muted-foreground text-sm font-light">Click to view on Instagram</p>
                    </div>

                    {/* Instagram Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-3 py-1 rounded-full text-xs font-medium text-white">
                      Instagram Reel
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {reel.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2 font-light">{reel.description}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{reel.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-pink-500">
                        <ExternalLink className="w-3 h-3" />
                        <span>View on Instagram</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Projects Section */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-center mb-2">
            Project <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-center mb-10 font-light">
            Explore our completed interior design projects
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 font-light">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Follow Us for More <span className="text-gradient-gold">Inspiration</span>
          </h3>
          <p className="text-muted-foreground mb-6 font-light">Stay updated with our latest projects and design tips</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              onClick={() => window.open("https://www.youtube.com/@RichwoodInterio", "_blank")}
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Subscribe on YouTube
            </Button>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:border-transparent"
              onClick={() => window.open("https://www.instagram.com/richwoodinterio/", "_blank")}
            >
              Follow on Instagram
            </Button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
