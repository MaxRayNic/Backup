import { Component, Inject, OnInit, Output, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  Locations =
  {'New Delhi' : 1,
  'Kolkata':2,
  'Mumbai': 3,
  'Bengaluru':4,
  'Pune': 5,
  'Hyderabad': 6,
  'Chennai':7
};
  location: number;
rest=[];
  ngOnInit(): void {
    //   let dialogRef = this.dialog.open(PopupComponent, {
    //   width: '100%'});
    //
    // dialogRef.afterClosed().subscribe(result =>{this.location = this.Locations[result] });
  }
}
