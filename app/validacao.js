function verificaSeOChuteOissuiUmValorValido(chute) {
  const numero = +chute

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>'
  }

  if (numeroForMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa está 
    entre ${menorValor} e ${maiorValor}</div>`
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era {numeroSecreto}</h3>
    `
  }
}
function numeroForMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}
