import { HttpClientModule } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatSidenavContent, MatTabsModule, MatToolbarModule, MatIconModule,
        MatDividerModule, MatCardModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { CharlistViewComponent } from './charlist-view/charlist-view.component';
import { CharViewComponent } from './char-view/char-view.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { SidenavService } from './SidenavService';
import { HomeViewComponent } from './home-view/home-view.component';
import { AppRoutingModule } from './app-routing.module';
import { NewCharViewComponent } from './new-char-view/new-char-view.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    MainBarComponent,
    CharlistViewComponent,
    CharViewComponent,
    MainToolbarComponent,
    HomeViewComponent,
    NewCharViewComponent,
    OverviewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatOptionModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule,MatIconModule, MatDividerModule, MatCardModule, AppRoutingModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
