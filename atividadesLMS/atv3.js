//filtro pelo valor
const alunos = [
  { nome: "Filipe Diogo", nota: "80" },
  { nome: "Enzo Miguel", nota: "77" },
  { nome: "Mateus Danilo", nota: "88" },
  { nome: "Olivia Stella", nota: "95" },
  { nome: "César Paulo", nota: "68" },
];

const aprovados = []

function quantidadeAprovados(alunos) {
  for (const aluno of alunos) {
    if (aluno.nota > 70) {
      aprovados.push(aluno)
    }
  }
  return aprovados.length
}

console.log(quantidadeAprovados(alunos))