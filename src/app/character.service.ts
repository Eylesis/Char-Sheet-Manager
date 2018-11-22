import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  getCharacters(): Observable<Character[]> {
    return of(CHARACTERS);
  }

  getCharacter(id: number): Observable<Character> {
    return of(CHARACTERS.find(character => character.id === id));
  }

  constructor() { }
}
