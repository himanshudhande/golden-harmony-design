<?php
/**
 * Single Post Template
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
                    <div class="mb-4">
                        <span class="text-[hsl(var(--primary))] text-sm font-medium tracking-wider uppercase">
                            <?php
                            $categories = get_the_category();
                            if (!empty($categories)) {
                                echo esc_html($categories[0]->name);
                            }
                            ?>
                        </span>
                    </div>

                    <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4"><?php the_title(); ?></h1>

                    <div class="flex items-center gap-4 text-sm text-[hsl(var(--muted-foreground))]">
                        <time datetime="<?php echo get_the_date('c'); ?>">
                            <?php echo get_the_date(); ?>
                        </time>
                        <?php if (get_the_author()) : ?>
                            <span>•</span>
                            <span>By <?php the_author(); ?></span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-8 rounded-lg overflow-hidden">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-auto')); ?>
                    </div>
                <?php endif; ?>

                <div class="prose prose-lg max-w-none text-[hsl(var(--foreground))]">
                    <?php the_content(); ?>
                </div>

                <footer class="mt-12 pt-8 border-t border-[hsl(var(--border))]">
                    <div class="flex flex-wrap gap-2">
                        <?php the_tags('<span class="text-[hsl(var(--muted-foreground))] mr-2">Tags:</span>', ' ', ''); ?>
                    </div>
                </footer>
            </article>

            <div class="max-w-4xl mx-auto mt-12">
                <?php
                if (comments_open() || get_comments_number()) {
                    comments_template();
                }
                ?>
            </div>
        <?php endwhile; ?>
    </div>
</main>

<?php
get_footer();
