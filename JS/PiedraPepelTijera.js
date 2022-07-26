var jugador ="";
var compu = "";

function Juego (jugador, compu) {
    console.log("Elije entre Piedra - Papel o Tijera y Juguemos");
    if (jugador === "Tijera" && compu === "Papel" ||
        jugador === "Piedra" && compu === "Tijera" ||
        jugador === "Papel" && compu === "Piedra") {
    console.log("Ha Ganado el Jugador");
    }
    else if(compu === "Tijera" && jugador === "Papel" ||
            compu === "Piedra" && jugador === "Tijera" ||
            compu === "Papel" && jugador === "Piedra"){
        console.log("Ha Ganado la Compu");
    }
    else if (jugador == compu) {
        console.log("Empate");
    }

    else {
        console.log("Selecciona una opción valida");
    }
}

Juego ("Tijera", "Papel");
