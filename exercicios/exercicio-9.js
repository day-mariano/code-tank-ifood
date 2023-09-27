const vendedores = [ 
  {
    "nome": "João",
    "vendas": [5000, 6000, 7000]
  },
  {
    "nome": "Maria",
    "vendas": [8000, 9000, 10000]
  }
];
//calcular média
function calcularMedia(vendas) {
  let total = 0
  for (const value of vendas) {
    total += value
  }
  return (total/vendas.length)
}
//retornar novo array
function updateVendedores(vendedores) {
  const newVendedores = []

  for (index in vendedores) {
    const media = calcularMedia(vendedores[index].vendas)

    newVendedores.push({
      "nome": vendedores[index].nome,
      "media": media
    })
    }
    return newVendedores
}

console.log(updateVendedores(vendedores))
