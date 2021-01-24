import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { ShoppingListDetailComponent } from './containers/shopping-list-detail/shopping-list-detail.component';
import { ShoppingItemService } from './services/shopping-item/shopping-item.service';
import { ShoppingListDetailService } from './services/shopping-list-detail/shopping-list-detail.service';

@NgModule({
  declarations: [
    ShoppingItemComponent,
    ShoppingListDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ShoppingItemService,
    ShoppingListDetailService
  ]
})
export class ShoppingListDetailModule { }
