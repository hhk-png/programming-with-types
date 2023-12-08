import fs from 'fs'

// function raise(message: string): never {
//   console.log(`Error "${message}" raised at ${new Date()}`);
//   throw new Error(message);
// }

// function readConfig(configFile: string): string {
//   if (!fs.existsSync(configFile)) {
//     raise(`Configuration file ${configFile} missing`);
//   }
//   return fs.readFileSync(configFile, 'utf-8');
// }

declare const EmptyType: unique symbol;

// class Empty {
//   [EmptyType]: void
//   private constructor() { }
// }

// function raise(message: string): Empty {
//   console.log(`Error "${message}" raised at ${new Date()}`);
//   throw new Error(message);
// }

// function greet(): void {
//   console.log('Hello World');
// }

// declare const UnitType: unique symbol;
// class Unit {
//   [UnitType]: void;
//   static readonly value: Unit = new Unit();
//   private constructor() { };
// }

// function greet(): Unit {
//   console.log("Hello World");
//   return Unit.value;
// }

declare function secondsSinceLastComment(userId: string): number;
declare function postComment(comment: string, userId: string): void;

function commentGateKeeper(comment: string, userId: string): boolean {
  // 短路优化
  if (comment === "" || secondsSinceLastComment(userId)) {
    return false;
  }
  postComment(comment, userId);

  return true;
}

type Item = { name: string, price: number };

function getTotal(items: Item[]): number {
  let total: number = 0;
  for (let item of items) {
    total += item.price;
  }
  return total;
}

// let total: number = getTotal([
//   { name: ' cherry', price: 0.1 },
//   { name: 'mint', price: 0.1 },
//   { name: 'strawberry', price: 0.1 }
// ]);

// console.log(total === 0.3)

function addError(a: number, b: number, min: number, max: number): boolean {
  if (b >= 0) {
    return a > max - b;
  } else {
    return a < min - b;
  }
}

class Currency {
  private dollars: number
  private cents: number;

  constructor(dollars: number, cents: number) {
    if (!Number.isSafeInteger(dollars)) {
      throw new Error('Cannot sagely represent dollar amount');
    }

    if (!Number.isSafeInteger(cents)) {
      throw new Error('Cannot sagely represent cents amount');
    }
  }

  getDollars(): number {
    return this.dollars;
  }

  getCents(): number {
    return this.cents;
  }
}

function add(currency1: Currency, currency2: Currency): Currency {
  return new Currency(
    currency1.getDollars() + currency2.getDollars(),
    currency1.getCents() + currency2.getCents()
  );
}

function epsilonEqual(a: number, b: number): boolean {
  return Math.abs(a - b) <= Number.EPSILON;
}

function lineBreak(text: string, lineLength: number): string[] {
  const lines: string[] = [];
  while (text.length > lineLength) {
    text.substring
    lines.push(text.substring(0, lineLength));
    text = text.substring(lineLength);
  }
  lines.push(text);
  return lines;
}

class NumberListNode {
  value: number;
  next: NumberListNode | undefined;

  constructor(value: number) {
    this.value = value;
    this.next = undefined;
  }
}

class NumberLinkedList {
  private tail: NumberListNode = { value: 0, next: undefined };
  private head: NumberListNode = this.tail;

  at(index: number): number {
    let res: NumberListNode | undefined = this.head.next;
    while (index > 0 && res) {
      res = res.next;
      index--;
    }
    if (!res) {
      throw new RangeError();
    }
    return res.value;
  }

  append(value: number) {
    this.tail.next = { value: value, next: undefined };
    this.tail = this.tail.next;
  }
}

class NumberArrayList {
  private numbers: number[] = [];
  private length: number = 0;

  at(index: number): number {
    if (index >= this.length) {
      throw new RangeError();
    }
    return this.numbers[index];
  }

  append(value: number) {
    let newNumbers: number[] = new Array(this.length + 1);
    for (let i = 0; i < this.length; i++) {
      newNumbers[i] = this.numbers[i];
    }
    newNumbers[this.length] = value;
    this.numbers = newNumbers;
    this.length++;
  }
}

class NumberList {
  private numbers: number[] = new Array(1);
  private length: number = 0;
  private capacity: number = 1;

  at(index: number): number {
    if (index >= this.length) {
      throw new RangeError();
    }
    return this.numbers[index];
  }

  append(value: number) {
    if (this.length < this.capacity) {
      this.numbers[this.length] = value;
      this.length++;
      return;
    }
    this.capacity = this.capacity * 2;
    let newNumbers: number[] = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newNumbers[i] = this.numbers[i];
    }
    newNumbers[this.length] = value;
    this.numbers = newNumbers;
    this.length++;
  }
}

class Tree {
  nodes: (number | undefined)[] = [];
  left_child_index(index: number): number {
    return index * 2;
  }
  right_child_index(index: number): number {
    return index * 2 + 1;
  }
  add_leval() {
    let newNodes: (number | undefined)[] = new Array(this.nodes.length * 2 + 1);
    for (let i = 0; i < this.nodes.length; i++) {
      newNodes[i] = this.nodes[i];
    }
    this.nodes = newNodes;
  }
}

class TreeNode { 
  value: number;
  left: TreeNode | undefined;
  right: TreeNode | undefined;
  constructor(value: number) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

