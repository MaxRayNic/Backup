import { Component, OnInit } from '@angular/core';
import { RestaurantCityService } from './restaurant-city.service';

@Component({
  selector: 'app-restaurant-city',
  templateUrl: './restaurant-city.component.html',
  styleUrls: ['./restaurant-city.component.css']
})
export class RestaurantCityComponent implements OnInit {

  restaurants = [];
  constructor(private _restaurantService: RestaurantCityService) { }


  returnValue(value){
    this._restaurantService.getRestaurantByCityName(value).subscribe(data => this.restaurants = data);
    //this._restaurantService.getRestaurantByCityId();

  }
  returnRes(){
console.log(this.restaurants)  ;
  }
  ngOnInit() {


  }

}
