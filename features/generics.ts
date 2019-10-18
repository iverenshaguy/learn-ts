class ArrayOfNumbers {
  constructor(public collection: number[]) {
  }

  get(index: number): number {
    return this.collection[index];
  }

}

class ArrayOfStrings {
  constructor(public collection: string[]) {
  }

  get(index: number): string {
    return this.collection[index];
  }

}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {
  }

  get(index: number): T {
    return this.collection[index];
  }

}

const arr = new ArrayOfAnything(['a', 'b']);

// Eaxmple of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3]);
printAnything([1, '2', new Date()]);

// Generic Constraimts

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i].print();
  }
}

// printHousesOrCars([12, 2]); // won't work
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
