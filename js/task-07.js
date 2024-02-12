let input = document.getElementById("front-size-control");
let text = document.querySelector("#text");

control.addEventListener("input", () => text.style.fontSize = control.value + "px");

