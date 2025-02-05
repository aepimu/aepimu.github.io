document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Highlight the active page
            const currentPage = window.location.pathname.split("/").pop();
            document.querySelectorAll(".nav-link").forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });
});