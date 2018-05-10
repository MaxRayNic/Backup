import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: '<h2>Hello!!!{{a}}</h2>'
})
export class CourseComponent implements OnInit {
a ="Hello";
  constructor() {  }

  ngOnInit() {}
}
