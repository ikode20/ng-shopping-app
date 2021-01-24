import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() list!: ShoppingList;
  @Output() delete = new EventEmitter<string>();

  detailPath = '';

  constructor() { }

  ngOnInit(): void {
    this.detailPath = `/detail/${this.list.id}`;
  }

  onDelete(listId: string) {
    this.delete.emit(listId)
  }


}
