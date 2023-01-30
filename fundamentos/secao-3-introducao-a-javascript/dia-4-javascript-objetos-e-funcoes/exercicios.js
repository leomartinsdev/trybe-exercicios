//🚀 Exercícios - objetos e for/in

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
//Bem-vinda, Margarida

console.log(`Bem-vinda, ${info.personagem}`);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console.
//Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
//personagem: 'Margarida',
//origem: 'Pato Donald',
//nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//recorrente: 'Sim'

info.recorrente = 'Sim';
console.log(info);

//Faça um for/in que mostre todas as chaves do objeto.

for (let key in info) {
    console.log(key)
}

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for (let key2 in info) {
    console.log(info[key2]);
}

//Outro muito grande pra colar aqui
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comis",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

let recorrencia = '';
if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
    recorrencia = 'Ambos recorrentes';
} else {
    recorrencia = 'Nem todos são recorrentes'
}


console.log(`${info.personagem} e ${info2.personagem}
${info.origem} e ${info2.origem}
${info.nota} e ${info2.nota}
${recorrencia}`)


//🚀 Leitura de Objetos

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
let tituloFav = leitor.livrosFavoritos[0];
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${tituloFav['titulo']}'.`);

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'});
console.log(leitor)

//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);