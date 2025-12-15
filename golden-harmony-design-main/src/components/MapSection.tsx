const MapSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">VISIT US</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Find Us Here</h2>
          <p className="text-muted-foreground">
            Shop No. C/5, Malanje Ground, Near Jakat Naka Signal, Below Ichhapurti Hotel, Virar West, Mumbai – 401303
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden border border-border h-[400px]">
          <iframe
            src="https://www.google.com/maps/place/Richwood+Interio/@19.4516527,72.7990911,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ab2a3e193af9:0xb10a86b0b0bfb52c!8m2!3d19.4516477!4d72.803962!16s%2Fg%2F11y99mjt7t?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Richwood Interio Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
