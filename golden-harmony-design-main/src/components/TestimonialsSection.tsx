import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote:
      "They Design with Heart and Detail. Working with Pramod Yadav and the Richwood Interio team was a delight. They paid attention to every small detail — lighting, carpentry, and even the wall textures. What I loved most was how they blended modern aesthetics with comfort. Highly recommend them for anyone looking for custom home interiors that feel personal and premium.",
    author: "Ornate Interio",
    rating: 5,
  },
  {
    quote:
      "Truly Professional Interior Designers in Mumbai!I had an amazing experience with Richwood Interio. Their team understood exactly what I wanted for my 2BHK and turned every corner into something functional yet elegant. From modular kitchen to wardrobe design — everything was well-planned, on time, and beautifully finished. Easily one of the best interior design",
    author: "Suraj Chavan",
    rating: 5,
  },
  {
    quote:
      "The modular kitchen they designed is both beautiful and practical. Every inch of space has been utilized efficiently. The soft-close fittings and premium laminates make a huge difference. Very happy with the result!",
    author: "Ayush Dandriyal",
    rating: 5,
  },
  {
    quote:
      "Richwood Interio did an outstanding job on my home interiors. Their design ideas were modern yet practical, perfectly matching my lifestyle. The team communicated clearly at every step and delivered on time. I'm extremely happy with the overall look and quality of work.",
    author: "Tejasvi Gardi",
    rating: 5,
  },
  {
    quote:
      "Richwood Interio provided detailed 2D and 3D designs that made everything easy to visualize. The renders were clear, realistic, and helped me make quick decisions. They patiently revised designs based on my suggestions without any hesitation. The final execution matched the 3D visuals exactly, which impressed me the most.",
    author: "Bhumika Sutar",
    rating: 5,
  },
  {
    quote:
      "Richwood Interio did an outstanding job on my home interiors. Their design ideas were modern yet practical, perfectly matching my lifestyle. The team communicated clearly at every step and delivered on time. I'm extremely happy with the overall look and quality of work.",
    author: "Venu Mahajan",
    rating: 5,
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Client Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">What Our Clients Say</h1>
          <p className="text-muted-foreground">
            Don't just take our word for it—hear from the homeowners and businesses we've had the pleasure of working
            with
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div className="bg-secondary/30 rounded-xl p-6 h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{testimonial.quote}"</p>

                    {/* Author */}
                    <p className="font-semibold text-foreground">— {testimonial.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 bg-primary/10 border-primary/30 hover:bg-primary/20" />
              <CarouselNext className="static translate-y-0 bg-primary/10 border-primary/30 hover:bg-primary/20" />
            </div>
          </Carousel>
        </div>

        {/* Stats Counter Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
