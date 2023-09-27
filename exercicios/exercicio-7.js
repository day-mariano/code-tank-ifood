//chatBot
const pergunta = window.prompt('Qual a sua pergunta?')

function respostasAoUsuario(parametro) {
  if (pergunta == 'Qual é o horário de funcionamento?'){
    return 'Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h.'
  } else if (pergunta == 'Como faço para entrar em contato?' ) {
    return 'Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail contato@empresa.com.'
  } else if (pergunta == 'Onde fica a loja física?') {
    return 'Nossa loja física está localizada na Rua Principal, número 123, na cidade X.'
  } else {
    return 'Desculpe, não entendi sua pergunta. Pode tentar novamente?'
  }
}

console.log(respostasAoUsuario(pergunta))

// function respostasAoUsuario() {
//   //const question = prompt();
//   const question = "Como faço para entrar em contato?"
//   const treatedQuestion = question.toLowerCase();
  
//   switch(treatedQuestion) {
//     case 'qual é o horário de funcionamento?':
//       console.log("Nosso horário de funcionamento é de segunda a sexta, das 9h às 18h.");
//       break;
//     case 'como faço para entrar em contato?':
//       console.log("Você pode entrar em contato conosco pelo telefone (XX) XXXX-XXXX ou pelo e-mail contato@empresa.com.");
//       break;
//     case 'onde fica a loja física?':
//       console.log("Nossa loja física está localizada na Rua Principal, número 123, na cidade X.");
//       break;
//     default:
//       console.log("Desculpe, não entendi sua pergunta. Pode tentar novamente?");
//   }
// }

// respostasAoUsuario();