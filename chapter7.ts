// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// interface Named {
//   name: string;
// }

// function greet(named: Named): void {
//   console.log(`Hi ${named.name}`)
// }

// greet(new User("Alice", 25));

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

function deserialize(input: string): any {
  return JSON.parse(input);
}

function greet(user: User): void {
  console.log(`Hi ${user.name}!`)
}

function isUser(user: any): user is any {
  if (user === null || user === undefined) {
    return false;
  }
  return typeof user.name === 'string';
}

let user: any = deserialize('{"name": "Alice"}');
if (isUser(user)) {
  console.log(isUser(user))
  greet(user);
}

enum TurnDirection {
  Left,
  Right
}

function turnAngle(turn: TurnDirection): number {
  switch (turn) {
    case TurnDirection.Left: return -90;
    case TurnDirection.Right: return 90;
    default: return fail("Unk");
  }
}

function fail(message: string): never {
  console.error(message);
  throw new Error(message);
}

// turnAngle(TurnDirection.Left)

declare const TriangleType: unique symbol;
class Triangle {}



