//Capitalizar iniciais
const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
]; 


function capitalizeFolgas(folgas) {
  let newArray = []

  newArray = folgas.map((item) => item.replace(item[0], item[0].toUpperCase()))
  return newArray
}

console.log(capitalizeFolgas(folgas))