document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.carousel-text .Texto');
    const images = document.querySelectorAll('.carousel-image .img');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;

    function showSlide(index) {
        texts.forEach((text, i) => {
            text.classList.toggle('active', i === index);
        });
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            currentIndex = index;
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        showSlide(currentIndex);
    }, 10000);
});


