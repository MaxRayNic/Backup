import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
private _dataArray =['red','blue','green']
  constructor() { }
  showData(){
    return this._dataArray[Math.floor(Math.random()*this._dataArray.length)];
  }
  addData(data){
    this._dataArray.push(data);
  }
}
