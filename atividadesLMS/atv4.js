//Retorna a primeira
const imobiliarias = ["Arantes", "Terra Nova", "Ivan", "Seratto", "Azaleia"];

function retornarPrimeiraImobiliaria(imobiliarias) {
  const primeiroDia = imobiliarias.shift()

 return primeiroDia
}

console.log(retornarPrimeiraImobiliaria(imobiliarias))