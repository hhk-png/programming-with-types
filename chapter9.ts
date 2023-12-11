type TransformFunction = (value: number) => number;

function doNothing(value: number): number {
  return value;
}

function getNumbers(transform: TransformFunction = doNothing): number[] {
  return [];
}

// class BinaryTreeNode<T> {
//   value: T;
//   left: BinaryTreeNode<T> | undefined;
//   right: BinaryTreeNode<T> | undefined;

//   constructor(value: T) {
//     this.value = value;
//   }
// }

// class LinkedListNode<T> {
//   value: T;
//   next: LinkedListNode<T> | undefined;

//   constructor(value: T) {
//     this.value = value;
//   }

// }

// function printInOrder<T>(root: BinaryTreeNode<T>): void {
//   if (root.left) {
//     printInOrder(root.left);
//   }

//   console.log(root.value);

//   if (root.right) {
//     printInOrder(root.right);
//   }
// }

// function printLinkedList<T>(head: LinkedListNode<T>): void {
//   let current: LinkedListNode<T> | undefined = head;
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//   }
// }

// class BinaryTreeIterator<T> implements Iterator<T> {
//   private values: T[];
//   private root: BinaryTreeNode<T>;

//   constructor(root: BinaryTreeNode<T>) {
//     this.values = [];
//     this.root = root;
//     this.inOrder(root);
//   }

//   next(): IteratorResult<T> {
//     const result: T | undefined = this.values.shift();
//     if (!result) {
//       return { done: true, value: this.root.value };
//     }
//     return { done: false, value: result };
//   }

//   private inOrder(node: BinaryTreeNode<T>): void {
//     if (node.left) {
//       this.inOrder(node.left);
//     }

//     this.values.push(node.value);

//     if (node.right) {
//       this.inOrder(node.right);
//     }
//   }
// }

// function contains<T>(value: T, iterator: Iterator<T>): boolean {
//   let result: IteratorResult<T> = iterator.next();
//   while (!result.done) {
//     if (result.value === value) {
//       return true;
//     }
//     result = iterator.next();
//   }

//   return false;
// }

class LinkedListIterator<T> implements Iterator<T> {
  private head: LinkedListNode<T>;
  private current: LinkedListNode<T> | undefined;

  constructor(head: LinkedListNode<T>) {
    this.head = head;
    this.current = head;
  }

  next(): IteratorResult<T> {
    if (!this.current) {
      return { done: true, value: this.head.value };
    }

    const result: T = this.current.value;
    this.current = this.current.next;
    return { done: false, value: result };
  }
}

class LinkedListNode<T> implements Iterable<T> {
  value: T;
  next: LinkedListNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }

  [Symbol.iterator](): Iterator<T> {
    return new LinkedListIterator<T>(this);
  }
}

function* square(iter: Iterable<number>): IterableIterator<number> {
  for (const value of iter) {
    yield value ** 2;
  }
}

function* take<T>(iter: Iterable<T>, n: number): IterableIterator<T> {
  for (const value of iter) {
    if (n-- <= 0) {
      return ;
    }
    yield value;
  }
}




