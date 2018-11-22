import { Component, OnInit, Input } from '@angular/core';
import { MainBarComponent } from '../main-bar/main-bar.component';
import { SidenavService } from '../SidenavService';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
  @Input() name: string;

  constructor(private sidenav: SidenavService) {
    
       }
      toggleActive:boolean = true;
    
      toggleSidenav() {
        this.toggleActive = !this.toggleActive;
        this.sidenav.toggle();
      }

  ngOnInit() {
  }

}
