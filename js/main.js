// siempre que se inicie tiene que empezar en 0

let puntosUsuario = 0;
let puntosPC = 0;

// vamos a declarar todo lo necesario para usar despues y asi poder modificar el html con JS

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelector("#elegi-tu-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");
let reiniciar = document.querySelector("#reiniciar");

let botonesArmas = document.querySelectorAll(".arma");
// quiero que los botones tengas un evento 👇
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno); // cada vez que haga click en el boton iniciar turno
});

// creo la funcion para pasarle el evento
function iniciarTurno(e) {
    
    // como hacer para que la computadora elija un numero
    let eleccionPC = Math.floor(Math.random() * 3);
    // math random * 3 da un numero aleatorio entre 0 y 3. Math floor redondea hacia abajo. Ponemos 3 pq son 3 opciones.
    let eleccionUsuario = e.currentTarget.id; // nos devuelve el id de lo q cliqueamos

    // ahora comparo la eleccion de la pc con el usuario
    // piedra => 0, papel => 1, tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel";
    } else if (eleccionPC === 2) { 
        eleccionPC = "tijera";
    }

    // piedra vence a tijera
    // tijera vence a papel
    // papel vence a piedra
    // si son iguales es empate

    // comparamos la eleccion del usuario con la pc

    if (
        (eleccionUsuario === "piedra" && eleccionPC === "tijera") ||
        (eleccionUsuario === "tijera" && eleccionPC === "papel") ||
        (eleccionUsuario === "papel" && eleccionPC === "piedra")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra" && eleccionUsuario === "tijera") ||
        (eleccionPC === "tijera" && eleccionUsuario === "papel") ||
        (eleccionPC === "papel" && eleccionUsuario === "piedra")
    ) {
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled"); // elimina la clase de desactivado
    contenedorEleccionUsuario.innerText = eleccionUsuario; // esto es para q muestre lo q elige el usuario
    contenedorEleccionPC.innerText = eleccionPC;

    // de esta forma finalizo el juego
    if (puntosUsuario === 5 || puntosPC === 5) {

        if (puntosUsuario === 5) {
            instrucciones.innerText = "Ganaste el juego! 🎉"
        } else if (puntosPC === 5) {
            instrucciones.innerText = "La computadora ganó el juego! 😪";
        }

        elegiTuArma.classList.add("disabled"); // le agrego el deshabilitado a elegituarma
        reiniciar.classList.remove("disabled"); // le saco el deshabilitado al boton reiniciar

        reiniciar.addEventListener("click", reiniciarJuego); // creo el evento para reiniciar el juego
    }

}

// creo las funciones de que pasa si gana el usuario, la pc o hay empate

function ganaUsuario() {
    puntosUsuario++; // suma un punto al usuario
    contenedorPuntosUsuario.innerText = puntosUsuario; // muestra el punto del usuario
    contenedorGanaPunto.innerText = "Ganaste un punto! 🎉" // muestra el msj de q ganó 1 punto
    
}

function ganaPC() {
    puntosPC++; // suma un punto al usuario
    contenedorPuntosPC.innerText = puntosPC; // muestra el punto del usuario
    contenedorGanaPunto.innerText = "La computadora ganó un punto! 😪" // muestra el msj de q ganó 1 punto
    
}

function empate() {
    contenedorGanaPunto.innerText = "Hubo un empate 😒"

    
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled"); // que se le agregue disabled a reiniciar
    elegiTuArma.classList.remove("disabled"); // que se le quite el disabled a elegituarma
    mensaje.classList.add("disabled");

    puntosUsuario = 0; // que los puntos se reinicien
    puntosPC = 0;


    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;

    instrucciones.innerText = "El primero en llegar a 5 puntos gana." // reiniciamos el titulo


    
}

