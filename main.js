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

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            const footerEl = document.querySelector("footer");
            footerEl.className = "site-footer";
            footerEl.innerHTML = data;

            // Highlight the active page
            const currentPage = window.location.pathname.split("/").pop();
            document.querySelectorAll(".nav-link").forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        });
});

