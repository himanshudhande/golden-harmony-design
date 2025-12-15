<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/hero-interior.jpg');">
        <div class="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] from-opacity-90 via-[hsl(var(--background))] via-opacity-70 to-transparent"></div>
    </div>

    <div class="relative container mx-auto px-4 lg:px-8 pt-16">
        <div class="max-w-2xl">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in">
                Elevate Your
                <br>
                <span class="text-gradient-gold">Living Experience</span>
            </h1>

            <p class="text-lg text-[hsl(var(--muted-foreground))] max-w-xl mb-8 animate-fade-in leading-relaxed">
                Where architectural brilliance meets timeless elegance. Creating bespoke spaces that reflect your vision and elevate your lifestyle.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="btn-gold text-center">
                    Explore Design
                </a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-outline text-center">
                    Get Consultation
                </a>
            </div>
        </div>
    </div>
</section>
