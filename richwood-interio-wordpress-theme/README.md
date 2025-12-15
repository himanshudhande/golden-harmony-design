# Richwood Interio WordPress Theme

A premium interior design WordPress theme converted from React/Vite application, featuring custom Tailwind CSS styling, modern design, and full-featured portfolio and gallery sections.

## Features

- Modern, responsive design with gold and navy blue color scheme
- Custom Tailwind CSS integration via CDN
- Animated sections and smooth transitions
- Custom page templates for different content types
- Mobile-friendly navigation with hamburger menu
- Google Maps integration for location display
- Social media integration (Facebook, Instagram, LinkedIn, YouTube)
- Customizer options for contact information and social links
- SEO-friendly structure
- Portfolio and gallery sections
- Blog support with custom post templates

## Installation

1. Download the theme folder
2. Navigate to your WordPress installation
3. Go to `Appearance > Themes > Add New > Upload Theme`
4. Upload the `richwood-interio-wordpress-theme` folder as a ZIP file
5. Activate the theme

OR

1. Upload the theme folder to `/wp-content/themes/` directory
2. Go to `Appearance > Themes` in WordPress admin
3. Activate "Richwood Interio" theme

## Setup

### 1. Set up Navigation Menus

Go to `Appearance > Menus` and create two menus:
- **Primary Menu** - Main navigation in header
- **Footer Menu** - Quick links in footer

Add the following pages to your Primary Menu:
- Home
- About
- Services
- Portfolio
- Gallery
- Pricing
- Factory Details
- Testimonials
- Blog
- Contact

### 2. Configure Contact Information

Go to `Appearance > Customize > Contact Information` and set:
- Phone Number 1
- Phone Number 2
- Email Address
- Facebook URL
- Instagram URL
- LinkedIn URL
- YouTube URL

### 3. Set Front Page

1. Create a new page called "Home"
2. Go to `Settings > Reading`
3. Set "A static page" as your homepage
4. Select "Home" as your front page

### 4. Create Required Pages

Create the following pages:
- Home (set as front page)
- About
- Services
- Portfolio
- Gallery
- Pricing
- Factory Details
- Testimonials
- Blog (set as posts page)
- Contact

### 5. Upload Logo

1. Go to `Appearance > Customize > Site Identity`
2. Upload your logo (recommended size: 400x100px)

## Theme Structure

```
richwood-interio-wordpress-theme/
├── assets/
│   ├── css/
│   │   └── custom.css          # Custom animations and styles
│   ├── js/
│   │   └── main.js             # JavaScript for mobile menu
│   └── images/                 # Theme images
├── template-parts/
│   ├── hero-section.php        # Homepage hero section
│   ├── why-choose-us.php       # Features section
│   ├── our-work-preview.php    # Portfolio preview
│   ├── our-craft.php           # Gallery section
│   ├── usp-section.php         # USP features
│   ├── map-section.php         # Location map
│   └── cta-section.php         # Call-to-action
├── inc/                        # Additional PHP includes (if needed)
├── style.css                   # Main stylesheet with theme info
├── functions.php               # Theme functions and setup
├── header.php                  # Header template
├── footer.php                  # Footer template
├── front-page.php              # Homepage template
├── index.php                   # Blog index template
├── page.php                    # Default page template
├── single.php                  # Single post template
├── 404.php                     # Error page template
└── README.md                   # This file
```

## Customization

### Colors

The theme uses a custom color scheme defined in `style.css` using CSS variables. You can modify these colors by editing the `:root` section:

- `--primary` - Gold color (main accent)
- `--background` - Navy blue (main background)
- `--foreground` - Cream/white (text color)
- `--secondary` - Lighter navy (secondary backgrounds)
- `--muted-foreground` - Muted text color

### Fonts

The theme uses two Google Fonts:
- **Playfair Display** (serif) - Headings
- **Lato** (sans-serif) - Body text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

- Original React application converted to WordPress theme
- Tailwind CSS for styling framework
- Google Fonts for typography
- Lucide React icons converted to SVG

## Version

1.0.0

## License

This theme is licensed under the GNU General Public License v2 or later.

## Support

For support and customization requests, please contact the theme developer or Richwood Interio directly.
