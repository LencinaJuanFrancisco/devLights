/* Utilice la asignación de desestructuración para extraer valores de los objetos */
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today} = HIGH_TEMPERATURES;
  const {tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line

  console.log(today,tomorrow);