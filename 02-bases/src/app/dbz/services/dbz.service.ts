import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: v4(),
    name: 'Goku',
    power: 10000
  }, {
    id: v4(),
    name: 'Vegeta',
    power: 9000
  },
  {
    id: v4(),
    name: 'Krillin',
    power: 5000
  }];

  addCharacter(character: Character): void {

    let newCharacter: Character = { ...character, id: v4()}

    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  constructor() { }

}
