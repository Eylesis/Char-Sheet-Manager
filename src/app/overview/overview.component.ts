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
  modDecorator: string[];
  saveDecorator: string[];
  abiNames: string[];
  abiScores: number[];
  abiMods: number[];
  savingThrows: number[];
  profButton: string[];
  charStats: any[];
  statName: string[];
  
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
      this.saveDecorator = [];
      this.savingThrows = [];
      this.profButton = [];
      
      var temp = this.character.stats;
      this.charStats = [temp.ac, temp.prof, temp.speed, temp.init];
      this.statName = ["Armor Class", "Proficiency Bonus", "Speed", "Initiative"];

      
      var index = 0;
      
    

      for(let key in this.character.abiScores) 
      {
          let value = this.character.abiScores[key];
          this.abiScores[index] = value;
          this.abiMods[index] = Math.floor((value -10) / 2);
          this.savingThrows[index] = this.character.savingThrows[key + "Save"];
          if (this.abiMods[index] >= 0)
            this.modDecorator[index] = "+";
          else
            this.modDecorator[index] = "";

          if (this.savingThrows[index] == 1)
          {
            this.savingThrows[index] = this.abiMods[index] + this.character.stats.prof;
            this.profButton[index] = "radio_button_checked";
          }
          else
          {
            this.savingThrows[index] = this.abiMods[index];
            this.profButton[index] = "radio_button_unchecked";
          }
          
          
            if (this.savingThrows[index] >= 0)
            this.saveDecorator[index] = "+";
          else
            this.saveDecorator[index] = "";
          
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
