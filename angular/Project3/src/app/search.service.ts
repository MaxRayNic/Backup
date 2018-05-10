import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';

import { RequestOptions } from '@angular/http';
import { ServiceInterface } from './serviceInterface';
import { ViewServiceService } from './view-service.service';
@Injectable()
export class SearchService {
JsonArray :any;

// private url:string='http://192.168.0.144:8080/api/v1/user?';
private url:string='http://172.23.238.151:8091/api/v1/user?';

  constructor(private httpClient:HttpClient) { }
getSearchResults(Domain,Concept,Intent) :Observable<any>{

  let params = new HttpParams()
  params = params.append('domain',Domain);
    params = params.append('concept',Concept);
    params = params.append('intent',Intent);
// console.log((this.url,{params:params}));
console.log(this.httpClient.get<any>( this.url,{params:params}));

// this.httpClient.get<any>( this.url,{params:params}).subscribe(result=>ViewServiceService.JsonArray =result)


  return this.httpClient.get<any>(this.url,{params:params});

}

}
