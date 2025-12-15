<?php
/**
 * Default Page Template
 *
 * @package Richwood_Interio
 */

get_header();
?>

<main class="min-h-screen bg-[hsl(var(--background))] pt-20">
    <div class="container mx-auto px-4 lg:px-8 py-16">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
                <header class="mb-8">
                    <h1 class="text-4xl md:text-5xl font-serif font-bold"><?php the_title(); ?></h1>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-8 rounded-lg overflow-hidden">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-auto')); ?>
                    </div>
                <?php endif; ?>

                <div class="prose prose-lg max-w-none text-[hsl(var(--foreground))]">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
