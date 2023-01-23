const a = 5;
const b = 7;
const c = 13.5;
let soma = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
if (a > b) {
    console.log('O maior número é ' + a)
} else {
    console.log('O maior número é ' + b)
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
if (a > b && a > c) {
    console.log('O maior número é ' + a)
} else if (b > a && b > c) {
    console.log('O maior número é ' + b)
} else {
    console.log('O maior número é ' + c)
}

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
if (a > 0) {
    console.log("Positive")
} else if (a < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

//🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const x = 60;
const y = 70;
const z = 60;

if (x <= 0 || y <= 0 || z <= 0) {
    console.log('Erro: ângulo inválido')
} else if (c + y + z === 180) {
    console.log(true)
} else {
    console.log(false)
}

//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecaDada = "rei";
let peca = pecaDada.toUpperCase()

switch (peca) {
    case "BISPO":
        console.log("diagonal");
        break;
    case "PEÃO":
        console.log("frente e trás uma casa");
        break;
    case "TORRE":
        console.log("frente e trás o quanto quiser");
        break;
    case "CAVALO":
        console.log("Em L");
        break;
    case "RAINHA":
        console.log("Para onde quiser, o quanto quiser");
        break;
    case "REI":
        console.log("Qualquer direção uma casa");
        break;
    default:
        console.log("Essa não é uma peça válida")
}

