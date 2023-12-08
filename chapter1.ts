function booleanToString(b: boolean): string {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function scriptAt(s: string): number {
  return s.indexOf('Script');
}

function safeDivide(): number {
  let x: number = 42;
  if (x === 0) {
    throw new Error("x should not be 0");
  }
  x = x - 42;
  return 42 / x;
}

class SafeDivisor {
  private divisor: number = 1;
  setDivisor(value: number) {
    if (value === 0) {
      throw new Error("Value should not be 0");
    }
    this.divisor = value;
  }
  divide(x: number): number {
    return x / this.divisor;
  }
}

function exploit(): number {
  let sd = new SafeDivisor();
  sd.setDivisor(2);
  return sd.divide(42);
}

// function findFirstNegativeNumber(nums: number[]): number | undefined {
//   for (let i of nums) {
//     if (i < 0) {
//       return i;
//     }
//   }
//   console.error("No matching value found");
// }

// function findFirstOneCharacterString(strs: string[]): string | undefined {
//   for (let str of strs) {
//     if (str.length === 1) {
//       return str;
//     }
//   }
//   console.error("No matching value found");
// }

declare function find(range: any, pred: any): any;
// declare function first<T>(range: T[], p: (elem: T) => boolean): T | undefined;

function first<T>(range: T[], p: (elem: T) => boolean): T | undefined {
  for (let elem of range) {
    if (p(elem)) {
      return elem;
    }
  }
}

function findFirstNegativeNumber(nums: number[]): number | undefined {
  return first(nums, n => n < 0);
}

function findFirstOneCharacterString(strs: string[]): string | undefined {
  return first(strs, str => str.length === 1);
}

interface Duck {
  quack(): void;
}

function quacker(duck: Duck) {
  duck.quack();
}

// quacker({ quack: function () { console.log("quack"); } })
// quacker(42);






