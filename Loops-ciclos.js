var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes (estudiante){
    console.log(`Hola, ${estudiante}`);
}

for (var i=0; i<estudiante.length; i++){
    //console.log (estudiante[i]);
    saludarEstudiantes(estudiante[i])
}
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
while(estudiantes.length >0){
    var estudiante = estudiantes.shift();//va eliminando un elemento del array
    saludarEstudiantes(estudiante);
}

var nombre="Whillder";
var apellido="Escalante";
var usuario_platzi="whillder";
var edad=30;
var email="whillder@gmail.com";
var mayor_edad=true;
var dinero_ahorrado=100;
var deudas=20;

console.log('tu nombre completo es: '+nombre+' '+apellido);
console.log('Te queda:' +(dinero_ahorrado-deudas));