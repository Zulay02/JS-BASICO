//el switch es una forma de validar, de generar una condicion
//es difernte al if pero hace lo mismo.
//se validan ciertas cosas, la sintaxis es difernte.
//funciona por casos,si el caso es verdad va a pasar esa parte.
//si el caso no es verdad, puedo ir generando otros casos,
//como el else if, si nada de los casos es verdad, entramos a una
//etapa de default que sería el else.
//SINTAXIS DEL SWITCH:
switch (true){

}
//ejemplo:
var numero = 1;

switch (numero)
{
    case 1:
        console.log("Soy uno"); 
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("S0y un 100");
        break;
    default: 
        console.log("No soy nada");   
}