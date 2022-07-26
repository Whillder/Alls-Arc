// Player vs Pc
var cont_user = 0;
var cont_machine = 0;
var empate = 0;
var jugadas =0;

while (user != 'salir'){
    var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera - Para Terminar el juego escribe salir "); 
    var user = pregunta.toLowerCase();
    var options = ["piedra", "papel", "tijera"];
    var machine = options[Math.floor(Math.random() * 3)];
switch (true) {
    case (user === machine):
        jugadas ++;
        empate ++;
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel' || machine === 'papel'  && user === 'tijera' || machine === 'tijera' && user === 'piedra'):
        jugadas ++;
        cont_user ++;
        console.log('Ganaste, machine escogió ' + machine)
        break;
    case (user === 'piedra' && machine === 'papel' || user === 'papel'  && machine === 'tijera' || user === 'tijera' && machine === 'piedra'):
        jugadas ++;
        cont_machine ++;
        console.log('¡Perdiste!, machine escogió ' + machine)
        break;
    case (user === 'salir'):
        console.log('Hasta pronto')
        break;
    default:
        console.log('Respuesta errada, escribiste: ' + user);
}
}
console.log('Resultado final de: '+jugadas+' rondas. Ganaste:->'+cont_user+ ' Perdiste:->'+ cont_machine+ ' Empates:->' +empate)

// 2 jugadores
var preg_name1= prompt(" Jugador 1 Ingresa Nombre")
var preg_name2= prompt(" Jugador 2 Ingresa Nombre")
    var pregunta1 = prompt('Hola '+preg_name1+' Ingresa tu opción: piedra, papel o tijera')
    var player1 = pregunta1.toLowerCase();
    var pregunta2 = prompt('Hola '+preg_name2+' Ingresa tu opción: piedra, papel o tijera')
    var player2 = pregunta2.toLowerCase();
switch (true) {
    case (player1 === player2):
        console.log('es un empate');
        break;
    case (player2 === 'piedra' && player1 === 'papel' || player2 === 'papel'  && player1 === 'tijera' || player2 === 'tijera' && player1 === 'piedra'):
        console.log('!Ganaste '+preg_name1+'¡ con '+player1+ ' por que ' +preg_name2+ ' escogió '+ player2)
        break;
    case (player1 === 'piedra' && player2 === 'papel' || player1 === 'papel'  && player2 === 'tijera' || player1 === 'tijera' && player2 === 'piedra'):
        console.log('!Ganaste '+preg_name2+'¡ con '+player2+ ' por que ' +preg_name1+ ' escogió '+ player1)
        break;
    default:
        console.log('Respuesta errada, escribiste: ' + user);
}
