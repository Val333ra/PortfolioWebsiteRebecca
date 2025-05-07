const hamMenu = document.querySelector('.hamburger');
const list = document.querySelector('.list');

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle('active');
    list.classList.toggle('active');
})


const daynight = document.getElementById("daynight");
const darkbright = document.getElementById("body");

daynight.addEventListener("click", function() {
    if (daynight.src.endsWith("Night.svg")) {
        darkbright.classList = "white-mode";
        daynight.src = "SVG/Day.svg";
    } else {
        daynight.src = "SVG/Night.svg";
        darkbright.classList = "dark-mode";
    }
})