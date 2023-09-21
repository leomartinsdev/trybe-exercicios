interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return `${sum}`
  }
}

const obj = new MyClass(5); // Aqui passo o parametro da classe
console.log(obj.myNumber);
console.log(obj.myFunc(2)); // Aqui eu chamo a função da classe passando 2 como parametro da função