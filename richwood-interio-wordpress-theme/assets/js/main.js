document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('mobile-menu-visible');

            if (isOpen) {
                mobileMenu.classList.remove('mobile-menu-visible');
                mobileMenu.classList.add('mobile-menu-hidden');
            } else {
                mobileMenu.classList.remove('mobile-menu-hidden');
                mobileMenu.classList.add('mobile-menu-visible');
            }

            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('mobile-menu-visible');
                mobileMenu.classList.add('mobile-menu-hidden');
            });
        });
    }

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});
