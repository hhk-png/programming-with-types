// class Car {

// }

// interface IWashingStrategy {
//   wash(car: Car): void;
// }

// class StandardWash implements IWashingStrategy {
//   wash(car: Car): void {
      
//   }
// }

// class PremiumWash implements IWashingStrategy {
//   wash(car: Car): void {
      
//   }
// }

// class CarWash {
//   service(car: Car, premium: boolean) {
//     let washingStrategy: IWashingStrategy;

//     if (premium) {
//       washingStrategy = new PremiumWash();
//     } else {
//       washingStrategy = new StandardWash();
//     }

//     washingStrategy.wash(car);
//   }
// }

// class Car {

// }

type WashingStrategy = (car: Car) => void;

function standardWash(car: Car): void {

}

function permiumWash(car: Car): void {

}

class CarWash {
  service(car: Car, premium: boolean) {
    let washingStrategy: WashingStrategy;

    if (premium) {
      washingStrategy = permiumWash;
    } else {
      washingStrategy = standardWash;
    }

    washingStrategy(car);
  }
}

function sayGoodMorning(): void {
  console.log('Good morning!');
}

function sayGoodNight(): void {
  console.log("Good night!");
}

class Greeter {
  greet: () => void = sayGoodMorning;
}

let greeter: Greeter = new Greeter();
greeter.greet();
greeter.greet = sayGoodNight;
greeter.greet();

enum TextProcessingMode {
  Text,
  Marker,
  Code
}

class TextProcessor {
  private mode: TextProcessingMode = TextProcessingMode.Text;
  private result: string[] = [];
  private codeSample: string[] = [];

  processText(lines: string[]): string[] {
    this.result = [];
    this.mode = TextProcessingMode.Text;

    for (let line of lines) {
      this.processLine(line);
    }

    return this.result;
  }

  private processLine(line: string): void {
    switch(this.mode) {
      case TextProcessingMode.Text:
        this.processTextLine(line);
        break;
      case TextProcessingMode.Marker:
        this.processMarkerLine(line);
        break;
      case TextProcessingMode.Code:
        this.processCodeLine(line);
        break;
    }
  }

  private processTextLine(line: string): void {
    this.result.push(line);
    if (line.startsWith("<!--")) {
      this.loadCodeSample(line);
      this.mode = TextProcessingMode.Marker;
    }
  }

  private processMarkerLine(line: string): void {
    this.result.push(line);

    if (line.startsWith("```ts")) {
      this.result = this.result.concat(this.codeSample);
      this.mode = TextProcessingMode.Code;
    }
  }

  private processCodeLine(line: string): void {
    if (line.startsWith("```")) {
      this.result.push(line);
      this.mode = TextProcessingMode.Text;
    }
  }

  private loadCodeSample(line: string) {

  }

}


class TextLineProcessor {
  result: string[];

  constructor(result: string[]) {
    this.result = result;
  }

  process(line: string): TextLineProcessor | MarkerLineProcessor {
    this.result.push(line);

    if (line.startsWith("<!--")) {
      return new MarkerLineProcessor(this.result, this.loadCodeSample(line));
    } else {
      return this;
    }
  }

  private loadCodeSample(line: string): string[] {

  }
}

class MarkerLineProcessor {
  result: string[];
  codeSample: string[];

  constructor(result: string[], codeSample: string[]) {
    this.result = result;
    this.codeSample = codeSample;
  }

  process(line: string): MarkerLineProcessor | CodeLineProcessor {
    this.result.push(line);

    if (line.startsWith("```ts")) {
      this.result = this.result.concat(this.codeSample);
      return new CodeLineProcessor(this.result);
    } else {
      return this;
    }
  }

}

class CodeLineProcessor {
  result: string[];

  constructor(result: string[]) {
    this.result = result;
  }

  process(line: string): CodeLineProcessor | TextLineProcessor {
    if (line.startsWith("```")) {
      this.result.push(line);
      return new TextLineProcessor(this.result);
    } else {
      return this;
    }
  }
}

function processText(lines: string): string[] {
  let processor: TextLineProcessor | MarkerLineProcessor | CodeLineProcessor = new TextLineProcessor([]);

  for (let line of lines) {
    processor = processor.process(line);
  }

  return processor.result;
}

class Bike {}
class Car {}

function isItRaining() {
  return false;
}

function chooseMyRide(bike: Bike, car: () => Car): Bike | Car {
  if (isItRaining()) {
    return car();
  } else {
    return bike;
  }
}

function makeCar(): Car {
  return new Car();
}

// chooseMyRide(new Bike(), makeCar);

// let numbers: number[] = [1, 2, 3, 4, 5];
// let squares: number[] = [];

function map<T, U>(items: T[], func: (item: T) => U): U[] {
  let result: U[] = [];

  for (const item of items) {
    result.push(func(item));
  }

  return result;
}

function filter<T>(items: T[], pred: (item: T) => boolean): T[] {
  let result: T[] = [];

  for (const item of items) {
    if (pred(item)) {
      result.push(item);
    }
  }

  return result;
}

function reduce<T>(items: T[], init: T, op: (x: T, y: T) => T): T {
  let result: T = init;

  for (const item of items) {
    result = op(result, item);
  }

  return result;
}


