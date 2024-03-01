var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var toggleContainer = document.getElementById("toggle");
var circle = document.getElementById("button-switch");

var isToggled = false;

toggleContainer.onclick = function () {
    if (!isToggled) {
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.classList.add("dark-mode");

        toggleContainer.style.backgroundColor = "#333"; // Change button background color

        isToggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode");

        toggleContainer.style.backgroundColor = "#222"; // Change button background color

        isToggled = false;
    }
}
