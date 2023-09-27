const organizar = (todos) => {
  return todos.sort((x,y) => x.prioridade - y.prioridade)
}

function ToDoLists() {
  const tarefas = [
    { nome: "Estudar para a prova", prioridade: 3 },
    { nome: "Fazer compras", prioridade: 5 },
    { nome: "Preparar apresentação", prioridade: 2 },
    { nome: "Limpar a casa", prioridade: 4 },
    { nome: "Resolver pendências no trabalho", prioridade: 1 },
  ];
  const ordenedTasks = organizar(tarefas);
  return ordenedTasks
}

console.log(ToDoLists())