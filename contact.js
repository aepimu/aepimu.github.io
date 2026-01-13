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
                
                // Build mail button HTML only if email exists
                let mailButtonHTML = "";
                if (contact.email && contact.email.trim() !== "") {
                    mailButtonHTML = `
                        <div>
                            <a class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center mail-button" 
                               href="mailto:${contact.email}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>
                        </div>
                    `;
                }
                
                col.innerHTML = `
                    <div class="py-1">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="fw-bold">${contact.position}</h4>
                                <p class="mb-0">${contact.name}</p>
                            </div>
                            ${mailButtonHTML}
                        </div>
                    </div>
                `;

                grid.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading contacts data:", error));
});