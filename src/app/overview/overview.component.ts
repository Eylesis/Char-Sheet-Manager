import { Component, OnInit } from '@angular/core';
import { CharacterService }  from '../character.service';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  character: Character;
  modDecorator:string[];
  abiNames:string[];
  abiScores: number[];
  abiMods: number[];
  
    constructor( 
      private route: ActivatedRoute,
      private characterService: CharacterService,
      private location: Location) {	}
  
    ngOnInit(): void {
      this.getCharacter();
      this.abiNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
      this.abiScores = [];
      this.abiMods = [];
      this.modDecorator = [];
      var index = 0;
      
      for(let key in this.character.abiScores) 
      {
          let value = this.character.abiScores[key];
          this.abiScores[index] = value;
          this.abiMods[index] = this.character.abiMods[key + "Mod"];
          if (value >= 10)
            this.modDecorator[index] = "+";
          else
            this.modDecorator[index] = "";
          index++;
      }
    }
  
    getCharacter(): void {
      this.route.params.subscribe( params => {
        const id = +params['id'];
        this.characterService.getCharacter(id).subscribe(character => this.character = character);
      })
    }
}
