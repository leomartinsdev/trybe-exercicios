// ---------- Para fixar Objetos ----------

//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    } 
}

//Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene
//as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);

//Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as 
//datas em que a jogadora Marta foi considerada a melhor do mundo.
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes.`);

// Outra maneira de fazer esse:
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`);

//Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);


// ---------- Para fixar for/in e for/of ----------

//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let key in names) {
    console.log(`Olá ${names[key]}`);
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key2 in car) {
    console.log(key2, car[key2]);
}


// ---------- Para fixar funções ----------

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
//Adição (a + b)
function add (a, b) {
    return a + b;
}

console.log(add(2, 3));

//Subtração (a - b)
function sub (a ,b) {
    return a - b;
}

console.log(sub(2, 3));

//Multiplicação (a * b)
function mult (a, b){
    return a * b;
}

console.log(mult(2, 3));

//Divisão (a / b)
function div (a, b) {
    return a / b;
}

console.log(div(10, 5));

//Módulo (a % b)
function mod (a, b) {
    return a % b;
}

console.log(mod(2, 2));

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);

console.log(`Número 1: ${number1}`);
console.log(`Número 2: ${number2}`);

function maiorNumero (number1, number2) {
    if (number1 > number2) {
        console.log(`O maior número é ${number1}`);
    }  else {
        console.log(`O maior número é ${number2}`);
    }
}

maiorNumero(number1, number2);


//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const number3 = Math.floor(Math.random() * 100);

console.log(`Número 1: ${number1}`);
console.log(`Número 2: ${number2}`);
console.log(`Número 3: ${number3}`);

function maiorNumero (number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(`O maior número é ${number1}`);
    } else if (number2 > 1 && number2 > number3) {
        console.log(`O maior número é ${number2}`);
    } else if (number3 > 1 && number3 > number2) {
        console.log(`O maior número é o ${number3}`);
    }
}

maiorNumero(number1, number2, number3);   //sim, eu sei que ignorei o caso dos números serem iguais.

//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
function posNeg (valor) {
    if (valor > 0) {
        console.log(`positive`);
    } else if (valor < 0) {
        console.log(`negative`);
    } else {
        console.log(`zero`);
    }
}

posNeg(-1);

//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.
function triangulo (ang1, ang2, ang3) {
    if (ang1 === 0 || ang2 === 0 || ang3 === 0) {
        console.log(`Ângulo inválido`);
    } else if (ang1 + ang2 + ang3 === 180) {
        console.log(`true`);
    } else if (ang1 + ang2 + ang3 !== 180) {
        console.log(`false`);
    }
}

triangulo(60, 60, 60);