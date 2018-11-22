import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharViewComponent }      from './char-view/char-view.component';
import { HomeViewComponent }      from './home-view/home-view.component';
import { CharlistViewComponent } from './charlist-view/charlist-view.component';
import { NewCharViewComponent } from './new-char-view/new-char-view.component';
const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'character/:id', component: CharViewComponent },
  { path: 'characterlist', component: CharlistViewComponent },
  { path: 'newcharacter', component: NewCharViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}