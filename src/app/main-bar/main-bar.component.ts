import { Component,ViewChild, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../SidenavService';
import { CharacterService } from '../character.service';
import { Character } from 'src/app/character';
@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {
  characters: Character[];
  @ViewChild('leftSidenav') public sidenav: MatSidenav;
  
  getCharacters(): void {
    this.characterService.getCharacters()
        .subscribe(characters => this.characters = characters);
  }

  constructor(private characterService: CharacterService, private sidenavService: SidenavService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'github',
        sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
  }
  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.sidenavService.open();
    this.getCharacters();
  }

}
