var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var toggle = document.getElementById("toggle");
var button = document.getElementById("button-switch");

var Toggled = false;

toggle.onclick = function () {
    if (!Toggled) {
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        button.classList.add("dark-mode");

        toggle.style.backgroundColor = "#333"; // Change button background color

        Toggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        button.classList.remove("dark-mode");

        toggle.style.backgroundColor = "#222"; // Change button background color

        Toggled = false;
    }
}
