document.addEventListener("DOMContentLoaded", function () {
    fetch("contact.json")
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById("contacts-list");

            data.forEach(contact => {
                const col = document.createElement("div");
                col.className = "";
                col.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center py-1">
                        <div>
                            <h4 class="fw-bold">${contact.position}</h4>
                            <p class="">${contact.name}</p>
                        </div>
                        <div>
                            <a class="" href="mailto:${contact.email}"><span class="material-symbols-outlined opacity-50 hover-zoom">mail</span></a>
                        </div>
                    </div>
                `;

                grid.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading brotherhood data:", error));
});
