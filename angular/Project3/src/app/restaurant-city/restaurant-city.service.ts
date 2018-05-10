import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IRestaurantCity } from "./restaurant-city";
import { Observable } from "rxjs/Observable";

@Injectable()

export class RestaurantCityService {

  constructor(private http: HttpClient) {

  }

  getRestaurantByCityId(city_name) : Observable<IRestaurantCity[]> {
    return this.http.get<IRestaurantCity[]>('https://developers.zomato.com/api/v2.1/cities?'
    ,{headers: new HttpHeaders().set('user-key','07f50429860a52025ce001e1e2e0896e')
    ,params: new HttpParams().set('q', city_name)});
  }

}
