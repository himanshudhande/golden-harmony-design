<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[hsl(var(--background))] bg-opacity-80 backdrop-blur-sm">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/richwood-logo.png"
                         alt="<?php bloginfo('name'); ?>"
                         class="h-10 w-auto">
                    <?php
                }
                ?>
            </a>

            <div class="hidden xl:flex items-center gap-6">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'flex items-center gap-6',
                    'container'      => false,
                    'fallback_cb'    => false,
                    'walker'         => new Richwood_Interio_Walker_Nav_Menu(),
                ));
                ?>
            </div>

            <div class="hidden xl:flex items-center gap-4">
                <a href="tel:+91<?php echo esc_attr(get_theme_mod('phone_number_1', '7720000742')); ?>"
                   class="btn-gold text-sm">
                    Call Now
                </a>
            </div>

            <button class="xl:hidden text-[hsl(var(--foreground))] p-2" data-mobile-menu-button>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div class="xl:hidden mobile-menu-hidden" data-mobile-menu>
            <div class="flex flex-col gap-3 pt-4">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'flex flex-col gap-3',
                    'container'      => false,
                    'fallback_cb'    => false,
                    'walker'         => new Richwood_Interio_Walker_Nav_Menu_Mobile(),
                ));
                ?>
                <div class="flex flex-col gap-3 pt-4 border-t border-[hsl(var(--border))]">
                    <a href="tel:+91<?php echo esc_attr(get_theme_mod('phone_number_1', '7720000742')); ?>"
                       class="flex items-center gap-2 text-[hsl(var(--primary))]">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span class="text-sm font-medium">+91 <?php echo esc_html(get_theme_mod('phone_number_1', '7720000742')); ?></span>
                    </a>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn-gold text-center w-full">
                        Get Quote
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>

<style>
.navbar.scrolled {
    background-color: hsl(var(--background) / 0.95);
    backdrop-filter: blur(16px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid hsl(var(--border));
}
</style>

<?php
class Richwood_Interio_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $current_class = in_array('current-menu-item', $classes) || in_array('current_page_item', $classes) ?
            'text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))]' :
            'text-[hsl(var(--foreground))] text-opacity-80 hover:text-[hsl(var(--primary))]';

        $output .= sprintf(
            '<a href="%s" class="transition-colors duration-300 text-sm font-medium tracking-wide %s">%s</a>',
            esc_url($item->url),
            $current_class,
            esc_html($item->title)
        );
    }
}

class Richwood_Interio_Walker_Nav_Menu_Mobile extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $current_class = in_array('current-menu-item', $classes) || in_array('current_page_item', $classes) ?
            'text-[hsl(var(--primary))]' :
            'text-[hsl(var(--foreground))] text-opacity-80 hover:text-[hsl(var(--primary))]';

        $output .= sprintf(
            '<a href="%s" class="transition-colors duration-300 text-sm font-medium py-2 %s">%s</a>',
            esc_url($item->url),
            $current_class,
            esc_html($item->title)
        );
    }
}
?>
