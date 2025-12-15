<?php
$images = array('kitchen-1.jpg', 'bedroom-1.jpg', 'living-1.jpg', 'hero-interior.jpg');
?>

<section class="py-16 bg-[hsl(var(--background))]">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-10">
            <span class="text-[hsl(var(--primary))] text-sm font-medium tracking-wider uppercase">
                OUR CRAFT
            </span>
            <p class="text-[hsl(var(--muted-foreground))] mt-2">
                Handpicked interiors reflecting Richwood's passion for detail.
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <?php foreach ($images as $index => $image) : ?>
            <div class="aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/<?php echo esc_attr($image); ?>"
                     alt="Interior <?php echo $index + 1; ?>"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
