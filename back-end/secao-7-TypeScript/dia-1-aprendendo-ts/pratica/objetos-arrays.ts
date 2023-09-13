function printPersonalInfo(data: { name:string; birthYear: number}) {
  console.log(`${data.name} nasceu em ${data.birthYear}`);
}

printPersonalInfo({name: 'Leonardo', birthYear: 1997 });

const evenNumbers: number[] = [2, 4, 6];
evenNumbers.push(8) // -> Funciona
// evenNumbers.push('10') //-> Não funciona

const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false, true];
