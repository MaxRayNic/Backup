import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UpdateService } from '../update.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() restaurantDetails: any;

  imageUrl : string;
  name : string;
  rating : string;
  costForTwo : string;
  votes : string;
  address : string;
  message : string;
  restaurantJSON : any;


  constructor(private _updateService : UpdateService){
  }

  ngOnInit() {

    this.imageUrl = this.restaurantDetails.restaurant.thumb;
    this.name = this.restaurantDetails.restaurant.name;
    this.costForTwo = this.restaurantDetails.restaurant.average_cost_for_two;
    this.rating = this.restaurantDetails.restaurant.user_rating['aggregate_rating'];
    this.votes = this.restaurantDetails.restaurant.user_rating['votes'];
    this.address = this.restaurantDetails.restaurant.location['address'];

  }

  addRestaurant(){
    
   this._updateService.addRestaurantService(this.restaurantDetails.restaurant.id,
   this.name,this.address,this.costForTwo).subscribe(data => this.restaurantJSON = data);
  }



}
