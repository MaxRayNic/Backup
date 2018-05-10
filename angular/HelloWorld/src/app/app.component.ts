import { Component, Output, Input,EventEmitter } from '@angular/core';

@Component({
  selector :'parent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  //inputs:['variable']

})
export class AppComponent {
  firstName: any;

  title = 'Angular-app';
  f='';
  m:string;

// setting value for F
  setF(value){
    // console.log(value);
    this.f=value;
  }
  // showing passed value in console
  show(value){
    console.log(value);
  }
  // event output to variable m
  getChild(ab){
    this.m=ab;
  }
  //display entered name in console
showName(value1,value2){
    console.log("Name: "+value1+" "+value2);


  }
}
