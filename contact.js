document.addEventListener("DOMContentLoaded", function () {
    const timestamp = new Date().getTime();
    const url = `contact.json?v=${timestamp}`;
    fetch(url)
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
                            <a class="email-icon-btn" href="mailto:${contact.email}" title="Email ${contact.name}">
                                <svg class="envelope-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                                    <path d="m22 6-10 7L2 6"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                `;

                grid.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading contacts data:", error));
});