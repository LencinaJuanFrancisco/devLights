/* Utilice la asignación de desestructuración para asignar variables de objetos*/ 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
  // change code above this line
  
  console.log(highToday);
  console.log(highTomorrow);