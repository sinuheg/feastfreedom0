import { Injectable } from '@angular/core';
import {Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantService {

  constructor(private http : Http) { }

  getRestaurants(){
    return this.http.get('/api/restaurants').map(res => res.json());
  }

}
