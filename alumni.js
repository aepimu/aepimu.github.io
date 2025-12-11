document.addEventListener("DOMContentLoaded", function () {
    const numColumns = 4;
    const container = document.getElementById("past-masters-container");
    const timestamp = new Date().getTime();
    const url = `masters.json?v=${timestamp}`;
    fetch(url)
        .then(response => response.json())
        .then(pastMasters => {
            const totalItems = pastMasters.length;
            const itemsPerColumn = Math.ceil(totalItems / numColumns);

            const columns = Array.from({length: numColumns}, () => document.createElement("div"));
            columns.forEach(col => {
                col.classList.add("col-md-3");
                col.innerHTML = "<ul class='list-unstyled mb-0'></ul>";
                container.appendChild(col);
            });

            pastMasters.forEach((entry, index) => {
                const columnIndex = Math.floor(index / itemsPerColumn);
                const list = columns[columnIndex].querySelector("ul");
                const listItem = document.createElement("li");
                listItem.innerHTML = `<b>${entry.year}:</b> ${entry.name}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching past masters:", error));
});