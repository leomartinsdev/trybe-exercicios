export default class OrderItem {
  private _name: string;
  private _price: number;

  constructor(n: string, p: number) {
    this._name = n;
    this._price = p;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
};