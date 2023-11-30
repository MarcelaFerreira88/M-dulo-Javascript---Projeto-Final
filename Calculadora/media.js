/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
function calcularMedia() {
  const nota1 = paserFloat(document.getElementById('nota1').value)
  const nota2 = paserFloat(document.getElementById('nota2').value)
  const nota3 = paserFloat(document.getElementById('nota3').value)
  const nota4 = paserFloat(document.getElementById('nota4').value)

let media =(nota1+nota2+nota3+nota4)/4

let mensagem = ""

if (media === 0 ){
  mensagem ="Infelizmente você zerou a prova :( "
} 

const situacaoAluna = document.createElement('p')
const divMedias = document.getElementById("contentCalMedias")
divMedias.appendChild(situacaoAluna)
situacaoAluna.innerText = mensagem



}
