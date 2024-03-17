document.getElementById("azul").addEventListener("click", function() {
    this.style.backgroundColor = "black";
});
document.getElementById("rojo").addEventListener("click", function() {
    this.style.backgroundColor = "black";
});
document.getElementById("verde").addEventListener("click", function() {
    this.style.backgroundColor = "black";
});
document.getElementById("amarillo").addEventListener("click", function() {
    this.style.backgroundColor = "black";
});
let color = "";
document.addEventListener('keydown', function (event) {
    const keyDiv = document.getElementById("key");
    if (event.key === 'a') {
        color = "rosado";
        keyDiv.style.backgroundColor = "pink";
    } else if (event.key === 's') {
        color = "naranjo";
        keyDiv.style.backgroundColor = "orange";
    } else if (event.key === 'd') {
        color = "celeste";
        keyDiv.style.backgroundColor = "lightblue";
    } else if (event.key === 'q') {
        document.body.innerHTML += '<div style="width: 200px; height: 200px; background-color: purple;"></div>';
    } else if (event.key === 'w') {
        document.body.innerHTML += '<div style="width: 200px; height: 200px; background-color: gray;"></div>';
    } else if (event.key === 'e') {
        document.body.innerHTML += '<div style="width: 200px; height: 200px; background-color: brown;"></div>';
    }
});