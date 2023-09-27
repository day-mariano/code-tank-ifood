//filtrar por valor true
const clientes = [
  { nome: 'David', comSaldoDevedor: true},
  { nome: 'Vinoth', comSaldoDevedor: true},
  { nome: 'Divya', comSaldoDevedor: false},
  { nome: 'Ishitha', comSaldoDevedor: false},
  { nome: 'Thomas', comSaldoDevedor: true}
];


function clientesComSaldoDevedor(parametro) {
  const devedores = []

  parametro.forEach((item) => {
    if (item.comSaldoDevedor == true) {
      devedores.push(item)
    }
  });
  return devedores
}

console.log(clientesComSaldoDevedor(clientes))