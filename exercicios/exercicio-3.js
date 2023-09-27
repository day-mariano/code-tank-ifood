//Ordenar
const tarefas = [
  { nome: "Estudar para a prova", prioridade: 3 },
  { nome: "Fazer compras", prioridade: 5 },
  { nome: "Preparar apresentação", prioridade: 2 },
  { nome: "Limpar a casa", prioridade: 4 },
  { nome: "Resolver pendências no trabalho", prioridade: 1 },
];

function ordenar(parametros) {

  const ordenedTasks = parametros.sort((x,y) => x.prioridade - y.prioridade);
  return ordenedTasks
}

console.log(ordenar(tarefas))