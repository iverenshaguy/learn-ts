import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number,
    lng: number
  };

  constructor() {
    this.name = faker.name.firstName(0);
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `<h3>User Name: ${this.name}</h3>`
  }
}
