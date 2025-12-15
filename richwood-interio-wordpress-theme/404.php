<?php
/**
 * 404 Error Page Template
 *
 * @package Richwood_Interio
 */

get_header();
?>

<main class="min-h-screen bg-[hsl(var(--background))] pt-20 flex items-center justify-center">
    <div class="container mx-auto px-4 lg:px-8 py-16 text-center">
        <div class="max-w-2xl mx-auto">
            <h1 class="text-9xl font-serif font-bold text-gradient-gold mb-4">404</h1>
            <h2 class="text-3xl md:text-4xl font-serif font-bold mb-4">Page Not Found</h2>
            <p class="text-[hsl(var(--muted-foreground))] mb-8 text-lg">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-gold text-center">
                    Go Home
                </a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-outline text-center">
                    Contact Us
                </a>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
