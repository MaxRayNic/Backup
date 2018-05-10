import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class SearchService {
start=0;
private url:string='https://developers.zomato.com/api/v2.1/search?entity_id=';
  constructor(private httpClient:HttpClient) { }
getRestaurantByLocation (value) :Observable<Object[]>{
  return this.httpClient.get<Object[]>(this.url+value+'&entity_type=city&start='+this.start+'&count=9',{headers: new HttpHeaders({'user-key':'07f50429860a52025ce001e1e2e0896e'})});
}
getRestaurantByCuisine(cuisine,location) : Observable<Object[]>{
  return this.httpClient.get<Object[]>(this.url+location+'&entity_type=city&start='+this.start+'&count=9&cuisines='+cuisine,{headers: new HttpHeaders({'user-key':'07f50429860a52025ce001e1e2e0896e'})});
}
}
