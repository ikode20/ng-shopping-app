import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListDetail } from '../../models/shopping-list-detail';

const SHOPPING_LIST_API = 'https://interview.r36.dev/api';

@Injectable()
export class ShoppingListDetailService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  getListDetail(id: string): Observable<ShoppingListDetail> {
    return this.http.get<ShoppingListDetail>(`${SHOPPING_LIST_API}/${id}`, this.httpOptions);
  }

}
