/*Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y 
devuelve el promedio de la longitud de ambos strings.

Ejemplo de entrada:

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6*/


function computeAverageLengthOfWords(stringOne, stringTwo) {
    //Retorno el largo de cada string sumado, luego lo divido en 2 para devolver el promedio.
    return (stringOne.length + stringTwo.length) / 2;
  }
 console.log(computeAverageLengthOfWords);