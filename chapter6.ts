// class Widget {}

import readline from "readline";

// interface IWidgetFactory {
//   makeWidget(): Widget;
// }

// class WidgetFactory implements IWidgetFactory {
//   public makeWidget(): Widget {
//     return new Widget();
//   }
// }

// class SingletonDecorator implements IWidgetFactory {
//   private factory: IWidgetFactory;
//   private instance: Widget | undefined = undefined;
  
//   constructor(factory: IWidgetFactory) {
//     this.factory = factory;
//   }

//   public makeWidget(): Widget {
//     if (!this.instance) {
//       this.instance = this.factory.makeWidget();
//     }
//     return this.instance;
//   }
// }

class Widget {}

type WidgetFactory = () => Widget;

function makeWidget(): Widget {
  return new Widget();
}

// function singletonDecorator(factory: WidgetFactory): WidgetFactory {
//   let instance: Widget | undefined = undefined;
//   return (): Widget => {
//     if (!instance) {
//       instance = factory();
//     }
//     return this.instance;
//   }
// }

// function use10Widgets(factory: WidgetFactory) {
//   for (let i = 0; i < 10; i++) {
//     let widget = factory();
//   }
// }

// use10Widgets(singletonDecorator(makeWidget));

// type Counter = () => number;

// function makeCounter(): Counter {
//   let n: number = 1;
//   return () => n++;
// }

// let counter1: Counter = makeCounter();
// let counter2: Counter = makeCounter();

// console.log(counter1())

function* counter(): IterableIterator<number> {
  let n: number = 1;

  while (true) {
    yield n++;
  }
}

let counter1: IterableIterator<number> = counter();

function greet(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question("what's your name?", (name: string) => {
    console.log(`Hi, ${name}`);
    rl.close();
  });
}

// greet();

type AsyncFunction = () => void;

let queue: AsyncFunction[] = [];

function countDown(counterId: string, from: number): void {
  console.log(`${counterId}: ${from}`);

  if (from > 0) {
    queue.push(() => countDown(counterId, from - 1))
  }

  queue.push(() => countDown("counter1", 4));
}

while (queue.length > 0) {
  let func: AsyncFunction = <AsyncFunction>queue.shift();
  func();
}

class InboxMEssage {}
class ProfilePicture {}

// declare function getInboxMessage(): Promise<InboxMEssage[]>;
// declare function getProfilePicture(): Promise<ProfilePicture>;
// declare function renderUI(message: InboxMEssage[], picture: ProfilePicture): void;

// Promise.all([getInboxMessage(), getProfilePicture()])
//   .then((values: [InboxMEssage[], ProfilePicture]) => {
//     renderUI(values[0], values[1]);
//   });


class UserProfile {}

declare function getProfile(node: string): Promise<UserProfile>;
declare function renderUI(profile: UserProfile): void;

Promise.race([getProfile("node1"), getProfile("node2")])
  .then((profile: UserProfile) => {
    renderUI(profile);
  })




