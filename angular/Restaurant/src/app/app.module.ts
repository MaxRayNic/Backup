import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { RestaurantCityComponent } from './restaurant-city/restaurant-city.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantCityService } from './restaurant-city/restaurant-city.service';



@NgModule({
  declarations: [
    AppComponent,

    RestaurantCityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestaurantCityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
