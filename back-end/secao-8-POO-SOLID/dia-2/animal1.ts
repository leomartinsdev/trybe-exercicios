// class Animal {
//   constructor(public name:string, protected birthDate: Date) {}

//   get age() {
//     const timeDiff = Math.abs(
//       Date.now() - new Date(this.birthDate).getTime()
//     );
//     return Math.floor(timeDiff / (1000* 3600 * 24) / 365.25)
//   }
// }


// class Mammal extends Animal {
//   walk() {
//     console.log(`${this.name} está andando!`)
//   }
  
// }

// class Bird extends Animal {
//   fly() {
//     console.log(`${this.name} está voando!`)
//   }
//   showBirthDate() {
//     console.log(this.birthDate);
//   }
// }

interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Bird implements Animal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot.age);
parrot.fly();

