import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  providers:[DataService]
})
export class Component1Component implements OnInit {
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
