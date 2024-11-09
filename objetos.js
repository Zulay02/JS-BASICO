var objeto = {};//esto es un objeto, su volor y su tipo es objeto.
// se manejan con propiedades.
//las propiedades es una combinación entre palabras claves y valores.
//palabra clave: marca. Valor: Toyota
var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020     
};
//para podeer accdeder al valor de un objeto es con el punto . y la palabra clave que estamos buscando. miAuto.marca
//para acceder a la informacion del objeto, mando traer la variable.
//miauto //regresa todo el objeto: marca, modelo, anmio.
//miauto.marca //regresa el valor de la palabra clave:Toyota.
//miauto.anio // me regresa el valor numero.

//podemos generar que una de las propiedades del objeto sea una función.
//y la función pueda hacer cosas con las propiedades del mismo objeto.

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020, 
    //AGREGAR UNA PROPIEDAD QUE LLEVA UNA FUNCIÓN COMO VALOR, ES UN METODO DE OBJETOS. SE AGREGA UNA COMA,
    detalleDelAuto: function(){
        console.log("Auto s(this.modelo) s(this.annio");
    }    
};
//el this es una variable que hace referencia al objeto global: miAuto
//la forma de ingresar al metodo que esta dentro de la función
//que está dentro del objeto es llamando mi objeto:
miAuto.detalleDelAuto();//su valor es una funcion.

//FUNCION CONSTRUCTORA:
function auto(marca, modelo, annio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
//construir:
var autoNuevo = new auto("Tesla","Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model x", 2020);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
autoNuevo  //LLAMAR LA FUNCIÓN
autoNuevo2 //LLAMAR LA FUNCION
autoNuevo3 //LLAMAR LA FUNCION.
//el operador new genera una nueva instancia de la funcion coonstructora.
//una instancia es generar un objeto que deriva de otro objeto.

//GENERAR UNA FUNCION COONSTRUCTORA Y HACER UN LOOP O CICLO PARA DAR UNA LISTA DE 30 CARROS, QUE SE VAYAN CONSTRUYENDO SOLOS.

var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020, 
    detalleDelAuto: function(){
        console.log("Auto s(this.modelo) s(this.annio");
    }    
};    
function auto(marca, modelo, annio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla","Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model x", 2020);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);