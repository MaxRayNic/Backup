import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: '/test.component.html'
})
export class TestComponent implements OnInit {
  newVar: any;
  constructor() {  }

  @Input('star') star:string;
  @Output()toParent = new EventEmitter();
  setnewVar(value){
    this.newVar =value;
  }
emitString(){
  this.toParent.emit(this.newVar);
}
  ngOnInit() {

  }
}
