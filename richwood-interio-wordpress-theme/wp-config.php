<?php
/**
 * Pre-configured WordPress Configuration File
 * READY TO USE - Just update database credentials below
 */

// ** MySQL Database Settings - UPDATE THESE WITH YOUR HOSTING DATABASE ** //
define( 'DB_NAME', 'richwood_wp' );          // Your database name
define( 'DB_USER', 'richwood_user' );        // Your database username
define( 'DB_PASSWORD', 'RichwoodDB@2024!' ); // Your database password
define( 'DB_HOST', 'localhost' );            // Usually 'localhost' on shared hosting
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts
 * These are pre-generated for security
 */
define('AUTH_KEY',         'Zx8#mP$vQ2wE!rT5yU&iO9pA*sD3fG6hJ@kL7zX+cV-bN1mQ4wE8rT=yU0iO');
define('SECURE_AUTH_KEY',  'P3@sD5fG!hJ7kL*zX9cV&bN2mQ-wE4rT+yU6iO=pA8sD0fG#hJ1kL$zX3cV^bN');
define('LOGGED_IN_KEY',    'K9@lZ2xC!vB5nM*qW3eR&tY7uI-pO0aS=dF4gH+jK1lZ$xC6vB#nM8qW^eR2tY');
define('NONCE_KEY',        'T6^yU9iO!pA2sD*fG5hJ&kL8zX-cV0bN=mQ3wE7rT+yU1iO#pA4sD$fG@hJ6kL');
define('AUTH_SALT',        'F8$gH2jK!lZ5xC*vB9nM&qW3eR-tY7uI=pO1aS+dF4gH0jK#lZ6xC^vB2nM@qW');
define('SECURE_AUTH_SALT', 'R4@tY7uI!pO1aS*dF5gH&jK9lZ-xC3vB=nM6qW+eR0tY#uI2pO$aS8dF^gH@jK');
define('LOGGED_IN_SALT',   'D1^fG5hJ!kL9zX*cV3bN&mQ7wE-rT0yU=iO4pA+sD8fG#hJ2kL$zX6cV@bN1mQ');
define('NONCE_SALT',       'W2@eR6tY!uI0pO*aS4dF&gH8jK-lZ2xC=vB5nM+qW9eR#tY3uI$pO7aS^dF1gH');

/**
 * WordPress Database Table prefix
 */
$table_prefix = 'wp_';

/**
 * WordPress Debugging Mode
 * Set to false in production
 */
define( 'WP_DEBUG', false );
define( 'WP_DEBUG_LOG', false );
define( 'WP_DEBUG_DISPLAY', false );

/**
 * WordPress Auto-Updates
 */
define( 'WP_AUTO_UPDATE_CORE', true );

/**
 * Increase PHP Memory Limit
 */
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_MAX_MEMORY_LIMIT', '512M' );

/**
 * File Permissions
 */
define( 'FS_CHMOD_DIR', ( 0755 & ~ umask() ) );
define( 'FS_CHMOD_FILE', ( 0644 & ~ umask() ) );

/**
 * Force SSL (uncomment if using HTTPS)
 */
// define( 'FORCE_SSL_ADMIN', true );

/**
 * Disable File Editing from Dashboard
 */
define( 'DISALLOW_FILE_EDIT', true );

/**
 * Set Site URLs - WordPress will auto-detect these
 * Only uncomment if you have domain issues
 */
// define( 'WP_HOME', 'https://yourdomain.com' );
// define( 'WP_SITEURL', 'https://yourdomain.com' );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
