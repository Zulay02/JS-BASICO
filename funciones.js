//funciones son un conjunto de sentencias o tareas que podemos
//utilizar para generar ciertas acciones con los valores que
//ya guardamos antes en las variables.

//CLASES DE FUNCIONES:
// DECLARATIVAS: En las funciones declarativas, utilizamos la palabra reservada function
// al inicio para poder declarar la función:
function miFunction()
{
    return 3
}
miFunction();

//
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

//EXPRESION O ANONIMAS: Expresión de función:En la expresión de función, la declaración 
//se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

var miFunction = function(a,b)
{
    return a + b;
} 
miFunction();//es la variable convertida en funcion.
//de esta forma la variablle se trata como una funcion.
//se le colocan los parentises

//En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
nombre("Diego");

//ejemplo.
//FUNCION DECLARATIVA:
function saludarEstudiantes(estudiante){
    console.log(estudiante)
    console.logs("Hola s(estudiante)");//para hacer una tarea repetitiva.
    }
saludarEstudiantes("Diego")//MANDAMOS LLAMAR LA FUNCION.

//FORMA DE REGRESAR CIERTOS RESULTADOS EN UNA OPERACION.
function sumar(a,b){
    var resultado = a + b;
    return resultado;
} 
sumar(1,2);
//o asi.
function sumar(a,b){
    return a + b;
}


//Diferencias:A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. 
//Ya que el hoisting solo se aplica en las palabras reservadas var y function.
//Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de 
//que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, 
//y después mandarla llamar.