class index {    
    constructor() {
        console.log("--- Comienzo proyecto ---");
    }
}

function mostrar(){
    document.getElementById("datos").style.display="block";
}

function ocultar(){
    document.getElementById("datos").style.display="none";
}

window.onload = () => new index();