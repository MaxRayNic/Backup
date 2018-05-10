import { Component, EventEmitter } from "@angular/core";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  outputs:['gpname']
})
export class ParentComponent{

  firstName: string = '';
  passedName : string;
  gpname = new EventEmitter<string>();

  updateGPName() {
    this.gpname.emit(this.passedName);
  }


  printValue(inputValue) {
      this.firstName = inputValue;
      console.log(this.firstName);
    }

  printPassedName() {
    console.log(this.passedName);
  }
}
