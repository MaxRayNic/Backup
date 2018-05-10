import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { SearchService } from '../search.service';
import { UpdateService } from '../update.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  [x: string]: any;

  constructor(private search:SearchService, private update:UpdateService) { }
@Input() myLocation;

  myControl: FormControl = new FormControl();

  options = [
    'Chinese',
    'American',
    'Asian',
    'BBQ',
    'Bakery',
    'Bar Food',
    'Biryani',
    'British',
    'Burger',
    'Cafe',
    'Coffe and Tea',
    'Continental',
    'Desserts',
    'European',
    'Fast Food',
    'French',
    'Grill',
    'Healthy Food',
    'Indian',
    'Italian',
    'Mexican',
    'Mughlai',
    'North Indian',
    'Pizza',
    'Rolls',
    'Sandwich',
    'Seafood',
    'South Indian',
    'Vegetarian'
   ];
   filteredOptions: Observable<string[]>;

     ngOnInit() {

       this.filteredOptions = this.myControl.valueChanges
         .pipe(
           startWith(''),
           map(val => this.filter(val))
         );
     }

     filter(val: string): string[] {
       return this.options.filter(option =>
         option.toLowerCase().indexOf(val.toLowerCase()) === 0);
     }
     Location = [
    {value: '1', viewValue: 'New Delhi'},
    {value: '2', viewValue: 'Kolkata'},
    {value: '3', viewValue: 'Mumbai'},
    {value: '4', viewValue: 'Bengaluru'},
    {value: '5', viewValue: 'Pune'},
    {value: '6', viewValue: 'Hyderabad'},
    {value: '7', viewValue: 'Chennai'}
  ];
  Cuisines=
    {'Chinese':25,
    'American':1,
    'Asian':3,
    'BBQ':193,
    'Bakery':5,
    'Bar Food':227,
    'Biryani':7,
    'British':133,
    'Burger':168,
    'Cafe':30,
    'Coffe and Tea':161,
    'Continental':35,
    'Desserts':100,
    'European':38,
    'Fast Food':40,
    'French':45,
    'Grill':181,
    'Healthy Food':143,
    'Indian':148,
    'Italian':55,
    'Mexican':73,
    'Mughlai':75,
    'North Indian':50,
    'Pizza':82,
    'Rolls':1023,
    'Sandwich':304,
    'Seafood':83,
    'South Indian':85,
    'Vegetarian':308,
  }

  rest=[];
  rest1=[];

  test2(value){
    if(value==null){
      this.search.getRestaurantByLocation(this.myLocation).subscribe(data=>this.rest=data);
        console.log(this.rest);
    }else{
    this.search.getRestaurantByCuisine(this.Cuisines[value],this.myLocation).subscribe(data=>this.rest=data);
    console.log("hello"+this.rest+this.myLocation+this.Cuisines[value]+value);}
  }
  ngOnChanges(){
    if(this.myLocation != null) {
     this.test2("abc");
     console.log("From search " + this.myLocation);
     this.showFav();
   }
   else
   this.showFav();


   // else {
   //   this.search.getRestaurantByLocation(this.myLocation).subscribe(data=>this.rest=data);
   //   console.log("myLocation is empty!");
   //     this.search.getRestaurantByLocation(this.myLocation).subscribe(data=>this.rest=data);
   //     console.log("change");
   // }
 }
 seeMore(value){
   this.search.start+=9;
   this.test2(value);
 }
 searchRestaurant(value){
   this.search.start=0;
   console.log(value);
   this.test2(value);
 }
 showFav(){
   this.update.getAllRestaurants().subscribe(data1=>this.rest1=data1);
 }




}
