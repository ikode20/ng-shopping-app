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
    // return of([
    //   {
    //     "id": "1eb5b3a8-3fb7-6e9d-bc0c-5f5de1774704",
    //     "name": "My New Shopping List",
    //     "size": 7
    //   },
    //   {
    //     "id": "1eb5b3a5-2f76-6deb-bc0c-5f5de1774704",
    //     "name": "My Second Shopping List",
    //     "size": 12
    //   },
    //   {
    //     "id": "1eb5b3a5-0db6-6bba-bc0c-5f5de1774704",
    //     "name": "My First Shopping List",
    //     "size": 3
    //   }
    // ]);
    return this.http.get<ShoppingListDetail>(`${SHOPPING_LIST_API}/${id}`, this.httpOptions);
  }

}
