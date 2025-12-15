import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Home, Building2, Compass, Key, Layout, ChevronDown } from "lucide-react";
import kitchenImage from "@/assets/kitchen-1.jpg";
import bedroomImage from "@/assets/bedroom-1.jpg";
import livingImage from "@/assets/living-1.jpg";
import officeImage from "@/assets/office-1.jpg";

const services = [
  {
    id: 1,
    icon: Home,
    title: "Modular Projects",
    tagline: "Modular Spaces Designed for Modern Living",
    description:
      "At Richwood Interio, we craft modular solutions that bring together durability, elegance, smart functionality, and timeless aesthetics. Every modular kitchen, wardrobe, or storage unit is built to simplify everyday living while adding a sense of luxury that stays forever.",
    intro:
      "Our modular projects are designed to fit seamlessly into your lifestyle. Whether it's a compact apartment or a spacious villa, our designs optimise every inch with precision engineering, premium hardware, and a refined material palette.",
    offerings: [
      "Modular Kitchens (L-shaped, U-shaped, Straight, Parallel layouts)",
      "Modular Wardrobes (Sliding, Hinged, Walk-in)",
      "TV Units, Storage Systems & Custom Furniture",
      "Vanities, Study Units & Multifunctional Spaces",
    ],
    approach:
      "We combine design sensibility with technical mastery. From understanding your usage pattern to choosing the right material and finish, every detail is thoughtfully curated. Our modular spaces are built with high-grade materials, ensuring longevity, effortless maintenance, and a finish that stays forever.",
    highlights: [
      "Smart ergonomics and space optimisation",
      "German & Indian premium hardware options",
      "Soft-close, noiseless mechanisms",
      "Moisture-resistant, heat-resistant materials",
      "Tailor-made internal compartments for organised living",
    ],
    image: kitchenImage,
  },
  {
    id: 2,
    icon: Layout,
    title: "Interior Designing Projects",
    tagline: "Transforming Spaces Into Expressions of You",
    description:
      "Interior design is not just about creating a beautiful space — it's about telling your story through colours, textures, light, and form. At Richwood Interio, we design homes that feel like a warm embrace and commercial spaces that spark inspiration.",
    intro:
      "Our designs are rooted in functionality, guided by aesthetics, and executed with premium craftsmanship. We bring together architecture, decor, styling, and spatial psychology to ensure every space feels balanced, purposeful, and emotionally comforting.",
    offerings: [
      "Living rooms",
      "Bedrooms",
      "Kitchens",
      "Bathrooms",
      "Kids' rooms",
      "Balconies & terraces",
      "Full-home renovation",
    ],
    approach: "We specialise in creating clutter-free, elegant spaces that reflect lifestyle, tastes, and personality.",
    process: [
      "In-depth consultation",
      "Style study & moodboard creation",
      "Material palette selection",
      "2D & 3D designs",
      "Execution & full project management",
    ],
    highlights: [
      "Designs inspired by real living",
      "Seamless blend of functionality & aesthetics",
      "Strict timelines & professional execution",
      "Highly personalised approach",
    ],
    image: bedroomImage,
  },
  {
    id: 3,
    icon: Building2,
    title: "Commercial Interiors",
    tagline: "Spaces That Boost Productivity, Appeal, and Brand Identity",
    description:
      "Commercial spaces are powerful communication tools. They influence customer behaviour, employee motivation, and overall brand experience. At Richwood Interio, we design commercial interiors that are modern, efficient, and aligned with your business goals.",
    intro:
      "Whether it's a corporate office, retail store, clinic, cafe, or showroom, our designs create the right balance of creativity, professionalism, and brand presence.",
    offerings: [
      "Offices",
      "Showrooms",
      "Clinics & Wellness Centres",
      "Retail Stores",
      "Restaurants & Cafés",
      "Workstations & cabins",
      "Reception & waiting areas",
    ],
    focus: [
      "Layout flow & space planning",
      "Brand-driven design aesthetics",
      "Comfort-driven ergonomics",
      "Smart lighting & acoustics",
      "Storage and traffic movement optimisation",
    ],
    highlights: [
      "Practical & high-performing spaces",
      "Thoughtful spatial psychology",
      "Designs that influence customer decision-making",
      "Low-maintenance, long-lasting materials",
      "Fast turnaround timelines",
    ],
    image: officeImage,
  },
  {
    id: 4,
    icon: Compass,
    title: "Architectural Projects",
    tagline: "Designing the Foundation of Your Dreams",
    description:
      "Architecture shapes how we feel, move, and interact within a space. At Richwood Interio, our architectural solutions combine structural intelligence with creative expression. We design spaces that are safe, sustainable, and visually striking — with functionality at the core.",
    deliverables: [
      "Concept planning",
      "Structural coordination",
      "Space optimisation",
      "Technical drawings",
      "Elevation & façade concepts",
      "Material compatibility study",
      "Ventilation & natural light planning",
    ],
    approach:
      "Architecture should feel effortless. We create designs that support well-being, maximise comfort, and stand the test of time. Every plan is thoughtfully crafted to ensure your space grows with you and adapts to your lifestyle.",
    highlights: [
      "Architect-led planning",
      "Accurate measurements & layouts",
      "Sustainable, cost-efficient planning",
      "Human-centric design approach",
      "Aesthetic + functional balance",
    ],
    image: livingImage,
  },
  {
    id: 5,
    icon: Key,
    title: "Turnkey Interior Projects",
    tagline: "Complete Execution. Zero Stress. 100% Accountability.",
    description:
      "Turnkey interior projects are for clients who want a smooth, hassle-free experience. Once we align on the design, we take full responsibility — from planning to execution and final handover.",
    intro: "Everything is coordinated, monitored, and quality-checked by our in-house team.",
    offerings: [
      "Design consultation",
      "2D/3D concepts",
      "Material finalisation",
      "Procurement",
      "Civil, electrical & plumbing work",
      "Modular manufacturing",
      "Site execution",
      "Cleaning & handover",
    ],
    highlights: [
      "Single point of contact",
      "No dealing with multiple vendors",
      "Budget transparency",
      "Faster timelines",
      "Seamless coordination",
      "End-to-end quality control",
    ],
    guarantee:
      "Your space will be delivered exactly how you imagined — with the warmth, detail, and finish that lasts long.",
    image: kitchenImage,
  },
  {
    id: 6,
    icon: Layout,
    title: "2D & 3D Design",
    tagline: "See Your Space Before It Comes to Life",
    description:
      "Visualisation is the heart of smart planning. Our 2D and 3D design services allow you to see your future space with clarity before execution begins — ensuring precision, confidence, and zero guesswork.",
    offerings: [
      "2D layout planning",
      "Furniture placement",
      "Electrical & lighting plans",
      "False ceiling maps",
      "Colour & material palette",
      "3D renders (high-quality, realistic)",
      "360° walkthroughs (optional)",
    ],
    approach:
      "Our 3D designs are crafted exactly as they will be executed. We use real material textures, correct light behaviour, and accurate dimensions to deliver visuals that match the final outcome.",
    highlights: [
      "Clear visual understanding",
      "Better decision-making",
      "Easy material selection",
      "Reduced errors during execution",
      "Faster project turnaround",
    ],
    closing: "Because they feel real. They feel personalised. They feel like home before the home is even built.",
    image: bedroomImage,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">What We Offer</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">Complete Interior & Design Solutions for Homes and Businesses</p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold">{service.title}</h2>
                </div>

                <p className="text-primary text-lg font-medium italic mb-4">{service.tagline}</p>

                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {service.intro && <p className="text-muted-foreground mb-6 leading-relaxed">{service.intro}</p>}

                {/* Offerings */}
                {service.offerings && (
                  <div className="mb-6">
                    <h4 className="font-serif font-bold text-lg mb-3">
                      {service.id === 2
                        ? "Residential Interiors"
                        : service.id === 3
                          ? "We Design"
                          : service.id === 5
                            ? "What's Included"
                            : service.id === 6
                              ? "What's Included"
                              : "What We Offer"}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.offerings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Process or Focus */}
                {service.process && (
                  <div className="mb-6">
                    <h4 className="font-serif font-bold text-lg mb-3">Our Design Process</h4>
                    <ul className="space-y-2">
                      {service.process.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.focus && (
                  <div className="mb-6">
                    <h4 className="font-serif font-bold text-lg mb-3">Our Focus Areas</h4>
                    <ul className="space-y-2">
                      {service.focus.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.deliverables && (
                  <div className="mb-6">
                    <h4 className="font-serif font-bold text-lg mb-3">What We Deliver</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.approach && (
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">{service.approach}</p>
                )}

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-serif font-bold text-lg mb-3">
                    {service.id === 1
                      ? "Why Our Modular Projects Stand Out"
                      : service.id === 2
                        ? "Why Choose Us for Interiors"
                        : service.id === 3
                          ? "Why Businesses Choose Us"
                          : service.id === 4
                            ? "Why Choose Us"
                            : service.id === 5
                              ? "Why Turnkey Works Best"
                              : "Benefits"}
                  </h4>
                  <ul className="space-y-2">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.guarantee && (
                  <div className="bg-gradient-gold rounded-lg p-4 mb-6">
                    <p className="text-primary-foreground font-medium text-sm">
                      <strong>The Richwood Guarantee:</strong> {service.guarantee}
                    </p>
                  </div>
                )}

                {service.closing && (
                  <p className="text-primary font-medium italic mb-6">
                    Why Clients Love Our Designs — {service.closing}
                  </p>
                )}

                <Button variant="gold" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-gold rounded-xl opacity-20" />
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Turnkey Projects FAQs */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-primary">Turnkey Projects</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. What is a turnkey interior project?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A turnkey project means we handle everything — design, materials, carpentry, civil work, electrical,
                    plumbing, painting, furnishings, and final finishing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Do you provide after-completion support?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we offer post-handover service for any adjustments or support required.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Do I need to be present at the site?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No. We manage the entire process and send progress updates, photos, timelines, and reports.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. What is included in turnkey pricing?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    All materials, labour, site work, carpentry, finishes, supervision, and handover cleaning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. Is turnkey more expensive?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Not always. It often saves money because everything is planned, procured, and executed under one
                    transparent system.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6. What are the benefits of turnkey execution?</h4>
                  <ul className="text-muted-foreground text-sm space-y-1 mt-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      Single point of contact
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      No coordination stress
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      Timely delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      Cost control
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      Quality assurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commercial Interiors FAQs */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-primary">Commercial Interiors</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Do you design commercial spaces as per brand identity?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes! Colors, materials, lighting, and layout are planned to reflect your brand personality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Do you follow safety and compliance guidelines?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Absolutely. We follow building codes, electrical load planning, and material safety standards for
                    commercial spaces.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Can you work with tight deadlines?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Commercial projects often run on strict timelines — and we plan manpower and materials accordingly
                    to ensure timely delivery.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Do you work on retail, office, and hospitality spaces?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. We design offices, cafés, restaurants, clinics, salons, and retail stores.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. Can you design furniture as per commercial needs?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. From workstations to display units, reception desks, and storage systems — everything is
                    customised.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6. Do you handle renovation for commercial properties?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, including layout restructuring, lighting revamp, new flooring, false ceiling work, and complete
                    makeover.
                  </p>
                </div>
              </div>
            </div>

            {/* 2D & 3D Design Services FAQs */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-primary">2D & 3D Design Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. What do I get in 3D design services?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    High-quality 3D renders showing lighting, colors, furniture, textures, décor, and complete spatial
                    planning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Can I request changes after seeing the renders?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. We allow revision rounds until the design matches your expectations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. How long does it take to create 3D designs?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Usually 7–15 days, depending on size and number of spaces.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Do you offer virtual walkthroughs?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes! We provide 360° walkthroughs so you can experience your space before it's built.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. Can you design only a specific room?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes! Living room, kitchen, bedroom, kids' room — standalone designs are available.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">6. Will you guide me on materials along with designs?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. Moodboards, color palettes, fabric options, and finish selection come along with design
                    services.
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Services FAQs */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-6 text-primary">Architectural Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">1. Do you provide architectural drawings?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. We offer 2D layout plans, elevations, 3D visualisations, structural coordination, plumbing &
                    electrical layouts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Can you redesign an existing structure?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. We provide structural modification guidance, redesign plans, and interior restructuring.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Do you also monitor site execution?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes, we provide supervision and site visits depending on the project scope.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Do you work on both residential and commercial spaces?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes. Homes, offices, retail shops, clinics — we handle all architectural categories.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* General FAQs Section */}
          <GeneralFAQs />
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-navy rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a modular kitchen, complete home interiors, or commercial design — we're here to bring your
            vision to life.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const generalFaqs = [
  {
    question: "What services does Richwood Interio offer?",
    answer:
      "We provide end-to-end interior design, modular solutions, architectural planning, turnkey execution, and customised furniture. From concept designing to final handover, everything is handled by our in-house team to give you a smooth, stress-free experience.",
  },
  {
    question: "Do you work with all types of homes?",
    answer:
      "Yes. Whether it's a compact 1BHK, a spacious villa, a modern office, or a commercial space, we create designs that fit your lifestyle, budget, and functional needs.",
  },
  {
    question: "What is the expected timeline for a full home interior project?",
    answer:
      "Depending on scope, material selection, and site conditions, timelines usually range between 45–90 days. Larger or highly customised projects may require a little more time—but we always maintain transparency and regular updates.",
  },
  {
    question: "Will the designs be customised as per my taste?",
    answer:
      "Absolutely. Every design we create is personalised to match your style, requirements, and routine. We spend time understanding how you live, what you prefer, and what comforts you—so your home truly feels like your space.",
  },
  {
    question: "Do you take turnkey projects?",
    answer:
      "Yes. Our turnkey service covers A–Z execution, including planning, design, materials, carpentry, electrical work, painting, civil work, installation, and quality checks. You get a single point of contact and complete accountability.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We believe in honest quality. Based on your budget, we suggest the best in plywood, laminates, acrylics, veneers, quartz, hardware fittings, and branded accessories. Every item is selected for long-term durability and refined finish.",
  },
  {
    question: "Can I choose my own materials and finishes?",
    answer:
      "Of course! We encourage clients to be part of the material selection process. Our team explains options, pros and cons, and pricing differences so that you can make informed decisions.",
  },
  {
    question: "How do you ensure the quality of work?",
    answer:
      "Every project includes: Detailed BOQs, Branded materials, Skilled workforce, Regular site visits, Quality checks at every stage, Final inspection before handover. We believe good design must also be good workmanship.",
  },
  {
    question: "What is the payment structure?",
    answer:
      "We follow a transparent stage-wise payment plan: Design token / booking, On finalisation of design, During execution stages, Before installation, Post completion. There are no hidden charges at any point.",
  },
  {
    question: "Do you provide warranty on interiors?",
    answer:
      "Yes, warranties vary depending on materials, hardware brands, and accessories chosen. We clearly list the warranty details in your final documentation.",
  },
  {
    question: "Can I see 3D designs before starting the work?",
    answer:
      "Yes. We share 2D layouts, moodboards, and 3D renders so you can visualise your home before execution begins.",
  },
  {
    question: "Do you offer budget-friendly options?",
    answer:
      "We work with different budget ranges. Based on your requirement, we suggest cost-effective materials without compromising on essential quality.",
  },
  {
    question: "How soon should I contact you before possession?",
    answer:
      "Ideally 30–45 days before possession so the design process is smooth and execution starts quickly after keys are received.",
  },
  {
    question: "Can you work with my existing furniture?",
    answer:
      "Yes, wherever possible. We redesign, reuse, repurpose, or integrate existing pieces into your new space while maintaining overall aesthetics.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us via: Call, WhatsApp, Website form, or Social media. We'll schedule a consultation and take it forward from there.",
  },
];

const extendedFaqs = [
  {
    question: "Do you offer design-only services?",
    answer:
      "Yes. We offer Design-Only Packages that include 2D layouts, 3D renders, material boards, and complete design documentation that you can execute with any contractor.",
  },
  {
    question: "What if I don't know my style or what I want?",
    answer:
      "That's perfectly okay! Our team will guide you through moodboards, references, color palettes, and space-planning discussions to help you discover what truly resonates with you.",
  },
  {
    question: "Can you work within a specific budget?",
    answer:
      "Absolutely. We customise designs to meet your budget, style, and priorities without compromising on quality or aesthetic balance.",
  },
  {
    question: "What if I want changes after seeing 3D designs?",
    answer:
      "Revisions are part of the process. We allow a set number of revisions to ensure you're fully satisfied before execution begins.",
  },
  {
    question: "Do you handle renovation projects?",
    answer:
      "Yes. From layout changes to rework of electricals, plumbing, carpentry, and aesthetics — we transform old spaces into modern, functional homes.",
  },
  {
    question: "Which layout is best for my kitchen?",
    answer:
      "We suggest the ideal layout — L-shaped, U-shaped, straight, parallel — after assessing space, workflow, ventilation, and your lifestyle.",
  },
  {
    question: "What materials do you use for modular kitchens?",
    answer:
      "We work with boiling waterproof plywood (BWP), marine ply, HDHMR, MDF, and branded hardware like Hettich, Hafele, Blum depending on budget and finish preference.",
  },
  {
    question: "Will the kitchen be waterproof and heat resistant?",
    answer:
      "Yes. We use industry-grade, moisture-resistant materials and high-quality finishes to ensure durability even in Indian cooking conditions.",
  },
  {
    question: "How long does a modular kitchen installation take?",
    answer: "Typically 10–20 days, depending on size, finish, and customization.",
  },
  {
    question: "Do I get warranty on my modular kitchen?",
    answer: "Yes. Hardware brands offer warranty, and we provide a warranty on structural elements and workmanship.",
  },
  {
    question: "Can I customise internal storage and pull-outs?",
    answer:
      "Yes! Every drawer, shelf, and module is customised as per your cooking style, storage needs, and convenience.",
  },
];

const GeneralFAQs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">General FAQs</h3>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {generalFaqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-4 last:border-0">
              <h4 className="font-semibold mb-2">
                {index + 1}. {faq.question}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Extended FAQs - Hidden by default */}
        {showMore && (
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {extendedFaqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-0">
                  <h4 className="font-semibold mb-2">
                    {generalFaqs.length + index + 1}. {faq.question}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show More Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline transition-all"
          >
            <span>{showMore ? "Show Less Questions" : "Some More Questions"}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
