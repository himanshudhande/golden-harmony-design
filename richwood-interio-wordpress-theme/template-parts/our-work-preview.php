<?php
$projects = array(
    array(
        'category' => 'RESIDENTIAL',
        'title' => 'Luxury Residential',
        'image' => 'living-1.jpg'
    ),
    array(
        'category' => 'COMMERCIAL',
        'title' => 'Modern Corporate',
        'image' => 'office-1.jpg'
    ),
    array(
        'category' => 'MODULAR',
        'title' => 'Designer Kitchen',
        'image' => 'kitchen-1.jpg'
    ),
);
?>

<section class="py-16 bg-gradient-navy">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
            <span class="text-[hsl(var(--primary))] text-sm font-medium tracking-wider uppercase">
                Our Work
            </span>
        </div>

        <div class="grid md:grid-cols-3 gap-6 mb-10">
            <?php foreach ($projects as $project) : ?>
            <div class="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo esc_attr($project['image']); ?>"
                     alt="<?php echo esc_attr($project['title']); ?>"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] from-opacity-90 via-[hsl(var(--background))] via-opacity-30 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                    <span class="text-[hsl(var(--primary))] text-xs font-medium tracking-wider uppercase">
                        <?php echo esc_html($project['category']); ?>
                    </span>
                    <h3 class="text-xl font-serif font-bold text-[hsl(var(--foreground))] mt-1">
                        <?php echo esc_html($project['title']); ?>
                    </h3>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="text-center">
            <a href="<?php echo esc_url(home_url('/portfolio')); ?>" class="btn-outline">
                View Full Portfolio
            </a>
        </div>
    </div>
</section>
