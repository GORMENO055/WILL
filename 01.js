/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

  var numeros=[];
  
  for (let index = 0; index < array.length; index++) {
      
    if (Number.isInteger(array[index])) {
      //array.splice(index,1);
      //delete(array[index]);
      numeros.push(array[index])
    }else{
      console.log("n - " + index);
    }
    
  }
  return numeros;
  
}

var num=["dff",4,5,6,44,33,"gg","hh","gh",65,"ee",44];

console.log(soloNumeros(num));
//console.log(numeros);

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros