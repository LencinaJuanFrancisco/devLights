/* Use la sintaxis de clase para definir una función constructora*/ 
// Only change code below this line
class Vegetable{
    constructor(name){
      this.name = name
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name);