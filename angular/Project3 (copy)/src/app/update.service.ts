import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceInterface } from './serviceInterface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UpdateService {

testMessage='Service checking!!';
  constructor(private httpClient:HttpClient) {}
  private url:string = 'http://localhost:8080/api/v1/restaurant';
  getRestaurantById(value): Observable<ServiceInterface []>{
  return this.httpClient.get<ServiceInterface []>(this.url+'/'+value);
}
getRestaurantByName(value) : Observable<ServiceInterface[]>{
  return this.httpClient.get<ServiceInterface []>(this.url+'/restaurantname?name='+value);
}
addRestaurantService(id,name,location,cost):Observable<any>{
  var json=JSON.parse("{\"id\":\""+id+"\",\"restaurantName\":\""+name+"\",\"restaurantLocation\":\""+location+"\",\"costOfTwo\":\""+cost+"\"}");
console.log(json);
  return this.httpClient.post<any>(this.url,json,{
            headers: { 'Content-Type': 'application/json; charset=utf-8'}}

  );

}
deleteRestaurantById(value):Observable<any>{
  return this.httpClient.delete<any>(this.url+'/'+value);
}
getAllRestaurants():Observable<ServiceInterface[]>{
  return this.httpClient.get<ServiceInterface []>(this.url);
}
}
