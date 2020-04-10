import { address, company} from 'faker';

export class Company {  // every property needs to be initalize on the same line or in a constructor
     coName: string;
     catchphrase: string;
     location: {
        latitude: number;
        longitude: number;
    };

    constructor() {
        this.coName = company.companyName();
        this.catchphrase = company.catchPhrase();

        this.location = {
            latitude: parseFloat(address.latitude()),
            longitude: parseFloat(address.longitude())
        }

    }

    markerContent(): string {
        return `
        <div>
            <h1>Company: ${this.coName}</h1>
            <h3>Motto: ${this.catchphrase}</h3>
        </div>
        
        `;
    }

}
