import { Component, OnInit } from '@angular/core';
import { ShoppingList, FullShoppingList } from '../../models/shopping-list';
import { ShoppingListsService } from '../../services/shopping-lists.service';

import { tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';


@Component({
  selector: 'shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  lists: ShoppingList[] = [];

  constructor(private listsService: ShoppingListsService) { }

  ngOnInit(): void {
    this.listsService.getLists()
    .subscribe((lists: ShoppingList[]) => this.lists = lists);
  }

  createList(name: string) {
    this.listsService.createList(name)
    .pipe(
      tap(val => console.log('Created:', val))
    )
    .subscribe((created: FullShoppingList) => {
      const { id, name } = created;
      const size = created.items.length;
      this.lists = [...this.lists, { id, name, size}];
    });
  }

  deleteList(id: string) {
    this.listsService.deleteList(id)
    .pipe(
      tap(_ => console.log('Deleted:', id))
    )
    .subscribe(_ => this.lists = this.lists.filter(list => list.id !== id));
  }
}
