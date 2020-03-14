var numero = parseInt(prompt('Digite um número: '));
var fatorial = 1;
var temp = numero;

for (var i = 1 ; i < (numero) ; i ++){
    fatorial *= temp;
    temp -= 1;
}

console.log(fatorial);
