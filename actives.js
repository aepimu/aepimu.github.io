document.addEventListener("DOMContentLoaded", function () {
    fetch("brothers.json")
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById("brothers-grid");

            data.forEach(brother => {
                const col = document.createElement("div");
                col.className = "col-6 col-lg-4 col-xl-3 d-flex text-center";
                col.innerHTML = `
                    <div class="card p-3 w-100">
                        <h4 class="fw-bold">${brother.name}</h4>
                        <p class="mb-1">${brother.gradYear} · ${brother.hometown}</p>
                        <i>${brother.position ? `${brother.position}` : ""}</i>
                    </div>
                `;

                grid.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading brotherhood data:", error));
});
