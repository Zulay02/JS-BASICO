4 + "7";     // 47 es un estring, genera una concatenación.
4 * "7";     // 28 es un número, genera una operación completa.

//esto es una coercion:es la forma en que podemos cambiar un tipo de valor a otro tipo de valor.
//hay dos tipos de coerciones: implicitas y explicitas.

//C0ERCION IMPLICITA:
//las coerciones implicitas es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor.
//un valor tipo número y lo podemos cambiar a un valor tipo string, y viceversa.
4 + "7"; 
var a = 4 + "7"; 
//con el operador de + se produce una concatenación y nos regresa un número 47.
//el operador de + en valores o tipos diferentes genera una concatenación.
//fusión sin operación nos da 47 y lo convierte en un estring.
//nos regresa un estring, junta los dos valores, sin operación.
//es una coerción implicita.

4 * "7";
var b = 4 * "7";
//genera una operacion, nos regresa numero 28,
//es una coerción implicita que ocupa un operador de numero y realiza la operación.

//COERCION EXPLICITA.
//las coerciones explicitas es cuando nosotros obligamos a que un valor de un tipo cambie a un valor de otro tipo, 
//si necesitamos que ese valor sea de un tipo distinto.
var a = 20; 
// a = numero
var b = a + ""; 
// b = a y la concatenación de un string.  
console.log(b);
//nas de 20, es string
var c = String(a) 
//usamos el metodo String con la variable a concatenar.//convierte el valor de c en un string (20)
console.log(c); 
//nos da 20. EL METODO String(), hace una coerción explicita.
var d = Number(c);
//c es el 20 string, se convierte en un 20 numero.

//VALORES Truthy
2 + true;    // 3
false - 3;   // -3