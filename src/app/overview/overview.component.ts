import { Component, OnInit} from '@angular/core';
import { CharacterService }  from '../character.service';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface Abi {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  selectedValue = 'def';
  abis: Abi[] = [
    {value: 'def', viewValue: "Default"},
    {value: 'str', viewValue: 'Strength'},
    {value: 'dex', viewValue: 'Dexterity'},
    {value: 'con', viewValue: 'Constitution'},
    {value: 'int', viewValue: 'Intelligence'},
    {value: 'wis', viewValue: 'Wisdom'},
    {value: 'cha', viewValue: 'Charisma'},
  ];

  character: Character;
  charStats: any[];
  statNames: string[];

  abiNames: string[];
  abiScores: number[];
  abiMods: number[];
  modDecorators: string[];

  savingThrows: number[];
  profButtons: string[];
  saveDecorators: string[];

  skillTotals: number[];
  skillButtons: string[];
  skillDecorators: string[];
  skillNames: string[];
  skillMods: string[];

  
    constructor( 
      private route: ActivatedRoute,
      private characterService: CharacterService,
      private location: Location) {	
      }
  
    ngOnInit(): void {
      this.getCharacter();
    }

    onSkillSelected(val:any){
      var index = 0;
      this.skillTotals = [];
      this.skillButtons = [];
      this.skillDecorators = [];
      this.skillNames = ["acrobatics","animalHandling","arcana","deception","athletics","history",
                         "insight","intimidation","investigation","medicine","nature","perception",
                         "performance","persuasion","religion","sleightOfHand","stealth","survival"];
      if (val == "def")
        this.skillMods = ["dex", "wis", "int", "cha", "str", "wis", "wis", "cha", "int", "wis", "wis", "wis", "cha", "cha", "wis", "dex", "dex", "wis"];
      else{
        for(var i = 0; i<this.skillNames.length; i++)
        {
          this.skillMods[i] = val;
        }
      }
      
      for(let name of this.skillNames)
      {
        if (this.character.skills[name] == 1)
        {
          this.skillTotals[index] = this.character.stats.prof + this.character.abiMods[this.skillMods[index] + "Mod"];
          this.skillButtons[index] = "radio_button_checked";
        }
        else 
        {
          this.skillTotals[index] = this.character.abiMods[this.skillMods[index] + "Mod"];
          this.skillButtons[index] = "radio_button_unchecked";
        }
        if (this.skillTotals[index] >= 0)
          this.skillDecorators[index] = "+";
        else
          this.skillDecorators[index] = "";

        index++;
      }
    }

    getCharacter(): void {
      console.log("getChar");
      this.route.params.subscribe( params => {
        const id = +params['id'];
        this.characterService.getCharacter(id).subscribe(character => this.character = character);
      
        this.abiNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
        this.abiScores = [];
        this.abiMods = [];
        this.modDecorators = [];
        this.saveDecorators = [];
        this.savingThrows = [];
        this.profButtons = [];
        
        var temp = this.character.stats;
        var index = 0;
        this.charStats = [temp.ac, temp.prof, temp.speed, temp.init];
        this.statNames = ["Armor Class", "Proficiency Bonus", "Speed", "Initiative"];
        
        this.skillTotals = [];
        this.skillButtons = [];
        this.skillDecorators = [];
        this.skillNames = ["acrobatics","animalHandling","arcana","deception","athletics","history",
                           "insight","intimidation","investigation","medicine","nature","perception",
                           "performance","persuasion","religion","sleightOfHand","stealth","survival"];
        if (this.selectedValue == "def")
          this.skillMods = ["dex", "wis", "int", "cha", "str", "wis", "wis", "cha", "int", "wis", "wis", "wis", "cha", "cha", "wis", "dex", "dex", "wis"];
        else{
          for(var i = 0; i<this.skillNames.length; i++)
            this.skillMods[i] = this.selectedValue;
        }
        
        for(let name of this.skillNames)
        {
          console.log(name);
          console.log(this.character.skills[name]);
          if (this.character.skills[name] == 1)
          {
            this.skillTotals[index] = this.character.stats.prof + this.character.abiMods[this.skillMods[index] + "Mod"];
            this.skillButtons[index] = "radio_button_checked";
          }
          else 
          {
            this.skillTotals[index] = this.character.abiMods[this.skillMods[index] + "Mod"];
            this.skillButtons[index] = "radio_button_unchecked";
          }
          if (this.skillTotals[index] >= 0)
            this.skillDecorators[index] = "+";
          else
            this.skillDecorators[index] = "";

          index++;
        }


        index = 0;
        for(let key in this.character.abiScores) 
        {
            let value = this.character.abiScores[key];
            this.abiScores[index] = value;
            this.abiMods[index] = Math.floor((value -10) / 2);
            this.savingThrows[index] = this.character.savingThrows[key + "Save"];
            if (this.abiMods[index] >= 0)
              this.modDecorators[index] = "+";
            else
              this.modDecorators[index] = "";

            if (this.savingThrows[index] == 1)
            {
              this.savingThrows[index] = this.abiMods[index] + this.character.stats.prof;
              this.profButtons[index] = "radio_button_checked";
            }
            else
            {
              this.savingThrows[index] = this.abiMods[index];
              this.profButtons[index] = "radio_button_unchecked";
            }
            
            
              if (this.savingThrows[index] >= 0)
              this.saveDecorators[index] = "+";
            else
              this.saveDecorators[index] = "";
            
            index++;
        }
      })
    }
}
