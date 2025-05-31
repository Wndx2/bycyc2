const gay_image = [
    "/bycyc Evidence/gay/gay1.png",
    "/bycyc Evidence/gay/gay2.png",
    "/bycyc Evidence/gay/gay3.png",
    "/bycyc Evidence/gay/gay4.png",
    "/bycyc Evidence/gay/gay5.png",
    "/bycyc Evidence/gay/gay6.png",
    "/bycyc Evidence/gay/gay7.png",
    "/bycyc Evidence/gay/gay8.png",
    "/bycyc Evidence/gay/gay9.png",
    "/bycyc Evidence/gay/gay10.png",
    "/bycyc Evidence/gay/gay11.png",
    "/bycyc Evidence/gay/gay12.png",
    "/bycyc Evidence/gay/gay13.png",
    "/bycyc Evidence/gay/gay14.png",
    "/bycyc Evidence/gay/gay15.png",
    "/bycyc Evidence/gay/gay16.PNG",
    "/bycyc Evidence/gay/gay17.png",
    "/bycyc Evidence/gay/gay18.png",
    "/bycyc Evidence/gay/gay19.png",
];
let gay_image_currentIndex = 0;

function setGayImage(index) {
    const imageElement = document.getElementById('gay-image');
    imageElement.src = gay_image[index];
}

function shuffleGayImage(retryCount = 0) {
    const imageElement = document.getElementById('gay-image');
    imageElement.classList.add('fade-out');

    setTimeout(() => {
        gay_image_currentIndex = (gay_image_currentIndex + 1) % gay_image.length;
        const nextImage = new Image();
        nextImage.src = gay_image[gay_image_currentIndex];
        nextImage.onload = () => {
            imageElement.src = nextImage.src;
            setTimeout(() => {
                imageElement.classList.remove('fade-out');
            }, 500);
        };
        nextImage.onerror = () => {
            if (retryCount < gay_image.length) {
                // Skip to next image, avoid infinite recursion
                shuffleGayImage(retryCount + 1);
            }
        };
    }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
    setGayImage(gay_image_currentIndex);
    setInterval(shuffleGayImage, 3000);
});

shuffleGayImage();
setInterval(shuffleGayImage, 3000);

function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);