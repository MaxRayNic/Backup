import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { TestComponent } from './test/test.component';
import { TestModule } from './test/test.module';
import { GrandParentComponent } from './grand-parent/grand-parent.component';




@NgModule({
  declarations: [
    AppComponent,CourseComponent,TestComponent, GrandParentComponent
  ],
  imports: [BrowserModule],
  exports:[AppComponent],

  providers: [],
  bootstrap: [GrandParentComponent]
})
export class AppModule { }
