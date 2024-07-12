const texts = document.querySelectorAll('.carousel-text .Texto');
const images = document.querySelectorAll('.carousel-image .img');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showContent(index) {
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

function nextContent() {
    currentIndex = (currentIndex + 1) % texts.length;
    showContent(currentIndex);
}

let startX = 0;

function handleDragStart(event) {
    startX = event.clientX || event.touches[0].clientX;
}

function handleDragEnd(event) {
    const endX = event.clientX || event.changedTouches[0].clientX;
    if (startX > endX) {
        nextContent();
    } else if (startX < endX) {
        currentIndex = (currentIndex - 1 + texts.length) % texts.length;
        showContent(currentIndex);
    }
}

document.getElementById("carousel").addEventListener("mousedown", handleDragStart);
document.getElementById("carousel").addEventListener("touchstart", handleDragStart);
document.getElementById("carousel").addEventListener("mouseup", handleDragEnd);
document.getElementById("carousel").addEventListener("touchend", handleDragEnd);

indicators.forEach(indicator => {
    indicator.addEventListener("click", (event) => {
        const index = parseInt(event.target.getAttribute("data-index"));
        currentIndex = index;
        showContent(index);
    });
});

// Initial display
showContent(currentIndex);
