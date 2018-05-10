import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ViewServiceService } from "../view-service.service";
import { SearchService } from "../search.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent implements OnInit {
  response:any;
  result: any;
  Intent: any;
  Concept: any;
  Domain: any;


  constructor(private route: ActivatedRoute,private _searchservice:SearchService) {


  }


  ngOnInit() {
// this.Domain =
// this.Concept= ViewServiceService.Concept;
// this.Intent = ViewServiceService.Intent;
  console.log("AAAAAAA"+this.Domain);
console.log("BBBBBBBB"+this.Concept);
console.log("CCCCCCCC"+this.Intent);
this.response = this.route.queryParams.subscribe(params => {
     this.response = params;
     this.Domain = this.response.Domain;
     this.Concept=this.response.Concept;
     this.Intent = this.response.Intent;

   });
this._searchservice
      .getSearchResults(this.Domain, this.Concept, this.Intent)
      .subscribe(result =>
        this.result = result)

  }

ngOnChanges() {

  }
}
