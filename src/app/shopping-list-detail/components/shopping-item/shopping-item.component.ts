import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item';

@Component({
  selector: 'shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() item!: ShoppingItem;

  constructor() { }

  ngOnInit(): void {
  }

}
