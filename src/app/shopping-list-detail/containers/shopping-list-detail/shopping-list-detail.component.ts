import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingListDetail } from '../../models/shopping-list-detail';
import { ShoppingListDetailService } from '../../services/shopping-list-detail/shopping-list-detail.service';

@Component({
  selector: 'shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit {

  shoppingList!: ShoppingListDetail;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listDetailService: ShoppingListDetailService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.listDetailService.getListDetail(params.get('id') as string))
    )
    .subscribe(list => this.shoppingList = list);
  }

}
