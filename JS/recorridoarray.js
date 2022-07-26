//------------------------Crear Objetos dentro de un array
var Autos = []; 
var cantRegistro= 0;
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo; 
  this.annio = annio; 
}
while (cantRegistro<=30){
    var optionMarcas = 
        ["Abarth",
        "Alfa Romeo",
        "Aro",
        "Asia",
        "Asia Motors",
        "Aston Martin",
        "Audi",
        "Austin",
        "Auverland",
        "Bentley",
        "Bertone",
        "Bmw"];
    var optionModelos = [
        "Modelo 1",
        "Modelo 2",
        "Modelo 3",
        "Modelo 4",
        "Modelo 5"
];
var optionAnnios = [
    "2018","2019","2020","2021","2022"];
    var marca = optionMarcas[Math.floor(Math.random() * 12)];
    var modelo = optionModelos[Math.floor(Math.random() * 5)];
    var annio = optionAnnios[Math.floor(Math.random() * 5)];
    Autos.push(new auto(marca,modelo,annio));
    cantRegistro++;
}
for (var i=0; i<Autos.length; i++){
    console.log(Autos[i]);
}
//--------filter------------- Ayuda a filtrar cosas especificas de un array, generando otro array con eso datos
var autosnuevos = Autos.filter(function(Auto){//Devuelve todos los elementos del array que cumplan con la condición dada
    return Auto.annio>=2020});// Se vrea una variable que sera un array con los autos del annio>=2020
var audis2 = Autos.filter(function(Auto){
    return Auto.marca=='Audi'});
//---------map--------------- Ayuda a Mapear, mapea todo el contenido del array y nos trae solo la informacion pedida sin informacion del objeto.
var automarcas = Autos.map(function(Auto){
    return Auto.marca});
//--------find()------------- Ayuda a buscar una informacion especifica, creas un objeto de solo la informacion que buscas
var buscarauto = Autos.find(function(Auto){//el find se usa para buscar ID, Cedulas informacion Unica.
    return Auto.marca==="Audi";// Devuelve el primer elemento del array que cumpla con la condición dada
});
//--------forEach()----------Ejecuta lo que le definamos una vez por cada elemento de nuestro array
Autos.forEach(function(Auto){
    console.log(Auto.marca);
});
//-------some()------------ Comprueba si al menos un elemento del array cumple con la condición que le damos / Resultado Booleano.
var autosviejos = Autos.some(function(Auto){
    return Auto.annio <=2010;
});

