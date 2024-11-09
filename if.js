//CONDICIONALES: son reglas qque vamos a aplicar para VALIDAR si algo es 
//es verdadero o falso y poder generar ciertas acciones con eso.
//if (){}
if (true){
    console.log("Hola");//genera el Hola
}
if (false){
    console.log("Hola");//no pasa nada
} 
//si if es falso, no pasa nada, es necesario validar con else
else {
   console.log("Soy falso");//genera soy falso 
}

//condicion en dos o tres pasos, que tenga que validar mas cosas.
if (true){
    console.log("Hola");//genera el Hola
}
else if (""){
    console.log("soy falso;");//si jno es lo primero o lo segundo entonces es falso 
    //y va a pasar algo en else
}
else {
    console.log("Soy falso");//genera soy falso. genera la condicion de else. 
 }

//ejemplo
var edad = 18;

if(edad === 18)
{
    console.log("Puedes votar, sera tu primera votación");
}
else if (edad > 18)
{
    console.log("puedes votar de nuevo");
}
else 
{
    console.log("aun no puedes votar");
}


condition ? true : false;


var numero = 1;

var resultado = numero === 1 ? " Si soy uno" : "No soy uno";
