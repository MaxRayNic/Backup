import { Component, EventEmitter } from '@angular/core';
import { ChildService } from './child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['enteredName'],
  outputs: ['passingName']
})
export class ChildComponent {

  enteredName: string;
  childName: string;
  childMessage: string;
  passingName = new EventEmitter<string>();

  constructor(private _childService: ChildService){

  }

  ngOnInit(){
    this.childMessage = this._childService.getString();
  }



  updatePassingName(value: string) {
    this.passingName.emit(value);
  }

  printChildValue(child) {
    this.childName = child;
  }


}
