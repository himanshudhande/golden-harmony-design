# RICHWOOD INTERIO - READY-TO-DEPLOY WORDPRESS SITE
## 3-Step Installation Guide

---

## 🔐 ADMIN ACCESS CREDENTIALS

**Admin Login URL:** `http://yourdomain.com/wp-admin`

**Username:** `admin`

**Password:** `Admin@2024!`

**Email:** `info@richwoodinterio.com`

---

## 📦 WHAT YOU HAVE

✅ Pre-configured WordPress theme (Richwood Interio)
✅ Pre-configured wp-config.php
✅ Ready-to-import database (richwood_wordpress.sql)
✅ .htaccess file for permalinks
✅ All theme assets and images

---

## 🚀 3-STEP INSTALLATION

### STEP 1: Download WordPress Core (5 minutes)

1. Go to https://wordpress.org/download/
2. Click "Download WordPress 6.4.2" (or latest version)
3. Extract the downloaded ZIP file
4. You'll see a folder called "wordpress" with all core files

### STEP 2: Merge Files & Upload (10 minutes)

**A. Prepare Files:**
1. Open the extracted WordPress folder
2. Copy these files from `richwood-interio-wordpress-theme` folder INTO the WordPress root:
   - `wp-config.php` (REPLACE if exists)
   - `.htaccess`
   - Copy `richwood-interio-wordpress-theme` theme folder to `wp-content/themes/`

**B. Update Database Credentials:**
1. Open `wp-config.php` in a text editor
2. Update these lines with YOUR cPanel database details:
   ```php
   define( 'DB_NAME', 'your_database_name' );     // Your actual database name
   define( 'DB_USER', 'your_database_user' );     // Your actual database username
   define( 'DB_PASSWORD', 'your_database_pass' ); // Your actual database password
   define( 'DB_HOST', 'localhost' );              // Usually localhost
   ```

**C. Upload to Hosting:**

**Via cPanel File Manager:**
1. Log in to your cPanel
2. Go to "File Manager"
3. Navigate to `public_html` folder
4. Upload ALL WordPress files (including wp-content, wp-admin, wp-includes, etc.)
5. Wait for upload to complete (may take 5-10 minutes)

**Via FTP (Filezilla/Other):**
1. Connect to your hosting via FTP
2. Upload all WordPress files to `public_html` or your domain folder
3. Ensure file permissions:
   - Folders: 755
   - Files: 644

### STEP 3: Import Database (2 minutes)

**A. Create Database (if not exists):**
1. Log in to cPanel
2. Go to "MySQL Databases"
3. Create new database (e.g., `richwood_wp`)
4. Create new database user with strong password
5. Add user to database with ALL PRIVILEGES
6. Note down: Database name, Username, Password

**B. Import SQL File:**
1. In cPanel, go to "phpMyAdmin"
2. Click on your database name (left sidebar)
3. Click "Import" tab at the top
4. Click "Choose File" and select `richwood_wordpress.sql`
5. Click "Go" at the bottom
6. Wait for "Import has been successfully finished"

**C. Update Site URLs:**
1. In phpMyAdmin, click on your database
2. Click on `wp_options` table
3. Find row where `option_name` = `siteurl`
4. Click "Edit" and change `option_value` to `http://yourdomain.com`
5. Find row where `option_name` = `home`
6. Click "Edit" and change `option_value` to `http://yourdomain.com`
7. Click "Go" to save

---

## ✅ VERIFICATION

Visit: `http://yourdomain.com`
- You should see the Richwood Interio homepage

Visit: `http://yourdomain.com/wp-admin`
- Login with: `admin` / `Admin@2024!`
- You should access the WordPress dashboard

---

## 🎨 THEME IS ALREADY ACTIVATED

The Richwood Interio theme is pre-configured and active. You should see:
- ✅ Theme activated
- ✅ Navigation menus created
- ✅ Contact information set
- ✅ Sample pages created (Home, About, Services, Portfolio, etc.)
- ✅ Front page configured

---

## 📝 POST-INSTALLATION TASKS

### 1. Update Site URLs (if needed)
If your site doesn't load correctly:
- Go to: `Settings > General`
- Update "WordPress Address (URL)" and "Site Address (URL)"
- Save changes

### 2. Update Permalinks
- Go to: `Settings > Permalinks`
- Click "Save Changes" (even without changing anything)
- This regenerates the .htaccess rules

