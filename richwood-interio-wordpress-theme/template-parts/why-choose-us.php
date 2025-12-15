<?php
$features = array(
    array(
        'title' => 'Design + Execution Under One Roof',
        'description' => 'At Richwood Interio, you don't have to coordinate between multiple. Your entire journey — from conceptual design to flawless execution — is handled by our expert in-house team. This ensures consistency in quality, smooth communication, and complete accountability. You get a stress-free experience with designs that turn into reality exactly as envisioned'
    ),
    array(
        'title' => 'Detailed Material Selection',
        'description' => 'We carefully curate every material, finish, and texture with you — ensuring durability, aesthetics, and long-term value. Our team guides you through premium laminates, hardware, textures, veneers, paints, and fittings. Each selection is made based on lifestyle, usage, and budget suitability. You get a home that not only looks beautiful but also withstands years of everyday living.'
    ),
    array(
        'title' => 'Premium Craftsmanship',
        'description' => 'Every project is built with the highest level of precision and workmanship. Our skilled craftsmen bring life to designs using advanced tools, quality fittings, and meticulous detailing. We follow strict quality control at each stage of execution. The result? Interiors that don't just look premium — they feel premium every single day.'
    ),
    array(
        'title' => 'Budget Transparency',
        'description' => 'No hidden costs, no last-minute surprises — just clear, honest pricing. We break down your project estimate so you understand exactly where your budget is going. You can choose between multiple options depending on material grade and finish. This gives you full financial confidence while achieving the aesthetic you envision.'
    ),
    array(
        'title' => 'Architect-Led Team',
        'description' => 'With Promod Jawahar Yadav — an experienced architect — leading every project, your designs are technically strong and aesthetically refined. Every layout, colour palette, and detail is thoughtfully planned for practical day-to-day living. You get industry-level precision blended with creativity and comfort. Your space becomes functional, timeless, and visually compelling.'
    ),
    array(
        'title' => 'On-Time Delivery',
        'description' => 'Tailored designs for your unique needs We follow structured timelines and systematic execution processes. Every stage of your project is tracked, documented, and supervised by our team. With clear communication and weekly updates, you're always aware of progress. Your space is delivered on schedule — without compromising on quality or detailing.'
    ),
);
?>

<section class="py-16 bg-[hsl(var(--background))]">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="text-[hsl(var(--primary))] text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
            <h2 class="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Excellence in Every Detail</h2>
            <p class="text-[hsl(var(--muted-foreground))]">
                We combine innovation, expertise, and passion to deliver interiors that exceed expectations
            </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($features as $feature) : ?>
            <div class="bg-[hsl(var(--secondary))] bg-opacity-50 rounded-lg p-6 hover:bg-[hsl(var(--secondary))] transition-colors duration-300">
                <div class="bg-gradient-gold text-[hsl(var(--primary-foreground))] px-4 py-2 rounded-md inline-block mb-4">
                    <h3 class="font-semibold text-sm"><?php echo esc_html($feature['title']); ?></h3>
                </div>
                <p class="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    <?php echo esc_html($feature['description']); ?>
                </p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
