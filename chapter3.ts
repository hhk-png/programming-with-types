
// function distance(x1: number, y1: number, x2: number, y2: number): number {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// type Point = [number, number];

// function distance(point1: Point, point2: Point): number {
//   return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
// }

// class Pair<T1, T2> {
//   m0: T1;
//   m1: T2;
//   constructor(m0: T1, m1: T2) {
//     this.m0 = m0;
//     this.m1 = m1;
//   }
// }

// type Point = Pair<number, number>;

// function distance(point1: Point, point2: Point): number {
//   return Math.sqrt((point1.m0 - point2.m0) ** 2 + (point1.m1 - point2.m1) ** 2);
// }

// class Point {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// function distance(point1: Point, point2: Point): number {
//   return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
// }

// class Currency {
//   private dollars: number = 0;
//   private cents: number = 0;

//   constructor(dollars: number, cents: number) {
//     if (!Number.isSafeInteger(cents) || cents < 0) {
//       throw new Error();
//     }
//     dollars = dollars + Math.floor(cents / 100);
//     cents = cents % 100;
//     if (!Number.isSafeInteger(dollars) || dollars < 0) {
//       throw new Error();
//     }
//     dollars = dollars;
//     cents = cents;
//   }
// }

// let amount: Currency = new Currency(5, 50);
// amount.cents = 300;

// class Currency {
//   private dollars: number = 0;
//   private cents: number = 0;

//   constructor(dollars: number, cents: number) {
//     this.assignDollars(dollars);
//     this.assignCents(cents);
//   }

//   getDollars(): number {
//     return this.dollars;
//   }

//   getCents(): number {
//     return this.cents;
//   }

//   assignDollars(dollars: number) {
//     if (!Number.isSafeInteger(dollars) || dollars < 0) {
//       throw new Error();
//     }
//     this.dollars = dollars;
//   }

//   assignCents(cents: number) {
//     if (Number.isSafeInteger(cents) || cents < 0) {
//       throw new Error();
//     }
//     this.assignDollars(this.dollars + Math.floor(cents / 100));
//     cents = cents % 100;
//   }
// }

class Currency {
  readonly dollars: number;
  readonly cents: number;
  constructor(dollars: number, cents: number) {
    if (!Number.isSafeInteger(cents) || cents < 0) {
      throw new Error();
    }
    dollars = dollars + Math.floor(cents / 100);
    cents = cents % 100;
    if (!Number.isSafeInteger(dollars) || dollars < 0) {
      throw new Error();
    }
    this.dollars = dollars;
    this.cents = cents;
  }
}

// const Sunday: number = 0;
// const Monday: number = 1;
// const Tuesday: number = 2;
// const Wednesday: number = 3;
// const Thursday: number = 4;
// const Friday: number = 5;
// const Saturday: number = 6;

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function isWeekend(dayOfWeek: number): boolean {
  return dayOfWeek === DayOfWeek.Saturday || dayOfWeek === DayOfWeek.Sunday;
}

function isWeekend2(dayOfWeek: number): boolean {
  return dayOfWeek >= DayOfWeek.Monday && dayOfWeek <= DayOfWeek.Friday;
}

class Optional<T> {
  private value: T | undefined;
  private assigned: boolean;

  constructor(value?: T) {
    if (value) {
      this.value = value;
      this.assigned = true;
    } else {
      this.value = undefined;
      this.assigned = false;
    }
  }
  hasValue(): boolean {
    return this.assigned;
  }
  getValue(): T {
    if (!this.assigned) {
      throw Error();
    }
    return <T>this.value;
  }
}

enum InputError {
  OK,
  NoInput,
  Invalid
}

class Result<T> {
  error: InputError;
  value: T;

  constructor(error: InputError, value: T) {
    this.error = error;
    this.value = value;
  }
}

class Either<TLeft, TRight> {
  private readonly value: TLeft | TRight;
  private readonly left: boolean;

  private constructor(value: TLeft | TRight, left: boolean) {
    this.value = value;
    this.left = left;
  }

  isLeft(): boolean {
    return this.left;
  }

  getLeft(): TLeft {
    if (!this.isLeft()) {
      throw new Error();
    }
    return <TLeft>this.value;
  }

  isRight(): boolean {
    return !this.left;
  }

  getRight(): TRight {
    if (!this.isRight()) {
      throw new Error();
    }
    return <TRight>this.value;
  }

  static makeLeft<TLeft, TRight>(value: TLeft) {
    return new Either<TLeft, TRight>(value, true);
  }

  static makeRight<TLeft, TRight>(value: TRight) {
    return new Either<TLeft, TRight>(value, false);
  }
}

// class Point {
//   readonly kind: string = "Point";
//   x: number = 0;
//   y: number = 0;
// }

// class Circle {
//   readonly kind: string = "Circle";
//   x: number = 0;
//   y: number = 0;
//   radius: number = 0;
// }

// class Rectangle {
//   readonly kind: string = "Rectangle";
//   x: number = 0;
//   y: number = 0;
//   width: number = 0;
//   height: number = 0;
// }

// type Shape = Point | Circle | Rectangle;

// let shapes: Shape[] = [new Circle(), new Rectangle()];

