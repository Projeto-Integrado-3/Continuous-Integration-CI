// Função que vamos testar
function soma(a, b) {
  return a + b;
}

// Função para verificar números pares
function ehPar(numero) {
  return numero % 2 === 0;
}

// Exportando as funções
module.exports = { soma, ehPar };