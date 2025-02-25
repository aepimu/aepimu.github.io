document.addEventListener("DOMContentLoaded", function () {
    fetch("composites.json")
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById("composite-container");
            let row;

            data.forEach((composite, index) => {
                if (index % 2 === 0) {
                    row = document.createElement("div");
                    row.className = "row";
                    grid.appendChild(row);
                }

                const col = document.createElement("div");
                col.className = "col-6 hover-zoom p-3";
                col.innerHTML = `
                    <a href="img/${composite}" target="_blank">
                        <img class="img-fluid" style="object-fit: cover; width: 100%; aspect-ratio: 4/3;" src="img/${composite}" alt="${composite}">
                    </a>
                `;

                row.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading composite data:", error));
});
