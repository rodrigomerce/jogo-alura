const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
  return parseInt(Math.random() * 100)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor