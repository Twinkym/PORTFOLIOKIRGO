function showHidden() {
    var menuButton = document.getElementById("menuButton");
    menuButton.style.visibility = "hidden"; // Oculta el botón "Menu"

    var hiddenElements = document.querySelectorAll(".water-drop-hidden");
    hiddenElements.forEach(function (element) {
        // Mostrar cada submenú en una posición aleatoria
        if (element.style.visibility === "hidden") {
            var x = Math.floor(Math.random() * window.innerWidth);
            var y = Math.floor(Math.random() * window.innerHeight);
            element.style.position = "absolute";
            element.style.left = x + "px";
            element.style.top = y + "px";
            element.style.visibility = "visible";
        }
    });
}
