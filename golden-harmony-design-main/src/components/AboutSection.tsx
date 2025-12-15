import livingImage from "@/assets/living-1.jpg";
import { MapPin, Clock, Heart, Eye, Shield, Sparkles, Target, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Personal Connection",
      description:
        "We listen before we design. Every project starts with your story, your habits, and your aspirations.",
    },
    {
      icon: Shield,
      title: "Honesty & Transparency",
      description: "From costing to timelines, we ensure clarity and trust at every stage.",
    },
    {
      icon: Sparkles,
      title: "Detail-Driven Craftsmanship",
      description:
        "We believe beauty lies in the small, thoughtful details — the finishes, the fittings, the textures, the touch.",
    },
    {
      icon: Target,
      title: "Responsibility & Commitment",
      description: "We treat every home as if it were our own, ensuring quality, safety, and long-term comfort.",
    },
    {
      icon: Eye,
      title: "Innovation with Purpose",
      description:
        "Trends inspire us, but your lifestyle guides us. We innovate only to enhance functionality and feeling — not to overwhelm.",
    },
    {
      icon: Award,
      title: "Excellence, Always",
      description: "From the first sketch to the final polish, we strive for perfection that lasts years, not months.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 1. About Us - Hero Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">About Us</h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mt-2 mb-4">Crafting Timeless Spaces</h1>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Richwood Interio is a premium interior and architectural design firm built on one simple foundation — to
              create "feelings" that last a lifetime.
            </p>
            <p>
              With a deep understanding of modern lifestyles, evolving tastes, and practical living, we design and build
              spaces that elevate your everyday life. Whether it's your dream home, a commercial space, a modular
              upgrade, or a complete transformation — we aim for designs that are visually stunning, intelligently
              planned, and emotionally comforting.
            </p>

            <h3 className="text-xl font-serif font-bold text-foreground pt-4">What Makes Us Different?</h3>
            <p>
              Unlike many firms where design and execution run separately, Richwood Interio ensures architect-led
              planning, technical precision, and flawless execution — everything under one roof. This means fewer
              errors, transparent costing, consistent communication, and a seamless journey from ideas to reality.
            </p>

            <p className="font-medium text-foreground">Our design style blends:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Clean modern aesthetics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Thoughtful space planning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Natural colors & textures
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                High-quality materials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Functionality-centered layouts
              </li>
            </ul>

            <p>
              Every project receives personal attention from the founder and the core creative team.{" "}
              <span className="font-medium text-foreground">
                Your space becomes our responsibility — your comfort becomes our priority.
              </span>
            </p>

            <h3 className="text-xl font-serif font-bold text-foreground pt-4">Our Approach:</h3>
            <p>
              We don't follow trends blindly.
              <br />
              We don't rush designs.
              <br />
              We don't overpromise or oversell.
            </p>
            <p>
              Instead, we focus on understanding you — the way you live, cook, relax, entertain, sleep, store, and feel
              at home. Then we design a space that supports your life beautifully.
            </p>
            <p>
              At Richwood Interio, our work doesn't end at designing. We stay until the last finish, the last hinge, the
              last inspection, and the last walkthrough — because your trust matters more than anything.
            </p>

            <h3 className="text-xl font-serif font-bold text-foreground pt-4">Our Promise:</h3>
            <ul className="space-y-2">
              <li>To create spaces that are not just designed today, but felt forever.</li>
              <li>To bring honesty into budgeting, responsibility into execution, and soul into design.</li>
              <li>To ensure that every Richwood project becomes a space you proudly call home.</li>
            </ul>
          </div>
        </div>

        {/* 2. Founder's Note */}
        <div className="bg-secondary/30 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-wider uppercase mb-6">
            FOUNDER'S NOTE — Pramod Jawahar Yadav
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Growing up, I always believed that a home is not just a space you live in — it's a feeling that shapes who
              you become. Every corner, every texture, every shade silently influences your comfort, your clarity, your
              inspiration, and ultimately your everyday happiness.
            </p>
            <p>
              Richwood Interio was born from this very belief. Not from the desire to create "beautiful rooms," but from
              a deeper purpose — to create spaces you emotionally connect with; spaces that breathe warmth, purpose, and
              identity.
            </p>
            <p>
              As an architect, I've walked through empty flats, old homes filled with memories, unfinished sites, and
              raw structures where families imagined their future. Every project taught me something priceless:
            </p>
            <p className="font-medium text-foreground italic">
              "People don't remember designs… they remember how the space makes them feel."
            </p>
            <p>
              That "feeling" is our foundation. That "feeling" is our promise. That "feeling" is what stays forever.
            </p>
            <p>
              At Richwood Interio, we don't sell designs — we craft experiences. We listen. We understand your
              lifestyle, your habits, your routines, and your aspirations. Then we turn them into spaces where you feel
              comfort, pride, and peace every single day.
            </p>
            <p>
              My team and I take responsibility for your trust — from concept to execution, from budgeting to the
              finishing touch. We design as if the space is ours, and we execute with the integrity that your family
              deserves.
            </p>
            <p>
              Thank you for allowing us to be a small part of your big journey. Your home is a lifetime imprint — and we
              promise to make it unforgettable.
            </p>
            <p className="mt-6">
              Warmly,
              <br />
              <span className="font-semibold text-foreground">Pramod Jawahar Yadav</span>
              <br />
              <span className="text-sm">Founder & Principal Architect, Richwood Interio</span>
            </p>
          </div>
        </div>

        {/* 3. Meet Our Founder */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">MEET OUR FOUNDER</h2>
            <h3 className="text-xl font-serif mb-2">Pramod Jawahar Yadav</h3>
            <p className="text-primary text-sm mb-6">Architect | Creative Director | Vision Behind Richwood Interio</p>

            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                From a young age, Pramod believed that a home is not built with cement and bricks — it is built with
                love, memories, warmth, and identity.
              </p>
              <p>
                As he grew up, he became fascinated by how spaces could influence emotions. A simple corner with the
                right lighting could feel like comfort. A thoughtfully designed kitchen could bring the whole family
                together. A bedroom with the right textures could make someone feel safe, rested, and understood.
              </p>
              <p>
                This sensitivity toward human behavior and spatial harmony gradually turned into a passion — and,
                eventually, a profession.
              </p>
              <p>
                Pramod pursued Architecture with the conviction that design is not decoration; design is emotion,
                psychology, and problem-solving.
              </p>
              <p>
                Pramod personally leads every project with a hands-on approach — meeting clients, studying their
                lifestyle, designing their layout, selecting materials, and supervising execution throughout.
              </p>
              <p className="font-medium text-foreground italic">
                "Every home must reflect the person who lives in it — not the designer who created it."
              </p>
            </div>

            <h4 className="font-semibold mt-6 mb-3">Today, Pramod is known for:</h4>
            <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
              <li>Clean, modern design</li>
              <li>Intelligent space optimization</li>
              <li>Premium material knowledge</li>
              <li>Honest and transparent budgeting</li>
              <li>End-to-end architectural expertise</li>
              <li>Deep connection with clients and their emotional needs</li>
            </ul>

            <p className="text-muted-foreground text-sm mt-4">
              For him, every project is not a contract — it is a responsibility to create a space where someone will
              laugh, grow, celebrate, rest, and truly live.
            </p>
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <img src={livingImage} alt="Pramod Jawahar Yadav" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 4. Design Philosophy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary tracking-wider uppercase mb-6">
            DESIGN PHILOSOPHY
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Design is not just what we create — it's what you feel when you enter your home after a long day. At
            Richwood Interio, our philosophy is rooted in warmth, simplicity, and human emotion. We believe that good
            interiors should make life smoother, and great interiors should make life beautiful.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">We design with:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
            {[
              { label: "Heart", desc: "understanding you deeply" },
              { label: "Purpose", desc: "ensuring practicality" },
              { label: "Aesthetics", desc: "reflecting your unique style" },
              { label: "Longevity", desc: "crafting spaces that age gracefully" },
            ].map((item, index) => (
              <div key={index} className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-semibold text-primary">{item.label}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Every colour we choose, every material we select, and every corner we shape carries one silent promise:{" "}
            <span className="font-semibold text-foreground">to give you a feeling that stays forever.</span>
          </p>
        </div>

        {/* 5. What Makes Us Different */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">WHAT MAKES US DIFFERENT?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-center">
            Unlike many firms where design and execution work separately, Richwood Interio ensures architect-led
            planning, technical precision, and flawless execution — all under one roof. This results in fewer errors,
            transparent costing, consistent communication, and a seamless journey from ideas to reality.
          </p>

          <h4 className="font-semibold mb-4 text-center">Our design style blends:</h4>
          <ul className="text-muted-foreground space-y-2 mb-8 max-w-md mx-auto">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Clean, modern aesthetics
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Thoughtful space planning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Natural colours and textures
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              High-quality materials
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Functionality-centered layouts
            </li>
          </ul>

          <p className="text-muted-foreground leading-relaxed text-center">
            Every project receives personal attention from the founder and the core creative team.
            <br />
            <span className="font-medium text-foreground">
              Your space becomes our responsibility — and your comfort becomes our priority.
            </span>
          </p>
        </div>

        {/* 6. Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-secondary/50 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-primary">OUR VISION</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To be recognized as India's most trusted and innovative interior design studio, setting new benchmarks in
              design excellence and client satisfaction. We envision a future where every space we create becomes a
              testament to timeless elegance, sustainable practices, and the power of thoughtful design to transform
              lives.
            </p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-primary">OUR MISSION</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To transform ordinary spaces into extraordinary environments that inspire, comfort, and elevate the human
              experience. We are committed to delivering personalized design solutions that blend aesthetics with
              functionality, exceeding client expectations through innovation, quality craftsmanship, and unwavering
              dedication to excellence.
            </p>
          </div>
        </div>

        {/* 7. Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-secondary/30 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Our Location */}
        <div className="bg-gradient-navy rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">OUR LOCATION</h2>
            <p className="text-muted-foreground">
              Find us in the heart of the city, where creativity meets craftsmanship for your dream interiors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-secondary/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Shop No. C/5, Malanje Ground,
                    <br />
                    Near Jakat Naka Signal,
                    <br />
                    Below Ichhapurti Hotel, Virar West,
                    <br />
                    Mumbai – 401303
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Hours</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Monday - Sunday: 9:30am - 9:00pm
                    <br />
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
