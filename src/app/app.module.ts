import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShoppingListsModule } from './shopping-lists/shopping-lists.module'
import { AppComponent } from './app.component';
import { ShoppingListsComponent } from './shopping-lists/containers/shopping-lists/shopping-lists.component';

const routes: Routes = [
  { path: '', component: ShoppingListsComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ShoppingListsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
