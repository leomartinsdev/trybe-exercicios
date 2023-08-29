const readline = require('readline-sync');

const initialArray = [0, 1];

function Fibonacci(numero) {
  for (let i = 2; i <= numero; i += 1) {
    const nextNumber = initialArray[i - 1] + initialArray[i - 2];
    initialArray.push(nextNumber);
  }
  console.log(initialArray.slice(1));
}

function main () {
  const numero = readline.questionInt('Digite um número: ');
  Fibonacci(numero);
}

main();
