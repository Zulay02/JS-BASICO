//arrays  con contenido de objetos.
//METODOS QUE NOS AYUDAN A FILTRAR Y RECORRER LOS ARRAYS.
//PRIMER METODO
var articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
var articulosfiltrados = articulos.filter(function(articulo){
    returnarticulo.costo <= 500
});
//Crea un nuevo array con los elementos del array que se pasó como
// parámetro y que cumplan con la condición definida
//primer metodo: .filter() ayuda a filtrar propiedades de los articulos.
//agrega a un nuevo array solo los artículos que cumplen la validación, <= 500


//SEGUNDO METODO
//Crea un nuevo array con los resultados de la llamada a la función indicada
// aplicados a cada uno de sus elementos.
// .map() me ayuda a mapear ciertos artículos
var nombrearticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//TERCER METODO
//Retorna el primer elemento de un array que cumple con una condición 
//definida en un nuevo array.
//.find() ayuda a encontrar algo dentro del artículo.
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});


//CUARTO METODO
//Ejecuta la función indicada una vez por cada elemento del array.
// .forEach() no genera un nuevo arrays, hace el filtrado sobre el arrays que ya rengo y me regresa cosas
articulos.forEach(function(articulo){
    console.log(articulo.nombre);//me genera los nombres
    console.log(articulo.costo);//me genera los costos
    console.log(articulo.anno);//me genera los años
});

//QUUINTO METODO
//.some() nos regresa una validación de verdadero o falso para articulos que cumplan esa validacion.
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});
//regresa si la condicion es true verdadero, o false falso.

//SEXTO METODO
//El método .push() nos permite agregar uno o más elementos al final de un array.


//SEPTIMO METODO
// eliminar un elemento del array .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
