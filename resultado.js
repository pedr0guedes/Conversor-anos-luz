let enter = document.getElementById("enter"); // Recebe o valor digitado no input
let envio = document.getElementById("envio"); // Verifica quando o usuário clica no botão de enviar
let resultado = document.getElementById("resultado"); // Gera o resultado no HTML

enter.addEventListener("click", () => { // Cria um evento para quando o usuário clicar no botão gerar o resultado
  let numero = parseFloat(envio.value); // Transforma o valor digitado em número do tipo Float, números com virgula
  resultado.value = numero*9500000000000 + " km"; // Gera o resultado
})