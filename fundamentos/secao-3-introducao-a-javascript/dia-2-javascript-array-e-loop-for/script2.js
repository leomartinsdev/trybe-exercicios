//🚀 Lidando com Arrays
//Iremos utilizar esse array para realizar os próximos exercícios.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + (numbers[index]);
}

console.log(soma);

//Calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length ;
console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. 
//Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
    console.log("valor maior que 20")
} else {
    console.log('valor menor ou igual a 20')
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = Math.max(...numbers);

console.log(maiorValor);

//ou
let maiorValor2 = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor2) {
        maiorValor2 = numbers[index]
    }
}

console.log(maiorValor2)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) {
        impares = impares + 1;
    }
}

console.log(impares);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array25 = [];
for (let index2 = 1; index2 <= 25; index2 += 1) {
    array25.push(index2);
}

console.log(array25)

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (index3 = 0; index3 < array25.length; index3 += 1) {
    console.log(array25[index3] / 2);
}
