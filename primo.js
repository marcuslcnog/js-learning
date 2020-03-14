var numero = parseInt(prompt('Digite um número: '));
var divisores = [];

for (var i = 1 ; i <= (numero) ; i ++){
	if (numero%i === 0){
		divisores.push(i)
	}
}

if (divisores.length == 2){
	console.log(true);
}else{
	console.log(false);
}
