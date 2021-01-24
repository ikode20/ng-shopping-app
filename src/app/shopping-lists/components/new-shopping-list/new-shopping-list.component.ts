import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-shopping-list',
  templateUrl: './new-shopping-list.component.html',
  styleUrls: ['./new-shopping-list.component.scss']
})
export class NewShoppingListComponent implements OnInit {

  @Output() added = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(name: string, isValid: boolean | null) {
    if (isValid) {
      this.added.emit(name);
    }
  }

}
