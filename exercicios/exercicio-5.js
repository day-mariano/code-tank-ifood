//Capitaizar - replace
const folgas = [
  "quinta-Feira",
  "Sexta-feira",
  "sábado",
  "Domingo",
  "segunda",
  "quarta",
  "Quarta-feira",
];

function capitalizeFolgas(parametros) {
  const diasFormatados = parametros.map((item) => item.replace(item[0], item[0].toUpperCase()))
  return diasFormatados
  }

  console.log(capitalizeFolgas(folgas))