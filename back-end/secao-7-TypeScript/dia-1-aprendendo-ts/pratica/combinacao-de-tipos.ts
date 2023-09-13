// Union Types -> Estrutura formada por dois ou mais tipos que podem ser atribuídos a uma variável
function printId(id: number | string) {
  console.log(`Seu id é ${id}`);
  // console.log(id.toUpperCase()); -> Não funciona pois upperCase é um método exclusivo de strings
  // Em vez disso, faça:
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId(5);
printId("Joel");
// printId(true) -> Não funciona

// Types Aliases -> Forma de criar um tipo personalizado. Útil quando você tem varios elementos com o mesmo tipo

type ID = number | string;

type PersonalInfo = {
  name: string;
  birthYear: number | string;
};

function printPersonalInfo2(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo2({ name: 'Rogerinho', birthYear: 1978});