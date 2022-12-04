/* Implementar mapa en un prototipo */
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach(item => newArray.push(callback(item)))
    // Only change code above this line
    return newArray;
  };

   /// CON AYUDA!!!!