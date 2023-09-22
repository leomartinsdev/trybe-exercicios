/* EU IA FAZER OS EXERCÍCIOS DO INTEFACE E GENERICS MAS ELES ESTAO MUUUUITO MAL EXPLICADOS, DECIDI PULAR
MAS LÁ TEM COMO FAZER CRUD */ 

// interface Character {
//   name: string;
//   specialMove: string;
// }

// interface DbCharacter extends Character {
//   id: number;
// }

// const db: DbCharacter[] = [];

abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static charPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}


class MeleeCharacter extends Character {
  constructor(private _name: string, private _special: string) {
    super();
  }

  talk(): void {
    console.log(`${this._name} chegou!`)
  }

  specialMove(): void {
    console.log(`${this._name} atacou com ${this._special}!!`)
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _special: string) {
    super();
  }

  talk(): void {
    console.log(`${this._name} está na área!`)
  }

  specialMove(): void {
    console.log(`${this._name} atacou com ${this._special}!!`)
  }
}

const Yoshi = new MeleeCharacter('Yoshi', 'Super throw');
const Samus = new LongRangeCharacter('Samus', 'Flecha Perfurante');

// Yoshi.talk();
// Yoshi.specialMove();
// Samus.talk();
// Samus.specialMove();

Character.charPresentation(Yoshi);
Character.charPresentation(Samus);