import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListsComponent } from './containers/shopping-lists/shopping-lists.component';
import { ShoppingListsService } from './services/shopping-lists.service';
import { NewShoppingListComponent } from './components/new-shopping-list/new-shopping-list.component';
import { ShoppingListDetailComponent } from '../shopping-list-detail/containers/shopping-list-detail/shopping-list-detail.component';
import { ShoppingListDetailModule } from '../shopping-list-detail/shopping-list-detail.module';

const routes: Routes = [
  {
    path: 'detail',
    children: [
      { path: '', component: ShoppingListDetailComponent},
      { path: ':id', component: ShoppingListDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListsComponent,
    NewShoppingListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    ShoppingListDetailModule
  ],
  providers: [
    ShoppingListsService
  ]
})
export class ShoppingListsModule { }
