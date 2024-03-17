document.addEventListener("DOMContentLoaded", function() {
    const ele = document.getElementById("ele1");
    ele.addEventListener("click", function(event) {
        pintar(event, 'yellow');
    });
});

function pintar(event, color = 'green') {
    event.target.style.backgroundColor = color;
}
