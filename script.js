// Subtle particle / glow effect on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c❤️ I Need YOU — You are not alone.', 'color:#ff1a1a; font-size:16px;');
    
    // Optional: Add a simple scroll glow to hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (window.scrollY > 100) {
            hero.style.filter = 'brightness(0.95)';
        } else {
            hero.style.filter = 'none';
        }
    });
});
