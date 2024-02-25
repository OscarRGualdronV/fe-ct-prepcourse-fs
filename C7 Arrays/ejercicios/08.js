function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   console.log(num)
   console.log(array)

   for (let i = 0; i < array.length; i++) {
      if(array[i] === num ) return i;
   } return -1;

}

encontrarElemento(4,[1,2,3,4,5,6,7]);

module.exports = encontrarElemento;
