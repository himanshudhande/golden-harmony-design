import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark pt-12 pb-6 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-border">
          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contacts</h4>
            <div className="space-y-2">
              <a href="tel:7720000742" className="block text-muted-foreground hover:text-primary text-sm">
                7720000742
              </a>
              <a href="tel:7769998244" className="block text-muted-foreground hover:text-primary text-sm">
                7769998244
              </a>
            </div>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Email</h4>
            <a href="mailto:info@richwoodinterio.com" className="text-muted-foreground hover:text-primary text-sm">
              info@richwoodinterio.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1KLoSbAn8H/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/richwoodinterio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@RichwoodInterio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary text-sm">
                About
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-muted-foreground hover:text-primary text-sm">
                Portfolio
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © 2025. All rights reserved. Richwood Interio.{" "}
            {/* © 2025. All rights reserved. Designed & Developed by Hexamad Digital.*/}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
