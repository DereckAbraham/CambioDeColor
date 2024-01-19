let cambioVerde = document.querySelector(".cuadroGrande");
        
function cambioOne() {
    cambioVerde.style.backgroundColor = 'green';
}

let btnVerde = document.querySelector(".btnOne");
btnVerde.addEventListener("click", cambioOne);

let cambioRojo = document.querySelector(".cuadroGrande");

function cambioTwo() {
    cambioRojo.style.backgroundColor = 'red';
}

let btnRojo = document.querySelector(".btnTwo");
btnRojo.addEventListener("click", cambioTwo);