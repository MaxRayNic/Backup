import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { startWith } from "rxjs/operators/startWith";
import { map } from "rxjs/operators/map";
import { SearchService } from "../search.service";
import { UpdateService } from "../update.service";

import { FormGroup, Validators } from "@angular/forms";
import { ServiceInterface } from "../serviceInterface";
import { RouterModule, Router, NavigationExtras } from "@angular/router";
import { ViewServiceService } from "../view-service.service";
import { $ } from "protractor";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  [x: string]: any;
  myDomainData: any;
  @Input() myLocation;
  @Input() Domain;

  powers = ["Really Smart", "Super Flexible", "Weather Changer"];
  hero = { domain: "", concept: "" };
  heroForm: FormGroup;
  myControl: FormControl = new FormControl();
  options = ["Beginner", "Intermediate", "Advanced", "illustration"];
  filteredOptions: Observable<string[]>;
  result: any;

  Location = [
    { value: "1", viewValue: "Beginner" },
    { value: "2", viewValue: "Intermediate" },
    { value: "3", viewValue: "Advanced" },
    { value: "4", viewValue: "Illustration" }
  ];

  rest = [];
  rest1 = [];

  x = "string";

  navigationExtras: NavigationExtras = {
    queryParams: {
      id: 1,
      name: "test",
      email: "abc@gmail.com",
      data2: this.hero.domain
    }
  };

  constructor(
    private search: SearchService,
    private update: UpdateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroForm = new FormGroup({
      domain: new FormControl(this.hero.domain, [
        Validators.required,
        Validators.minLength(4)
      ]),
      concept: new FormControl(this.hero.concept, [
        Validators.required,
        Validators.minLength(4)
      ]),
      myLocation: new FormControl(this.myLocation, [Validators.required])
    });
    // <-- Here's how you pass in the custom validator.

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(val => this.filter(val))
    );
  }

  filter(val: string): string[] {
    return this.options.filter(
      option => option.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }



m:any;
  function() {

ViewServiceService.Domain= this.hero.domain;
ViewServiceService.Concept = this.hero.concept;
ViewServiceService.Intent = this.myLocation;
       this.changeRoute();
  }
  changeRoute() {
    console.log("myDomainData is" + this.myDomainData);
    this.router.navigate(["/searchResult"],{queryParams : {
      'Domain' : (this.hero.domain),
      'Concept':(this.hero.concept),
      'Intent':(this.myLocation)
    }});


  }
}
// Cuisines=
//   {'Chinese':25,
//   'American':1,
//   'Asian':3,
//   'BBQ':193,
//   'Bakery':5,
//   'Bar Food':227,
//   'Biryani':7,
//   'British':133,
//   'Burger':168,
//   'Cafe':30,
//   'Coffe and Tea':161,
//   'Continental':35,
//   'Desserts':100,
//   'European':38,
//   'Fast Food':40,
//   'French':45,
//   'Grill':181,
//   'Healthy Food':143,
//   'Indian':148,
//   'Italian':55,
//   'Mexican':73,
//   'Mughlai':75,
//   'North Indian':50,
//   'Pizza':82,
//   'Rolls':1023,
//   'Sandwich':304,
//   'Seafood':83,
//   'South Indian':85,
//   'Vegetarian':308,
// }

// ngOnChanges(){

//  if(this.myLocation != null) {
//   this.test2("abc");
//   console.log("From search " + this.myLocation);
//   this.showFav();
// }
// else
// this.showFav();

// else {
//   this.search.getRestaurantByLocation(this.myLocation).subscribe(data=>this.rest=data);
//   console.log("myLocation is empty!");
//     this.search.getRestaurantByLocation(this.myLocation).subscribe(data=>this.rest=data);
//     console.log("change");
// }
