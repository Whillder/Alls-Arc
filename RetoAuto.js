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


