//Global -> Universo , seria como el todo , las variables son accesibles desde cualquier parte del código.
//Local -> Cada Planeta , un mundo distinto , las variables son accesibles en ese mundo  
//no es visible para los demás mundos.
//Resumen : lo que es global se puede acceder desde cualquier parte de tu código , 
//y lo pueden acceder cada mundo , lo que es local solo lo puede acceder cada mundo.

var minombre = "Diego";//VARIABLE ES SCOPE GLOBAL

function nombre(){// DENTRO DE LA FUNCION SCOPE LOCAL
  var miApellido = "De Granda"; 
  console.log(minombre + "" + miApellido); 
}//