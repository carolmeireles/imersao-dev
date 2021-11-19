var valorDolar = prompt("Digite um valor em dólar:");

parseFloat(valorDolar);
//valor convertido em decimal

var valorReal = valorDolar * 5.5;
valorReal = valorReal.toFixed(2);

alert(valorReal);
