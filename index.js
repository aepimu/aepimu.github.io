document.addEventListener("DOMContentLoaded", function () {
    fetch("homepageimages.json")
        .then(response => response.json())
        .then(images => {
            const carouselInner = document.getElementById("carouselInner");

            images.forEach((image, index) => {
                const slide = document.createElement("div");
                slide.className = "carousel-item" + (index === 0 ? " active" : "");
                slide.innerHTML = `
                        <img class="d-block h-100 carousel-img object-fit-cover" src="img/${image}" alt="${image}">
                `;
                carouselInner.appendChild(slide);
            });
        })
        .catch(error => console.error("Error loading image:", error));
});
