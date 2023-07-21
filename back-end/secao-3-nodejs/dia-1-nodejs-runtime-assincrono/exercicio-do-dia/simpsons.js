const fs = require('fs').promises;

// async function simpsons() {
//   const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
//   const data = JSON.parse(simpsons);
//   data.forEach((element) => {
//     console.log(`${element.id} - ${element.name}`);
//   })
// }

// simpsons();

async function searchId(id) {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(simpsons);
    const result = data.find((element) => element.id === id);
    return console.log(result);
  } catch (error) {
    console.error('id não encontrado');
  }
}

searchId('1');
searchId('15');

async function removeSimpson(removeId1, removeId2) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(simpsons);
  const result = data.filter((element) => element.id !== removeId1 && element.id !== removeId2);
  await fs.writeFile('./simpsons.json', JSON.stringify(result));
}

removeSimpson('10', '6');

// A FUNÇÃO ABAIXO ESTÁ COM PROBLEMA. POR ALGUM MOTIVO, O ID TAMBÉM ENTRA NELA. NÃO CONSEGUI RESOLVER.

async function createFile(initialId, finalId) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const data = JSON.parse(simpsons);
  const newArr = data.filter((element) => element.id >= initialId && element.id <= finalId);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArr));
}

createFile('1', '4');