### 3. Update Contact Information
- Go to: `Appearance > Customize > Contact Information`
- Update phone numbers, email, social links
- Click "Publish"

### 4. Create Content
All pages are pre-created but empty:
- Home (already set as front page)
- About, Services, Portfolio, Gallery, Pricing
- Factory Details, Testimonials, Contact
- Blog (set as posts page)

Add your actual content to these pages.

### 5. Upload Logo
- Go to: `Appearance > Customize > Site Identity`
- Upload your logo (recommended: 400x100px)
- Click "Publish"

### 6. Configure Menus
Menus are pre-created but verify:
- Go to: `Appearance > Menus`
- Check "Primary Menu" has all pages
- Check "Footer Menu" has quick links
- Save if needed

---

## 🔧 TROUBLESHOOTING

### Site shows "Error establishing database connection"
**Solution:** Check wp-config.php database credentials

### White screen / blank page
**Solution:**
1. Check file permissions (folders: 755, files: 644)
2. Enable debug mode in wp-config.php: `define('WP_DEBUG', true);`

### "Not Found" on pages
**Solution:**
1. Go to Settings > Permalinks
2. Click "Save Changes"
3. Check .htaccess file exists in root

### Images not loading
**Solution:**
1. Check `wp-content/themes/richwood-interio-wordpress-theme/assets/images/` folder exists
2. Check file permissions on images folder (755)

### Can't login to admin
**Solution:**
- Username: `admin` (lowercase)
- Password: `Admin@2024!` (exact case)
- Reset password via "Lost your password?" if needed

---

## 📂 FILE STRUCTURE

```
public_html/
├── wp-admin/                    (WordPress core - from download)
├── wp-includes/                 (WordPress core - from download)
├── wp-content/
│   ├── themes/
│   │   └── richwood-interio-wordpress-theme/  (Your theme)
│   │       ├── assets/
│   │       ├── template-parts/
│   │       ├── style.css
│   │       ├── functions.php
│   │       ├── header.php
│   │       ├── footer.php
│   │       └── ... (all theme files)
│   ├── plugins/
│   └── uploads/
├── .htaccess                    (Provided - for permalinks)
├── wp-config.php                (Provided - pre-configured)
├── index.php                    (WordPress core)
└── ... (other WordPress core files)
```

---

## 🔒 SECURITY RECOMMENDATIONS

1. **Change Admin Password:**
   - Go to Users > Profile
   - Scroll to "New Password"
   - Generate strong password
   - Update and save

2. **Update Admin Email:**
   - Go to Settings > General
   - Update "Administration Email Address"
   - Save changes

3. **Install Security Plugin:**
   - Recommended: Wordfence, Sucuri, or iThemes Security
   - Go to Plugins > Add New
   - Search and install

4. **Enable HTTPS:**
   - Get SSL certificate from hosting provider
   - Update URLs in Settings > General to use `https://`
   - Uncomment `FORCE_SSL_ADMIN` line in wp-config.php

5. **Regular Updates:**
   - Keep WordPress, themes, and plugins updated
   - Enable automatic updates when possible

---

## 📞 SUPPORT

**Theme Files Location:**
`wp-content/themes/richwood-interio-wordpress-theme/`

**Database Backup:**
Always backup before making changes:
- cPanel > phpMyAdmin > Export

**File Backup:**
- cPanel > File Manager > Compress > Download

---

## ✨ WHAT'S INCLUDED

- ✅ WordPress 6.4+ compatible
- ✅ Responsive mobile design
- ✅ Gold & Navy blue premium theme
- ✅ Pre-configured contact information
- ✅ Google Maps integration
- ✅ Social media links (Facebook, Instagram, LinkedIn, YouTube)
- ✅ Blog functionality
- ✅ Portfolio & gallery sections
- ✅ Mobile hamburger menu
- ✅ SEO-friendly structure
- ✅ Fast loading with Tailwind CSS CDN

---

## 🎉 YOU'RE DONE!

Your site should now be fully functional at your domain.

**Next Steps:**
1. Log in to admin panel
2. Add your content to pages
3. Upload your logo
4. Update contact information
5. Test all pages and links
6. Launch! 🚀

---

**Version:** 1.0.0
**Last Updated:** December 2024
**Theme:** Richwood Interio
**Author:** Richwood Interio Team
