//somar valores de objetos
const produtos = [
  { nome: "Smartphone", quantidade: 10 },
  { nome: "Notebook", quantidade: 5 },
  { nome: "TV", quantidade: 15 },
  { nome: "Fones de ouvido", quantidade: 20 },
  { nome: "Tablet", quantidade: 8 },
];

function contagemProdutosEstoque(parametros) {
  var total = 0

  for (const item of parametros) {
    total += item.quantidade
  }

  return total
}

console.log(contagemProdutosEstoque(produtos))