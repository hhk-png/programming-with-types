// abstract class ALogger {
//   abstract log(line: string): void;
// }

// class ConsoleLogger extends ALogger {
//   log(line: string): void {
//     console.log(line);
//   }
// }

interface ILogger {
  log(line: string): void;
}

class ConsoleLogger implements ILogger {
  log(line: string): void {
    console.log(line);
  }
}

interface IExtendedLogger extends ILogger {
  warn(line: string): void;
  error(line: string): void;
}

interface ISpeaker {
  playSound(): void;
}

interface IVolumeControl {
  volumeUp(): void;
  volumeDown(): void;
}

interface ISpeakerWithVolumeControl extends ISpeaker, IVolumeControl {

}

class MySpeaker implements ISpeakerWithVolumeControl {
  playSound(): void {
    throw new Error("Method not implemented.");
  }
  volumeUp(): void {
    throw new Error("Method not implemented.");
  }
  volumeDown(): void {
    throw new Error("Method not implemented.");
  }
}

class MusicPlayer {
  speaker: ISpeakerWithVolumeControl;

  constructor(speaker: ISpeakerWithVolumeControl) {
    this.speaker = speaker;
  }
}

interface IExpression {
  eval(): number;
}

abstract class BinaryExpression implements IExpression {
  readonly a: number;
  readonly b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  abstract eval(): number;

}

class SumExpression extends BinaryExpression {
  eval(): number {
    return this.a + this.b;
  }
}

class MulExpression extends BinaryExpression {
  eval(): number {
      return this.a * this.b;
  }
}

class Shape {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Shape {
  center: Point;
  radius: number;

  constructor(id: string, center: Point, radius: number) {
    super(id);
    this.center = center;
    this.radius = radius;
  }
}

class CEO {
  isBusy(): boolean {
    return false;
  }

  answer(question: string): string {
    return "a";
  }
}

class Department {}

class Budget {}

class Company {
  private ceo: CEO = new CEO();
  private departments: Department[] = [];
  private budget: Budget = new Budget();

  askCEO(question: string): string | undefined {
    if (!this.ceo.isBusy()) {
      return this.ceo.answer(question);
    }
  }
}

namespace GeometryLibrary {
  export interface ICircle {
    getCenterX(): number;
    getcenterY(): number;
    getDiameter(): number;
  }
}

class CircleAdapter implements GeometryLibrary.ICircle {
  private circle: Circle;

  constructor(circle: Circle) {
    this.circle = circle;
  }

  getCenterX(): number {
    return this.circle.center.x;
  }

  getcenterY(): number {
    return this.circle.center.y;
  }

  getDiameter(): number {
    return this.circle.radius * 2;
  }
}

class Animal {}

interface IHunter {
  track(): void;
  stalk(): void;
  pounce(): void;
}

class HuntingBehavior implements IHunter {
  pray: Animal | undefined;
  track(): void {
      
  }
  stalk(): void {
      
  }
  pounce(): void {
      
  }
}

class Pet {}

class Cat extends Pet implements IHunter {
  private huntingBehavior: HuntingBehavior = new HuntingBehavior()
  track(): void {
      
  }
  stalk(): void {
      
  }
  pounce(): void {
      
  }
  memo(): void {

  }
}

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: unknown = {};
  for (const prop in first) {
    if ((first as any).hasOwnProperty(prop)) {
      (<First>result)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if ((second as any).hasOwnProperty(prop)) {
      (<Second>result)[prop] = second[prop];
    }
  }
  return <First & Second>result;
}



class Renderer {
  renderPanel(panel: Panel) {

  }
  renderLabel(label: Label) {

  }
  renderButton(button: Button) {

  }
}

class Panel {

}

class Label {

}

class Button {
  
}



