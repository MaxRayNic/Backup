import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRestaurantCity } from "./restaurant-city";
import { Observable } from "rxjs/Observable";

@Injectable()

export class RestaurantCityService {

  constructor(private http: HttpClient) {

  }

  getRestaurantByCityName(value) : Observable<Object[]> {
    console.log("asbdkfjaskdf");
    console.log(this.http.get('https://developers.zomato.com/api/v2.1/search?q='+value, {headers: new HttpHeaders({'user-key':'07f50429860a52025ce001e1e2e0896e'})}));
    return this.http.get<Object[]>('https://developers.zomato.com/api/v2.1/search?q='+value,{headers: new HttpHeaders({'user-key':'07f50429860a52025ce001e1e2e0896e'})});
  }

}
