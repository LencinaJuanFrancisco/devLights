/* Utilice el map, filter reduce de funciones de orden superior para resolver un problema complejo*/
const squareList = arr => {
    // Only change code below this line
    return arr.filter(elem=> elem > 0 && Number.isInteger(elem)
     ).map(item => item * item)
  
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);