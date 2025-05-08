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
    
    // Add fade-out class
    imageElement.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Preload the next image
        const nextImage = new Image();
        nextImage.src = images[(currentIndex + 1) % images.length];
        nextImage.onload = () => {
            // Update the image source after the next image is fully loaded
            currentIndex = (currentIndex + 1) % images.length;
            imageElement.src = nextImage.src;

            // Wait 0.5 seconds before fading in
            setTimeout(() => {
                imageElement.classList.remove('fade-out'); // Trigger fade-in
            }, 500); // 0.5-second delay
        };
    }, 500); // Match the duration of the CSS fade-out transition
}

shuffleImage();
setInterval(shuffleImage, 3000); // Change image every 3 seconds (2s for display + 0.5s fade-out + 0.5s delay)

function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible'); // Add the 'visible' class when in view
        } else {
            el.classList.remove('visible'); // Remove the class when out of view (optional)
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Trigger on page load
