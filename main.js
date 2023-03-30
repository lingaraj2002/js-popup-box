let box = document.querySelector('.popup');
let but = document.querySelector('#but');
function add() {
    box.style.display = "block";
    box.style.transform = "translateX(-100px)";
    box.style.transition = "3s";
    but.style.opacity = "0.3";
}
function closing() {
    box.style.display = "none";
    but.style.opacity = "1";
} 