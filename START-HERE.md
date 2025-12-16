# 🎯 START HERE - Richwood Interio WordPress Site

## 📋 Quick Overview

You have a **pre-configured WordPress site** ready to deploy. This is not a standalone package - you need to merge it with WordPress core files.

---

## 🔑 Admin Credentials (MEMORIZE THESE!)

```
Login URL:  http://yourdomain.com/wp-admin
Username:   admin
Password:   Admin@2024!
Email:      info@richwoodinterio.com
```

---

## 📦 What You Have

| File/Folder | Purpose | Action Required |
|------------|---------|-----------------|
| `richwood-interio-wordpress-theme/` | Complete WordPress theme | Copy to `wp-content/themes/` |
| `wp-config.php` | Database configuration | Update with YOUR database details |
| `richwood_wordpress.sql` | Pre-configured database | Import via phpMyAdmin |
| `.htaccess` | Permalink configuration | Copy to WordPress root |
| `DEPLOYMENT-GUIDE.md` | Detailed instructions | Read for full details |
| `QUICK-START.txt` | Reference card | Print or keep handy |

---

## ⚡ Installation in 3 Steps (30 minutes total)

### Step 1: Get WordPress Core (5 min)
1. Go to **https://wordpress.org/download/**
2. Click "Download WordPress"
3. Extract the ZIP file

### Step 2: Merge & Upload (15 min)
1. **Open wp-config.php** in text editor
2. **Update database settings** (lines 10-13):
   ```php
   define( 'DB_NAME', 'your_db_name' );     // ← Your database name
   define( 'DB_USER', 'your_db_user' );     // ← Your database username
   define( 'DB_PASSWORD', 'your_db_pass' ); // ← Your database password
   define( 'DB_HOST', 'localhost' );        // ← Usually 'localhost'
   ```
3. **Copy these into WordPress folder:**
   - `wp-config.php` → WordPress root
   - `.htaccess` → WordPress root
   - `richwood-interio-wordpress-theme/` → `wp-content/themes/`
4. **Upload everything** to your hosting (via cPanel or FTP)

### Step 3: Import Database (10 min)
1. **Create database** in cPanel (MySQL Databases)
   - Database name, username, password (SAME as wp-config.php!)
2. **Go to phpMyAdmin**
3. **Select your database** (left sidebar)
4. **Click "Import" tab**
5. **Choose file:** `richwood_wordpress.sql`
6. **Click "Go"** and wait for success message
7. **Update URLs:**
   - Click on `wp_options` table
   - Edit `siteurl` row → change to `http://yourdomain.com`
   - Edit `home` row → change to `http://yourdomain.com`

---

## ✅ Verify It Works

1. **Visit:** `http://yourdomain.com`
   - ✓ Should show Richwood Interio homepage

2. **Visit:** `http://yourdomain.com/wp-admin`
   - ✓ Login with: `admin` / `Admin@2024!`
   - ✓ Should access WordPress dashboard

---

## ⚠️ CRITICAL: Update wp-config.php Database Settings

**Before uploading, you MUST edit wp-config.php:**

```php
// Open wp-config.php and change these lines:
define( 'DB_NAME', 'richwood_wp' );          // ← Change this
define( 'DB_USER', 'richwood_user' );        // ← Change this
define( 'DB_PASSWORD', 'RichwoodDB@2024!' ); // ← Change this
define( 'DB_HOST', 'localhost' );            // ← Usually localhost
```

**Get these from:**
- cPanel → MySQL Databases
- Create new database and user
- Use the SAME details in wp-config.php

---

## 🎨 What's Pre-Configured

✅ Theme activated (Richwood Interio)
✅ Navigation menus created
✅ Sample pages created (Home, About, Services, etc.)
✅ Front page set to "Home"
✅ Blog page set
✅ Contact information fields
✅ Social media links ready
✅ Admin user created

---

## 📝 After Installation

1. **Login** to wp-admin
2. **Change password** (Users → Profile)
3. **Upload logo** (Appearance → Customize → Site Identity)
4. **Update contact info** (Appearance → Customize → Contact Information)
5. **Add content** to pages (Pages → Edit)
6. **Test everything**
7. **Go live!** 🚀

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Database connection error | Check wp-config.php credentials match cPanel database |
| White screen | Enable debug: `define('WP_DEBUG', true);` in wp-config.php |
| 404 on pages | Go to Settings → Permalinks → Save Changes |
| Can't login | Username: `admin` Password: `Admin@2024!` (case sensitive) |
| Theme not showing | Check theme folder is in `wp-content/themes/` |

---

## 📚 Documentation

- **Quick Reference:** `QUICK-START.txt` (print this!)
- **Detailed Guide:** `DEPLOYMENT-GUIDE.md` (read if stuck)
- **Theme Info:** `README.md` (in theme folder)
- **Technical Details:** `CONVERSION-SUMMARY.md`

---

## 🎯 Directory Structure After Installation

```
your-website/
├── wp-admin/                    ← WordPress core (from wordpress.org)
├── wp-includes/                 ← WordPress core
├── wp-content/
│   ├── themes/
│   │   └── richwood-interio-wordpress-theme/  ← Your theme
│   ├── plugins/
│   └── uploads/
├── wp-config.php                ← Your database config
├── .htaccess                    ← Permalink rules
├── index.php                    ← WordPress entry point
└── [other WordPress core files]
```

---

## ⏱️ Time Estimate

| Task | Time |
|------|------|
| Download WordPress | 5 minutes |
| Update wp-config.php | 2 minutes |
| Upload files | 8 minutes |
| Create & import database | 10 minutes |
| Update URLs | 2 minutes |
| Verify & test | 3 minutes |
| **TOTAL** | **~30 minutes** |

---

## 🆘 Need Help?

1. **Read:** `DEPLOYMENT-GUIDE.md` (step-by-step)
2. **Check:** `QUICK-START.txt` (quick reference)
3. **Theme Docs:** `README.md` in theme folder

---

## ✨ Features Included

- Premium gold & navy design
- Fully responsive (mobile-friendly)
- Google Maps integration
- Social media links
- Blog functionality
- Portfolio & gallery sections
- Contact forms ready
- SEO-friendly
- Fast loading
- Security hardened

---

## 🎉 Ready to Start?

**→ Read `DEPLOYMENT-GUIDE.md` for detailed instructions**

**→ Or use `QUICK-START.txt` for fast reference**

---

**Version:** 1.0.0
**Theme:** Richwood Interio
**WordPress:** 6.4+ Compatible
**PHP:** 7.4+ Required
**Hosting:** Shared hosting compatible (Hostinger, cPanel)
