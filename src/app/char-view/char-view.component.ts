import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService }  from '../character.service';
import { Character } from '../character';
import { MainToolbarComponent } from '../main-toolbar/main-toolbar.component';
@Component({
  selector: 'app-char-view',
  templateUrl: './char-view.component.html',
  styleUrls: ['./char-view.component.css']
})
export class CharViewComponent implements OnInit {
  character: Character;

  constructor( 
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location) {	}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    this.route.params.subscribe( params => {
      const id = +params['id'];
      this.characterService.getCharacter(id).subscribe(character => this.character = character);
    })
  }

}
