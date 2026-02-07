// Theme Toggle Script - Standalone
(function () {
    console.log('Theme toggle script loaded');

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    function initTheme() {
        console.log('Initializing theme toggle...');

        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        if (!themeToggle) {
            console.error('Theme toggle button not found!');
            return;
        }

        console.log('Theme toggle button found:', themeToggle);

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateIcons(savedTheme);
        console.log('Applied saved theme:', savedTheme);

        // Handle click
        themeToggle.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            console.log('Theme toggle clicked! Changing from', current, 'to', next);

            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateIcons(next);
        });

        function updateIcons(theme) {
            if (sunIcon && moonIcon) {
                if (theme === 'dark') {
                    sunIcon.style.display = 'block';
                    moonIcon.style.display = 'none';
                } else {
                    sunIcon.style.display = 'none';
                    moonIcon.style.display = 'block';
                }
            }
        }
    }
})();
