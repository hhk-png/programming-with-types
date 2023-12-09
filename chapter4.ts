function trajectoryCorrection(momentum: Ns) {
  if (momentum.value < new Ns(2).value) {
    disintegrate();
  }
}

function disintegrate() {

}

function provideMomentum() {
  trajectoryCorrection(lbfsToNs(new Lbfs(1.5)))
}

declare const NsType: unique symbol;

class Ns {
  readonly value: number;
  constructor(value: number) {
    this.value = value;
  }
}

declare const LbfsType: unique symbol;

class Lbfs {
  readonly value: number;
  constructor(value: number) {
    this.value = value;
  }
}

function lbfsToNs(lbfs: Lbfs): Ns {
  return new Ns(lbfs.value * 4.448222);
}

declare const celsiusType: unique symbol;

class Celsius {
  readonly value: number;
  constructor(value: number) {
    this.value = value;
  }

  static makeCelsius(value: number): Celsius | undefined {
    if (value < -273.15) {
      return undefined;
    }
    return new Celsius(value);
  }
}


class Shape {

}

declare const triangleType: unique symbol;

class Triangle extends Shape {

}

// // 向上转换
// function useShape(shape: Shape) {

// }

let myTriangle: Triangle = new Triangle();

// useShape(myTriangle);

// 向下转换
function useShape(shape: Shape, isTriangle: boolean) {
  if (isTriangle) {
    let triangle: Triangle = <Triangle>shape;
  }
}

useShape(myTriangle, true);

class Cat {
  meow() {
    console.log('meow')
  }
}

// let serializedCat: string = JSON.stringify(new Cat());

// let deserializedCat: Cat = <Cat>Object.assign(new Cat(), JSON.parse(serializedCat));
// deserializedCat.meow();

class Dog {
  bark() {
    console.log('bark')
  }
}

function serializedCat(cat: Cat): string {
  return "c" + JSON.stringify(cat);
}

function serializeDog(dog: Dog): string {
  return "d" + JSON.stringify(dog);
}

function tryDeserializeCat(from: string): Cat | undefined {
  if (from[0] !== "c") {
    return undefined;
  }
  return <Cat>Object.assign(new Cat(), JSON.parse(from.substring(1)));
}

let catString: string = serializedCat(new Cat());
let dogString: string = serializeDog(new Dog());

let maybeCat: Cat | undefined = tryDeserializeCat(catString);
if (maybeCat) {
  let cat: Cat = <Cat>(maybeCat);
  cat.meow();
}
maybeCat = tryDeserializeCat(dogString);

