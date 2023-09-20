class Student {
  private _matricula: string;
  private _name: string;
  private _notasProvas: number[];
  private _notasTrabs: number[];

  constructor(matricula: string, name: string) {
    this._matricula = matricula;
    this._name = name;
    this._notasProvas = [];
    this._notasTrabs = [];
  }
 
  get matricula(): string {
    return this._matricula;
  }

  set matricula(matricula: string) {
    this._matricula = matricula;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(notas: number[]) {
    this._notasProvas = notas;
  }

  get notasTrabs(): number[] {
    return this._notasTrabs;
  }

  set notasTrabs(notas: number[]) {
    this._notasTrabs = notas;
  }

  gradeSum(): number {
    const totalArr = [...this.notasProvas, ...this.notasTrabs];
    const finalSum = totalArr.reduce((prev, curr) => {
      const next = prev + curr;
      return next;
    }, 0);
    return finalSum;
  }

  gradeAverage(): number {
    const totalArr = [...this.notasProvas, ...this.notasTrabs];
    const divider = totalArr.length;
    const finalSum = this.gradeSum();
    const average = finalSum / divider;
    return average;
  };
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.notasProvas = [25, 20, 23, 23];
personOne.notasTrabs = [45, 45];

console.log(personOne);
console.log('Soma de todas as notas: ', personOne.gradeSum());
console.log('Média de todas as notas: ', personOne.gradeAverage());