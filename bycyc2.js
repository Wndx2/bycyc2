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
    const imageElement = document.getElementById('displayedImage');
    
    // Add fade-out class
    imageElement.classList.add('fade-out');
    
    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Change the image source
        imageElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length; // Increment index and reset to 0 if it exceeds the array length
        
        // Remove fade-out class and add fade-in effect
        imageElement.classList.remove('fade-out');
    }, 500); // Match the duration of the CSS transition
}

shuffleImage();
setInterval(shuffleImage, 2000); // Change image every 2 seconds
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
