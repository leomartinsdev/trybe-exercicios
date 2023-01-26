// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
let n = 5;
let asterisco = '*';
for (index = 0; index < n; index += 1) {
    console.log(asterisco.repeat(n));
}

//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
//n = 5
//*
//**
//***
//****
//*****

let n = 5;
let asterisco = '*';
for (index = 1; index <= n; index += 1) {
    console.log(asterisco.repeat(index));
}

//Agora inverta o lado do triângulo.
let n = 5;
let asterisco = '*';
let espaco = ' ';
for (index = 1; index <= n; index += 1) {
    console.log(espaco.repeat(n - index) + asterisco.repeat(index));
}

//Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
//Depois, faça uma pirâmide com n asteriscos de base.
//n = 5
//*
//***
//*****

let n = 10;
let asterisco = '*';
let espaco = ' ';
for (index = 1; index <= n; index += 2) {
    console.log(espaco.repeat((n - index) / 2) + asterisco.repeat(index) + espaco.repeat((n - index) / 2));
}

// ---- O de baixo não consegui ainda
//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
//n = 7
//   *
//  * *
// *   *
//*******

let n = 7;
let asterisco = '*';
let espaco = ' ';
for (index = 1; index <= n; index += 2) {
    if (index === 1) {
        console.log(espaco.repeat((n - index) / 2) + asterisco.repeat(1) + espaco.repeat((n - index) / 2));
    } else if (index > 1 && index < n) {
        console.log(espaco.repeat((n - index) / 2) + asterisco.repeat(1) + espaco.repeat((index - 1) / 2) + asterisco.repeat(1));
    } else {
        console.log(espaco.repeat((n - index) / 2) + asterisco.repeat(index) + espaco.repeat((n - index) / 2));
    }
}
