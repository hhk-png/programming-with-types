// function map<T, U>(items: T[], func: (item: T) => U): U[] {
//   let result: U[] = [];
//   for (const item of items) {
//     result.push(func(item));
//   }
//   return result;
// }

// function* map<T, U>(iter: Iterable<T>, func: (item: T) => U): IterableIterator<U> {
//   for (const value of iter) {
//     yield func(value);
//   }
// }

// function* filter<T>(iter: Iterable<T>, pred: (item: T) => boolean): IterableIterator<T> {
//   for (const value of iter) {
//     if (pred(value)) {
//       yield value;
//     }
//   }
// }

// function reduce<T>(iter: Iterable<T>, init: T, op: (x: T, y: T) => T): T {
//   let result: T = init;
//   for (const value of iter) {
//     result = op(result, value);
//   }
//   return result;
// }

enum ComparisonResult {
  LessThan,
  Equal,
  GreaterThan
}

interface IComparable<T> {
  compareTo(value: T): ComparisonResult;
}

function max<T extends IComparable<T>>(iter: Iterable<T>): T | undefined {
  let iterator: Iterator<T> = iter[Symbol.iterator]();
  let current: IteratorResult<T> = iterator.next();
  if (current.done) {
    return undefined;
  }
  let result: T = current.value;

  while (true) {
    current = iterator.next();
    if (current.done) {
      return result;
    }

    if (current.value.compareTo(result) === ComparisonResult.GreaterThan) {
      result = current.value;
    }
  }
}

function* reverse<T>(iter: Iterable<T>): IterableIterator<T> {
  let stack: T[] = [];
  for (const value of iter) {
    stack.push(value);
  }

  while (true) {
    let value: T | undefined = stack.pop();

    if (!value) {
      return;
    }

    yield value;
  }
}

// function reverse<T>(values: T[]): void {
//   let begin: number = 0;
//   let end: number = values.length;

//   while (begin < end) {
//     const temp: T = values[begin];
//     values[begin] = values[end - 1];
//     values[end - 1] = temp;

//     begin++;
//     end--;
//   }
// }

interface IReadable<T> {
  get(): T;
}

interface IIncrementable<T> {
  increment(): void;
}

interface IWritable<T> {
  set(value: T): void;
}

interface IOutputIterator<T> extends IWritable<T>, IIncrementable<T> {
  equals(other: IOutputIterator<T>): boolean;
}

class ConcoleOutputIterator<T> implements IOutputIterator<T> {
  set(value: T): void {
    console.log(value);
  }

  increment(): void {}

  equals(other: IOutputIterator<T>): boolean {
    return false;
  }
}










