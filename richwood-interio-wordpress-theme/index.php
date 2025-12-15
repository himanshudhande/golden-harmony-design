<?php
/**
 * Main Index Template
 *
 * @package Richwood_Interio
 */

get_header();
?>

<main class="min-h-screen bg-[hsl(var(--background))] pt-20">
    <div class="container mx-auto px-4 lg:px-8 py-16">
        <?php if (have_posts()) : ?>
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl font-serif font-bold mb-8">Latest Posts</h1>

                <div class="space-y-8">
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('bg-[hsl(var(--card))] rounded-lg overflow-hidden border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:border-opacity-50 transition-all'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="aspect-video overflow-hidden">
                                    <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                                </div>
                            <?php endif; ?>

                            <div class="p-6">
                                <header class="mb-4">
                                    <h2 class="text-2xl font-serif font-bold mb-2">
                                        <a href="<?php the_permalink(); ?>" class="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                                            <?php the_title(); ?>
                                        </a>
                                    </h2>
                                    <div class="text-sm text-[hsl(var(--muted-foreground))]">
                                        <time datetime="<?php echo get_the_date('c'); ?>">
                                            <?php echo get_the_date(); ?>
                                        </time>
                                        <?php if (get_the_author()) : ?>
                                            <span class="mx-2">•</span>
                                            <span>By <?php the_author(); ?></span>
                                        <?php endif; ?>
                                    </div>
                                </header>

                                <div class="text-[hsl(var(--muted-foreground))] mb-4">
                                    <?php the_excerpt(); ?>
                                </div>

                                <a href="<?php the_permalink(); ?>" class="text-[hsl(var(--primary))] hover:underline font-medium">
                                    Read More →
                                </a>
                            </div>
                        </article>
                    <?php endwhile; ?>
                </div>

                <div class="mt-12">
                    <?php
                    the_posts_pagination(array(
                        'mid_size'  => 2,
                        'prev_text' => __('← Previous', 'richwood-interio'),
                        'next_text' => __('Next →', 'richwood-interio'),
                        'class'     => 'flex justify-center gap-2',
                    ));
                    ?>
                </div>
            </div>
        <?php else : ?>
            <div class="text-center py-20">
                <h1 class="text-3xl font-serif font-bold mb-4">No Posts Found</h1>
                <p class="text-[hsl(var(--muted-foreground))]">
                    Sorry, but no content has been published yet.
                </p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php
get_footer();
