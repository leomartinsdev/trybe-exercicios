class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  }

  get ConnectedTo(): string | undefined {
    return this._connectedTo;
  }

  set ConnectedTo(newValue: string | undefined) {
    if(!newValue || this._connections.includes(newValue)) {
      this._connectedTo = newValue;
    } else {
      console.log('Sorry, connection unavailable!')
    };
  };

  turnOn(): void {
    console.log(`
    Brand: ${this._brand}
    Size: ${this._size}
    resolution: ${this._resolution}
    connections: ${this._connections}`)
  }
}

const tv1 = new Tv('Samsung', 1920, 'Full HD', ['HDMI', 'Ethernet']);
tv1.turnOn();

tv1.ConnectedTo = 'Ethernet'
console.log('Connected to: ', tv1.ConnectedTo);