import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Crisis {
  id: string
  name: string
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const crisses: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
]

export class CrisisService {

  constructor() { }

  getCrisses(): Crisis[] {
    return crisses;
  }

  getCrisis(id: string): Crisis {
    let data =  crisses.find((crisis: Crisis) => {
      return crisis.id == id;
    });

    return data;
  }

}
