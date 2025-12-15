// ContactSection.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  { id: "residential", label: "Residential Interior" },
  { id: "commercial", label: "Commercial Interior" },
  { id: "modular", label: "Modular Solutions" },
  { id: "architectural", label: "Architectural Services" },
  { id: "turnkey", label: "Turnkey Projects" },
];

const budgetRanges = [
  { id: "10-20", label: "₹10–20 Lakhs" },
  { id: "20-50", label: "₹20–50 Lakhs" },
  { id: "50-100", label: "₹50 Lakhs – 1 Crore" },
  { id: "100+", label: "₹1 Crore+" },
];

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTypes: [] as string[],
    location: "",
    budgetRanges: [] as string[], // OPTIONAL
    details: "",
  });

  const handleProjectTypeChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: checked ? [...prev.projectTypes, id] : prev.projectTypes.filter((t) => t !== id),
    }));
  };

  const handleBudgetChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      budgetRanges: checked ? [...prev.budgetRanges, id] : prev.budgetRanges.filter((b) => b !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Inquiry Submitted",
      description: "We’ll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      projectTypes: [],
      location: "",
      budgetRanges: [],
      details: "",
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Contact Us</h1>
          <p className="text-muted-foreground">Ready to transform your space? Let’s discuss your vision.</p>
        </div>

        {/* Form */}
        <div className="max-w-5xl mx-auto bg-card rounded-xl p-6 md:p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium mb-2 block">Name *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="text-sm font-medium mb-3 block">Project Type *</label>
              <div className="space-y-2">
                {projectTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={type.id}
                      checked={formData.projectTypes.includes(type.id)}
                      onCheckedChange={(checked) => handleProjectTypeChange(type.id, checked as boolean)}
                    />
                    <label htmlFor={type.id} className="text-sm cursor-pointer">
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium mb-2 block">Site Location *</label>
              <Input
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Project site location"
              />
            </div>

            {/* Budget (OPTIONAL) */}
            <div>
              <label className="text-sm font-medium mb-3 block">
                Budget Range <span className="text-xs text-muted-foreground">(Optional)</span>
              </label>
              <div className="space-y-2">
                {budgetRanges.map((budget) => (
                  <div key={budget.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={budget.id}
                      checked={formData.budgetRanges.includes(budget.id)}
                      onCheckedChange={(checked) => handleBudgetChange(budget.id, checked as boolean)}
                    />
                    <label htmlFor={budget.id} className="text-sm cursor-pointer">
                      {budget.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="text-sm font-medium mb-2 block">Project Details *</label>
              <Textarea
                required
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about your requirements, timeline, etc."
              />
            </div>

            <Button type="submit" variant="gold" className="w-full">
              Submit Inquiry
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-primary">Contacts</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@richwoodinterio.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
              >
                <Mail className="w-5 h-5 text-primary" />
                info@richwoodinterio.com
              </a>
              <a
                href="tel:+917720000742"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
              >
                <Phone className="w-5 h-5 text-primary" />
                7720000742
              </a>
              <a
                href="tel:+917769998244"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
              >
                <Phone className="w-5 h-5 text-primary" />
                7769998244
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-primary">Address</h3>
            <div className="flex gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <p>
                Shop No. C/5, Malanje Ground,
                <br />
                Near Jakat Naka Signal,
                <br />
                Virar West, Mumbai – 401303
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-primary">Opening Hours</h3>
            <div className="flex gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <p>Mon – Sun: 9:30 AM – 9:00 PM</p>
                <p>Friday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="Richwood Interio Location"
              src="https://www.google.com/maps?q=Virar%20West%20401303&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
