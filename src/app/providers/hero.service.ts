import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  id: string
  name: string

  constructor(id: string, name: string) { 
    this.id = id;
    this.name = name;
  }
}