// for (let shape of shapes) {
//   switch(shape.kind) {
//     case 'Point':
//       let point: Point = <Point>shape;
//       console.log(`Point ${JSON.stringify(point)}`);
//       break;
//     case "Circle":
//       let circle: Circle = <Circle>(shape);
//       console.log(`Circle ${JSON.stringify(circle)}`);
//       break;
//     case "Rectangle":
//       let rect: Circle = <Circle>(shape);
//       console.log(`Rectangle ${JSON.stringify(rect)}`);
//       break;
//     default:
//       throw new Error();
//   }
// }

class Variant<T1, T2, T3> {
  readonly vlaue: T1 | T2 | T3;
  readonly index: number;

  private constructor(value: T1 | T2 | T3, index: number) {
    this.vlaue = value;
    this.index = index;
  }

  static make1<T1, T2, T3>(value: T1): Variant<T1, T2, T3> {
    return new Variant<T1, T2, T3>(value, 0);
  }

  static make2<T1, T2, T3>(value: T2): Variant<T1, T2, T3> {
    return new Variant<T1, T2, T3>(value, 1);
  }

  static make3<T1, T2, T3>(value: T3): Variant<T1, T2, T3> {
    return new Variant<T1, T2, T3>(value, 2);
  }
}


class Point {
  x: number = 0;
  y: number = 0;
}

class Circle {
  x: number = 0;
  y: number = 0;
  radius: number = 0;
}

class Rectangle {
  x: number = 0;
  y: number = 0;
  width: number = 0;
  height: number = 0;
}

type Shape = Variant<Point, Circle, Rectangle>;

let shapes: Shape[] = [
  Variant.make2(new Circle()),
  Variant.make3(new Rectangle())
]

// for (let shape of shapes) {
//   switch (shape.index) {
//     case 0:
//       let point: Point = <Point>shape.vlaue;
//       console.log(`Point ${JSON.stringify(point)}`);
//       break;
//   }
// }

// interface IVisitor {
//   visitParagraph(paragraph: Paragraph): void;
//   visitPicture(picture: Picture): void;
//   visitTable(table: Table)
// }

// class Renderer implements IVisitor {
//   visitParagraph(paragraph: Paragraph): void {
//     throw new Error("Method not implemented.");
//   }
//   visitPicture(picture: Picture): void {
//     throw new Error("Method not implemented.");
//   }
//   visitTable(table: Table) {
//     throw new Error("Method not implemented.");
//   }

// }

// class ScreenRender implements IVisitor {
//   visitParagraph(paragraph: Paragraph): void {
//     throw new Error("Method not implemented.");
//   }
//   visitPicture(picture: Picture): void {
//     throw new Error("Method not implemented.");
//   }
//   visitTable(table: Table) {
//     throw new Error("Method not implemented.");
//   }

// }

// interface IDocumentItem {
//   accept(visitor: IVisitor): void;
// }

// class Paragraph implements IDocumentItem {
//   accept(visitor: IVisitor): void {
//       visitor.visitParagraph(this);
//   }
// }

// class Picture implements IDocumentItem {
//   accept(visitor: IVisitor): void {
//       visitor.visitParagraph(this)
//   }
// }

// class Table implements IDocumentItem {
//   accept(visitor: IVisitor): void {
//       visitor.visitTable(this)
//   }
// }

// let doc: IDocumentItem[] = [new Paragraph(), new Table()];
// let renderer: IVisitor = new Renderer();

// for (let item of doc) {
//   item.accept(renderer);
// }

// interface IDocumentItem {
//   render(renderer: Renderer): void;
//   read(screenRender: ScreenRender): void;
// }

// class Paragraph implements IDocumentItem {
//   render(renderer: Renderer): void {
//     throw new Error("Method not implemented.");
//   }
//   read(screenRender: ScreenRender): void {
//     throw new Error("Method not implemented.");
//   }
// }

// class Picture implements IDocumentItem {
//   render(renderer: Renderer): void {
//     throw new Error("Method not implemented.");
//   }
//   read(screenRender: ScreenRender): void {
//     throw new Error("Method not implemented.");
//   }
// }

// class Table implements IDocumentItem {
//   render(renderer: Renderer): void {
//     throw new Error("Method not implemented.");
//   }
//   read(screenRender: ScreenRender): void {
//     throw new Error("Method not implemented.");
//   }
// }

// let doc: IDocumentItem[] = [new Paragraph(), new Table()];
// let renderer: Renderer = new Renderer();

// for (let item of doc) {
//   item.render(renderer);
// }

function visit<T1, T2, T3> (
  varient: Variant<T1, T2, T3>, 
  func1: (value: T1) => void,
  func2: (value: T2) => void,
  func3: (value: T3) => void
): void {
  switch(varient.index) {
    case 0: func1(<T1>varient.vlaue); break;
    case 1: func2(<T2>varient.vlaue); break;
    case 2: func3(<T3>varient.vlaue); break;
    default: throw new Error();
    
  }
}

class Renderer {
  renderParagraph(paragraph: Paragraph) {

  }
  renderPicture(picture: Picture) {

  }
  renderTable(table: Table) {

  }
}

class Paragraph {

}

class Picture {

}

class Table {

}

let doc: Variant<Paragraph, Picture, Table>[] = [
  Variant.make1(new Paragraph()),
  Variant.make3(new Table())
];

let renderer: Renderer = new Renderer();

for (let item of doc) {
  visit(
    item,
    (paragraph: Paragraph) => renderer.renderParagraph(paragraph),
    (picture: Picture) => renderer.renderPicture(picture),
    (table: Table) => renderer.renderTable(table)
  )
}
