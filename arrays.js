[] //es una extructura o lista de datos de tipo objeto que guarda mas valores adentro,
// pueden ser numeros o string ("");
//los arrays pueden contener mas arrays.
//un array puede aumentar o disminuir su tamaño.
//elementos principales de un array: indice y elemento.
//acceder al valor del arrays a traves de una variable.
var frutas = [];//forma sintaxica de un array

//forma sintaxica de escribir un arrays
var frutas = ["manzana", "platano", "cereza", "fresa"];

//acceder a todo el arrays y cada uno de sus elemntos
console.log(frutas);

//poder ver los elementos, cual es su longitud, cuantos elemntos tiene.
console.log(frutas.length);

//acceder a cada elemnto del arrays.
console.log(frutas[0]); //manzana.
console.log(frutas[1]); //platano.
console.log(frutas[2]); //cereza.
console.log(frutas[3]); //fresa

//METODOS
//añadir elementos al final
var masfrutas = frutas.push("uvas");
console.log(frutas);

//eliminar el ultimo elemento 
var ultimo = frutas.pop("uvas");
console.log(frutas);

//añadir elementos al inicio
var nuevaLongitud = frutas.unshift("uvas");
console.log(frutas);

//eliminar el primer elemento
var borrarfruta = frutas.shift("uvas");
console.log(frutas);

//volveer a llamar un elemento
var nuevaLongitud = frutas.unshift("uvas");
console.log();
//se llamo el elemento de la primera posición.
var borrarfruta = frutas.shift("manzana");
console.log(frutas);
//no se elimina porque se cambio el elemento uvas.

//saber la posicion de un elemento
var posicion = frutas.indexOf("cereza")
console.log(posicion);


//LOPS O CICLOS: For y for...of

//PRIMERA FORMA DE UTILIZAR EL LOOPS FOR
//ciclo es una manera rapida y sencilla para hacer que una tarea pueda 
//repetirse sin que tenga que hacer de forma manual.

//arrays
var estudiantes = ["Maria","Sergio", "Rosa","Daniel"];

//la funcion va a hacer una tarea especifica.
//funcion recibe un parámetro que va a hacer el estudiante.
function saludarEstudiantes(estudiante)
{ 
    //para llamar una variable: console.log, con un string, para que se pueda imprimir todo junto.
    //el loops ejecuta la tarea
    console.log("hola, s(estudiante)");
}
//loop que ejecuta la tarea.
//la forma de trabajar este for:
//extuctura en la sintaxis es similar a una función.
//se divide en tres pasos.
for(var i = 0; i < estudiantes.length; i++)
{   //llamar el arrays.
    console.log(estudiantes[i]);
    //se cambia por la funcion y se llama el arrays
   
    saludarEstudiantes(estudiante[i]); 
   //function saludarEstudiante(estudiante)[i] 
   // //[i] es el index
  //arrays (estudiante [i])en la posición de [i]
   //la posición de [i] es e index, trae el elemento que está en ese numero.
}
//SEGUNDA FORMA DE UTILIZAR EL LOOPS FOR
//el mismo ejemplo: 
for(var estudiante of estudiantes)
//estudiante es el parametro.
//estudiantes hace referencia al arrays.
//la variable es el singular de un grupo de estudiantes.
[
    saludarEstudiantes(estudiante),
]

//TERCERA FORMA DE UTILIZAR EL LOOPS:
// WHILE.
var estudiantes = ["Maria","Sergio", "Rosa","Daniel"];//arrays[]
{
function saludarEstudiantes(estudiante)//parametro estudiante.
console.log("hola, s(estudiante)");
}

while(estudiantes.length > 0)//mientras la longitud del arrays sea mayor a 0, lo que este dentro del while va a pasar.
{
    console.log(estudiantes);// hasta que la longitud es igual a 0, y se rompe el ciclo.
    var estudiante = estudiantes.shift();//metodo de mutacion que va sacando elementos del arrays.
    saludarEstudiantes(estudiante); // funcion nos arroja el saludo a todos los estudiantes contenidos en variable estudiante como parametro.
}