import { name, address } from 'faker';

export class User {  // every property needs to be initalize on the same line or in a constructor
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };

    constructor() {
        this.name = name.firstName();

        this.location = {
            latitude: parseFloat(address.latitude()),
            longitude: parseFloat(address.longitude())
        }

    }

    markerContent(): string {
        return `
        <div>
            <h1>Username: ${this.name}</h1>
        </div>
        `
    }

}

