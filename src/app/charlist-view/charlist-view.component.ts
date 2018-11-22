import { Component, OnInit } from '@angular/core';
import { CharacterService }  from '../character.service';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-charlist-view',
  templateUrl: './charlist-view.component.html',
  styleUrls: ['./charlist-view.component.css']
})
export class CharlistViewComponent implements OnInit {

  characters : Character[];

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
        .subscribe(characters => this.characters = characters);
  }

}
