<?php
/**
 * Richwood Interio Theme Functions
 *
 * @package Richwood_Interio
 */

if (!defined('ABSPATH')) {
    exit;
}

function richwood_interio_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'richwood-interio'),
        'footer'  => __('Footer Menu', 'richwood-interio'),
    ));
}
add_action('after_setup_theme', 'richwood_interio_setup');

function richwood_interio_scripts() {
    wp_enqueue_style('richwood-interio-style', get_stylesheet_uri(), array(), '1.0.0');

    wp_enqueue_style(
        'tailwindcss',
        'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css',
        array(),
        '3.4.1'
    );

    wp_enqueue_style(
        'richwood-interio-custom',
        get_template_directory_uri() . '/assets/css/custom.css',
        array(),
        '1.0.0'
    );

    wp_enqueue_script(
        'richwood-interio-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'richwood_interio_scripts');

function richwood_interio_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'richwood-interio'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'richwood-interio'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'richwood_interio_widgets_init');

function richwood_interio_customize_register($wp_customize) {
    $wp_customize->add_section('richwood_contact_info', array(
        'title'    => __('Contact Information', 'richwood-interio'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('phone_number_1', array(
        'default'           => '7720000742',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('phone_number_1', array(
        'label'    => __('Phone Number 1', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'text',
    ));

    $wp_customize->add_setting('phone_number_2', array(
        'default'           => '7769998244',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('phone_number_2', array(
        'label'    => __('Phone Number 2', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'text',
    ));

    $wp_customize->add_setting('email_address', array(
        'default'           => 'info@richwoodinterio.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('email_address', array(
        'label'    => __('Email Address', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'email',
    ));

    $wp_customize->add_setting('facebook_url', array(
        'default'           => 'https://www.facebook.com/share/1KLoSbAn8H/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('facebook_url', array(
        'label'    => __('Facebook URL', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'url',
    ));

    $wp_customize->add_setting('instagram_url', array(
        'default'           => 'https://www.instagram.com/richwoodinterio',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('instagram_url', array(
        'label'    => __('Instagram URL', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'url',
    ));

    $wp_customize->add_setting('linkedin_url', array(
        'default'           => 'https://www.linkedin.com/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('linkedin_url', array(
        'label'    => __('LinkedIn URL', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'url',
    ));

    $wp_customize->add_setting('youtube_url', array(
        'default'           => 'https://www.youtube.com/@RichwoodInterio',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('youtube_url', array(
        'label'    => __('YouTube URL', 'richwood-interio'),
        'section'  => 'richwood_contact_info',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'richwood_interio_customize_register');

function richwood_interio_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'richwood_interio_excerpt_length');

function richwood_interio_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'richwood_interio_excerpt_more');
