let idade = 1;
let soma = 0;
let quantidade = -1;

while (idade !== 0){
    idade = parseInt(prompt('Digite um número: '));
    quantidade ++;
    soma += idade;
}

console.log(soma/quantidade);

//outra solução, menos elegante:

let soma = 0;
let quantidade = -1;

for (var idade = 1; idade !== 0; quantidade++){
    idade = parseInt(prompt('Digite um número: '));
    soma += idade;
}

console.log(soma/quantidade);
