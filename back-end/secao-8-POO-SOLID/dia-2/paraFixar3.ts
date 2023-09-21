interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  public log(param: string): void {
    console.log(`Logger 1: ${param}`)
  }
}

class ConsoleLogger2 implements Logger {
  public log(param: string): void {
    console.log(`Logger 2: ${param}`)
  }
}

interface Database {
  logger: Logger;

  save(key: string, value: string): void
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Passando o ${value} para a chave ${key}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('amor', 'Laura');
database2.save('vingança', 'nao vale a pena');
database3.save('1', '2')