<?php
/**
 * Front Page Template
 *
 * @package Richwood_Interio
 */

get_header();
?>

<main class="min-h-screen bg-[hsl(var(--background))]">
    <?php get_template_part('template-parts/hero', 'section'); ?>
    <?php get_template_part('template-parts/why-choose', 'us'); ?>
    <?php get_template_part('template-parts/our-work', 'preview'); ?>
    <?php get_template_part('template-parts/our', 'craft'); ?>
    <?php get_template_part('template-parts/usp', 'section'); ?>
    <?php get_template_part('template-parts/map', 'section'); ?>
    <?php get_template_part('template-parts/cta', 'section'); ?>
</main>

<?php
get_footer();
