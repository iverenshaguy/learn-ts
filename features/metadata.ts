import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// // like adding an invisible property to the plane object
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane); // { color: 'red' }

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note); // 'hi there'
// console.log(height); // 10

// // like adding an invisible property to the color property of the plane object
// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// console.log(plane); // { color: 'red' }

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note); // 'hi there'

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi there')
  fly(): void {
    console.log('vrrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function markFunction(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);

  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);

