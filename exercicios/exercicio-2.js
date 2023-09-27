
function obterPrimeiraTarefa() {
  const tarefas = ["Estudar", "Fazer compras", "Limpar a casa", "Fazer exercícios"];
  const primeiraTarefa = tarefas.shift();

  return primeiraTarefa
}

console.log(obterPrimeiraTarefa())