export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) {
      throw new Error(`O parametro name deve ter pelo menos 3 caracteres`)
    }
    this._name = name;
  }
}