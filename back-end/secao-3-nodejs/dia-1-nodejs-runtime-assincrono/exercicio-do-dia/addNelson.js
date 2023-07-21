const fs = require('fs').promises;

async function addNelsonMuntz() {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const data = JSON.parse(simpsonsFamily);
  data.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(data));
}

addNelsonMuntz();