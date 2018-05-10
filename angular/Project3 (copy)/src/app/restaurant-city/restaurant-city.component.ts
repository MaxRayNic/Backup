import { Component, OnInit, Input } from '@angular/core';
import { RestaurantCityService } from './restaurant-city.service';

@Component({
  selector: 'app-restaurant-city',
  templateUrl: './restaurant-city.component.html',
  styleUrls: ['./restaurant-city.component.css']
})
export class RestaurantCityComponent implements OnInit {


  @Input() city_id;

  @Input() city_name;

  restaurants = [];
  constructor(private _restaurantService: RestaurantCityService) {

  }


  returnValue(){
    this._restaurantService.getRestaurantByCityId(this.city_name).subscribe(data => this.restaurants = data);
    //this._restaurantService.getRestaurantByCityId();

  }
  returnRes(){
    console.log(this.restaurants);
  }
  ngOnInit() {


  }

}
