<?php
$usp_items = array(
    array(
        'title' => 'Premium Yet Practical Designs',
        'description' => 'Luxury aesthetics combined with everyday functionality for homes that inspire.',
        'icon' => 'palette'
    ),
    array(
        'title' => '3D Visualisation Before Execution',
        'description' => 'See your space come alive before a single nail is hammered.',
        'icon' => 'cog'
    ),
    array(
        'title' => 'Factory-Finished Perfection',
        'description' => 'Every module is machine-crafted for flawless finish and lasting quality.',
        'icon' => 'factory'
    ),
    array(
        'title' => 'After-Project Support & Warranty',
        'description' => 'We stand by our work with dedicated after-sales support and warranty coverage.',
        'icon' => 'shield'
    ),
    array(
        'title' => 'Strong Focus on Space Optimisation',
        'description' => 'Every inch is utilised intelligently for maximum storage and comfort.',
        'icon' => 'clipboard'
    ),
    array(
        'title' => 'Personalised, Non-Template Designs',
        'description' => 'No cookie-cutter solutions — only designs crafted uniquely for you.',
        'icon' => 'users'
    ),
);

function get_icon_svg($icon) {
    $icons = array(
        'palette' => '<svg class="w-6 h-6 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>',
        'cog' => '<svg class="w-6 h-6 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
        'factory' => '<svg class="w-6 h-6 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
        'shield' => '<svg class="w-6 h-6 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
        'clipboard' => '<svg class="w-6 h-6 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>',
        'users' => '<svg class="w-6 h-6 text-[hsl(var(--primary-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
    );
    return isset($icons[$icon]) ? $icons[$icon] : '';
}
?>

<section class="py-16 bg-[hsl(var(--secondary))] bg-opacity-30">
    <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="text-[hsl(var(--primary))] text-sm font-medium tracking-wider uppercase">
                OUR USP
            </span>
            <h2 class="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
                Why Richwood Interio Stands Apart
            </h2>
            <p class="text-[hsl(var(--muted-foreground))]">
                Factory-backed precision. Premium materials. Unmatched craftsmanship.
            </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($usp_items as $item) : ?>
            <div class="bg-[hsl(var(--card))] rounded-xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] hover:border-opacity-50 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <?php echo get_icon_svg($item['icon']); ?>
                </div>
                <h3 class="font-serif font-bold text-lg mb-2"><?php echo esc_html($item['title']); ?></h3>
                <p class="text-[hsl(var(--muted-foreground))] text-sm"><?php echo esc_html($item['description']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
