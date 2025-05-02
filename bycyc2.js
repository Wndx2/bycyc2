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
    document.getElementById('displayedImage').src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Increment index and reset to 0 if it exceeds the array length
}

shuffleImage();
setInterval(shuffleImage, 1500);
