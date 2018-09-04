import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpParams } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

// import model
import {Restaurant} from "../../shared/models/restaurant.model";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  public todos: Restaurant[] = [];
  private apiToken = '';

  constructor(private httpClient: HttpClient, private _store: Store<any>) {
    _store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
  }

  getRestaurant(): Restaurant {
    return {
      'title': 'string',
      'url': 'string',
      'description': 'test description',
      'image_url': 'www.test.fr',
      'res_count': 10
    };
  }

  getRestaurantAroundMe() {
    this.apiToken = 'AIzaSyC31KimyxC6vQpqA65x1t5n-bK_3uRPkLM';
    this.httpClient.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters', { params: new HttpParams().set('key', this.apiToken) })
  }

}
