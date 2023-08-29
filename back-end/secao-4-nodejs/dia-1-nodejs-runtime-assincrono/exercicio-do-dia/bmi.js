const readline = require('readline-sync');

const weightInKg = readline.questionFloat('Qual seu peso? (kg) ');
const heightInM = readline.questionFloat('Qual sua altura? (m) ');

function bmiCalc(weight, height) {
  const bmi = weight / height ** 2;
  return bmi;
}

function main() {
  const bmi = bmiCalc(weightInKg, heightInM).toFixed(2);
  console.log(bmi);

  if (bmi < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log('Peso normal');
  } else if (bmi >= 25 && bmi < 30) {
    console.log('Acima do peso (sobrepeso)');
  } else if (bmi >= 30 && bmi < 35) {
    console.log('Obesidade grau I');
  } else if (bmi >= 35 && bmi < 40) {
    console.log('Obesidade grau II');
  } else if (bmi >= 40) {
    console.log('Obesidade graus III e IV');
  } else {
    console.log('Erro');
  }
}

main();