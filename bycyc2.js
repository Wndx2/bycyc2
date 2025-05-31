const images = [
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
    "/bycyc Evidence/gay/gay15.png"
];
let currentIndex = 0;

function shuffleImage() {
    const imageElement = document.getElementById('gay');
    
    imageElement.classList.add('fade-out');
    
    setTimeout(() => {
        const nextImage = new Image();
        nextImage.src = images[(currentIndex + 1) % images.length];
        nextImage.onload = () => {
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = nextImage.src;

            setTimeout(() => {
                imageElement.classList.remove('fade-out'); 
            }, 500); 
        };
    }, 500); 
}

shuffleImage();
setInterval(shuffleImage, 3000);

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