import { faker } from '@faker-js/faker'; // fork because the main one no longer exists
import { Mappable } from './customMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1 style="color: ${this.color}">User Name: ${this.name}</h1>
      </div>
    `;
  }
}