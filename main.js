
window.addEventListener('load', () => {
    const observer = new PerformanceObserver((list) => {
        const entries = list.getEntriesByType('resource');
        let allLoaded = true;

        entries.forEach((entry) => {
            if (entry.initiatorType === 'img' || entry.initiatorType === 'script' || entry.initiatorType === 'link') {
                if (!entry.responseEnd) {
                    allLoaded = false;
                }
            }
        });

        if (allLoaded) {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.style.display = 'none';
            }
        }
    });

    observer.observe({ entryTypes: ['resource'] });
});


document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    setTimeout(function() {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 3500);
});