var numero = parseInt(prompt('Digite um número: '));
var multiplos = [];

for (var i = numero ; i > 0 ; i --){
    if (i%7 === 0){
        multiplos.push(i)
    }
}

console.log(multiplos);