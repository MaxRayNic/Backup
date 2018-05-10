import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() restaurantDetails: any;

  id:number;
  restaurantName:string;
  restaurantLocation:string;
  costOfTwo:number;


  constructor(private _updateService : UpdateService){
  }

  ngOnInit() {
    this.id = this.restaurantDetails.id;
    this.restaurantName = this.restaurantDetails.restaurantName;
    this.restaurantLocation = this.restaurantDetails.restaurantLocation;
    this.costOfTwo = this.restaurantDetails.costOfTwo;

  }

}
