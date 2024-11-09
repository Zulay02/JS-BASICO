//HOISTING: CUAndo se manda a llamar la variable sin haberla inicializado.
console.log(miNombre);

var miNombre;//DECLARAMOS LA VARIABLE.
//undefined//error
miNombre = "Diego";//SE INICIALEZA LA VARIABLE.


hey();//mando llamar la funcion, antes de inicializarla.

function hey()
{
    console.log("Hola " + miNombre);
}
var miNombre = "Diego"//mando llamar la funcion, me genera un undefined.