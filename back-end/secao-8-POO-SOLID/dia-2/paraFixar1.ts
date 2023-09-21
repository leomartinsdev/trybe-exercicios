class Superclass {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log('Olá mundo!')
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();

  console.log(object.isSuper ? 'Super' : 'Sub!');
}

const objSuper = new Superclass;
const objSub = new Subclass;

myFunc(objSuper);
myFunc(objSub);