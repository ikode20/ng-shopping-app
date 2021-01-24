import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingList, FullShoppingList } from '../models/shopping-list';
import { Observable, of } from 'rxjs';

const SHOPPING_LIST_API = 'https://interview.r36.dev/api';

@Injectable()
export class ShoppingListsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }

  getLists(): Observable<ShoppingList[]> {
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
    return this.http.get<ShoppingList[]>(SHOPPING_LIST_API, this.httpOptions);
  }

  createList(name: string): Observable<FullShoppingList> {
    // return of(
    //   {
    //     "id": "1eb5b3a8-3fb7-6e9d-bc0c-" + name,
    //     name,
    //     "items": []
    //   },
    // );
    return this.http.post<FullShoppingList>(SHOPPING_LIST_API, { name }, this.httpOptions);
  }

  deleteList(id: string): Observable<{}> {
    // return of();
    return this.http.delete(`${SHOPPING_LIST_API}/${id}`, this.httpOptions);
  }
}
