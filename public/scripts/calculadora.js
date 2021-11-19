var operacao = prompt(
	"Digite a operação que deseja realizar: 1 para soma, 2 para subtração, 3 para multiplicação ou 4 para divisão:"
);

if (operacao > 4 || operacao < 1) {
	document.write("<h2>Opção inválida</h2>");
} else {
	
	var primeiroNum = parseInt(prompt("Digite o primeiro número inteiro:"));
	var segundoNum = parseInt(prompt("Digite o segundo número inteiro:"));

	if (operacao == 1) {
		var resultado = primeiroNum + segundoNum;
		document.write(
			"<h2>" + primeiroNum + " + " + segundoNum + " = " + resultado + "</h2>"
		);
	}

	if (operacao == 2) {
		var resultado = primeiroNum - segundoNum;
		document.write(
			"<h2>" + primeiroNum + " - " + segundoNum + " = " + resultado + "</h2>"
		);
	}

	if (operacao == 3) {
		var resultado = primeiroNum * segundoNum;
		document.write(
			"<h2>" + primeiroNum + " * " + segundoNum + " = " + resultado + "</h2>"
		);
	}

	if (operacao == 4) {
		var resultado = primeiroNum / segundoNum;
		document.write(
			"<h2>" + primeiroNum + " / " + segundoNum + " = " + resultado + "</h2>"
		);
	}
	
}