// Para fixar Arrays
//Obtenha o valor “Serviços” do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1] ;

console.log(menuServices);

//Procure o índice do valor “Portfólio” do array menu:
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio)

//Adicione o valor “Contato” no final do array menu:
menu.push('Contato');
console.log(menu)

// Para fixar For
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index])
}

// Para fixar For/Of
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let imprime of names) {
    console.log(imprime)
}