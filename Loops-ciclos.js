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
