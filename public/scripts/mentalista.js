var secretNum = parseInt(Math.random() * 10 + 1); //pega um num aleatorio entre 1 e 10
var tentativas = 3;

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 1 a 10:"));

  if (secretNum == chute) {
    alert("Acertou!");
    break;
  } else if (chute > secretNum) {
    alert("Dica: o número secreto é menor");
    tentativas--;
  } else if (chute < secretNum) {
    alert("Dica: o número secreto é maior");
    tentativas--;
  }
}

if (secretNum != chute) {
  alert(
    "Infelizmente, suas tentativas acabaram. O número secreto era " + secretNum
  );
}
