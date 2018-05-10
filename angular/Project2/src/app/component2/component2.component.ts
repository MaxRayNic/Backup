import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  providers:[DataService]
})
export class Component2Component implements OnInit {
data:string;
  constructor(private _service:DataService) { }
  getData(){
    this.data = this._service.showData();
  }
  addData(data){
    this._service.addData(data);
  }
  ngOnInit() {
  }

}
