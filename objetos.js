var miAuto ={
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    } 
};
miAuto.marca //se usa para mandara  llamar la informacion especifica del objeto 
miAuto.detalleDelAuto();//De esta forma se llama una function dentro de un objeto.
