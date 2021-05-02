import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;
    constructor() { }

    countActiveToInactive() {
        this.activeToInactive++;
        console.log('Count Active to Inactive Count: ' + this.activeToInactive);
        
    }
    countInactiveToActive() {
        this.inactiveToActive++;
        console.log('Count Inactive to Active Count: ' + this.inactiveToActive);
    }
}