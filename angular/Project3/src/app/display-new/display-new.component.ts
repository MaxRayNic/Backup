import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-new',
  templateUrl: './display-new.component.html',
  styleUrls: ['./display-new.component.css']
})
export class DisplayNewComponent implements OnInit {

  @Input() restaurantsArray1 : any;
  constructor() { }

  ngOnInit() {
  }

}
