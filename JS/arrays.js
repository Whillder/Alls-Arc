var frutas = ["Manzana", "Cambur", "Cereza","Fresa"];
var masfrutas = frutas.push("Uvas")// Agrega elementos al final del array indicado.
var ultimo = frutas.pop("Uvas"); //Elimina el ultimo elemento del array
var primero = frutas.unshift ("Uvas"); //Agrega elementos al inicio del array indicado.
var byeprimero = frutas.shift("Uvas"); //Elimina el primer elemento del array
var posicion = frutas.indexOf ("Cereza"); //buscar en el array un valor
console.log(frutas);
//para saber la dimencion del array

console.log(frutas.length);

//para imprimir o seleccionar un item del array

console.log(frutas[0]); //Imprime "Manzana". El Array inicia en el nro 0.