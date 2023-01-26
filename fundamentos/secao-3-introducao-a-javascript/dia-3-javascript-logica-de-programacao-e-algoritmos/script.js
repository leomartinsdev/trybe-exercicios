//Crie um algoritmo que imprima na tela o fatorial de 10.
let fat = 1;
for (let index = 10; index > 0; index -= 1) {
    fat = fat * index;
}

console.log(fat);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”.
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let invertWord = '';

for (let index2 = 0; index2 < word.length; index2 += 1) {
    invertWord += word[word.length - 1 - index2];
}

console.log(invertWord);

//Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor.
//Considere o número de caracteres de cada palavra.
let maiorPalavra = array[0];
let menorPalavra = array[0];
for (index3 = 0; index3 < array.length; index3 += 1) {
    if (array[index3].length > maiorPalavra.length) {
        maiorPalavra = array[index3]
    }
}
console.log(menorPalavra)

for (index3 = 0; index3 < array.length; index3 += 1) {
    if (array[index3].length < menorPalavra.length) {
        menorPalavra = array[index3]
    }
}
console.log(menorPalavra)

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
//Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let primo = [];
let maiorPrimo = 0;

// 1 - verificar se é primo
// ------> NAO ENTENDI NEM COM O GABARITO.

