//Remover repetidos
const numeros = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1, 10];

function removerNumerosRepetidos(parametro) {
  let newArray = [];

  for(value of parametro){
    if (!newArray.includes(value)){
      newArray.push(value)
    }
  }
  return newArray;
}

  console.log(removerNumerosRepetidos(numeros))