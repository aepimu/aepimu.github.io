document.addEventListener("DOMContentLoaded", function () {
    fetch("newsletters.json")
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById("newsletter-container");

            data.forEach((newsletter) => {
                const col = document.createElement("div");
                col.className = "col-12 col-sm-6 col-lg-4 hover-zoom p-5 text-center d-flex";
                col.innerHTML = `
                    <a href="pdf/${newsletter.pdf}" target="_blank">
                        <h4 class="fw-bold">${newsletter.label}</h4>
                        <img class="img-fluid shadow" style="object-fit: cover; width: 100%; aspect-ratio: 8.5/11;" src="img/${newsletter.thumbnail}" alt="${newsletter.thumbnail}">
                    </a>
                `;

                grid.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading composite data:", error));
});
