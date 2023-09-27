//Remover duplicados
const feedbacks = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];

function removerFeedbacksDuplicados(feedbacks) {
  let newArray = []

    for (const item of feedbacks) {
      if(!newArray.includes(item)) {
        newArray.push(item)
      }
    }
  return newArray
}

console.log(removerFeedbacksDuplicados(feedbacks))