/*
1. Lógica: Un barrio de ocho casas, representadas como celdas, están organizadas en línea recta. Cada
día, todas las celdas compiten con sus celdas adyacentes (vecinos). Un valor entero de 1
representa una celda activa y un valor 0 representa una celda inactiva. Sí ambos vecinos están
activos o inactivos, la celda cambia su estado a inactivo el siguiente día. De lo contrario, la
celda cambia su estado a activo el siguiente día.
Las celdas de inicio y final al tener solamente una celda adyacente se puede asumir que el
vecino faltante siempre tendrá un estado inactivo. Se debe tener en cuenta que incluso
después de actualizar el valor de la celda en proceso, su valor anterior es considerado para
actualizar el valor de las otras celdas.
Defina un algoritmo que muestre el estado de las celdas después de un número de días
determinado.
Entradas:
- Casas: Lista de enteros que representa el estado actual de las celdas. Este elemento solo
tendrá valores 1 y 0.
- Días: Un entero que representa la cantidad de días.
Salidas:
Retorne un listado de enteros que muestre el estado de las celdas después de un determinado
número de días.
*/
const neighborhood = (houses = [], days = 0) => {
  // Validaciones...
  if(houses.length === 0 || houses.length < 8 || houses.length > 8){
    return console.log('Ingresa un array de 8 valores')
  }
  for (const ele of houses) {
    if(typeof ele !== 'number'){
      return console.log('El array contiene valores diferentes a un número')
    }
    if(ele > 1 || ele < 0){
      return console.log('El array solo puede tener valores que sean 1 ó 0')
    }
  }
  if(typeof days !== 'number' || days === 0){
    return console.log('El número de dias no es valido')
  }


  let result = houses
  let copyResult = []

  // Se repite dependiendo cuantos dias hay
  for (let day = 0; day < days; day++) {
    for (const index in result) {
      let i = JSON.parse(index)
      if(i === 0){
        copyResult.push(statusHouse(0, i, result[i+1]))
      }
      if(i === 7){
        copyResult.push(statusHouse(result[i-1], i, 0))
      }
      if(i > 0 && i < 7){
        copyResult.push(statusHouse(result[i-1], i, result[i+1] ))
      }
    }

    result = copyResult
    copyResult = []
  }
  
  console.log(`Resultado: ${result}`)

}

// Verifica si la casa está activa o inactiva
const statusHouse = (a, house, b) => {
  if((a === 0 && b === 0) || (a === 1 && b === 1)){
    return 0
  }
  return 1
}


// Array con ocho valores que sea 1 ó 0, números de días
// neighborhood([1,0,0,0,0,1,0,0], 1)
neighborhood([1,1,1,0,1,1,1,1], 2)
