// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Preload an image to ensure it's loaded before adding to carousel
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("homepageimages.json")
        .then(response => response.json())
        .then(images => {
            const carouselInner = document.getElementById("carouselInner");
            
            // Randomize the order of images
            const shuffledImages = shuffleArray(images);

            // Preload all images first, then create carousel slides
            const imagePromises = shuffledImages.map(image => 
                preloadImage(`homepageimages/${image}`)
            );

            Promise.all(imagePromises)
                .then(() => {
                    // All images are loaded, now create carousel slides
                    shuffledImages.forEach((image, index) => {
                        const slide = document.createElement("div");
                        slide.className = "carousel-item" + (index === 0 ? " active" : "");
                        slide.innerHTML = `
                                <img class="d-block h-100 carousel-img object-fit-cover" src="homepageimages/${image}" alt="${image}">
                        `;
                        carouselInner.appendChild(slide);
                    });
                })
                .catch(error => console.error("Error preloading images:", error));
        })
        .catch(error => console.error("Error loading image:", error));
});
