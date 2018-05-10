import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CardComponent } from './card/card.component';
import { SearchService } from './search.service';
import { UpdateService } from './update.service';
import {MatExpansionPanel, MatAccordion, MatCardModule, MatGridListModule, MatButtonModule, MatDividerModule, MatDialogRef} from '@angular/material';
import { PopupComponent } from './popup/popup.component';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpModule} from '@angular/http';
import {
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FavoriteComponent } from './favorite/favorite.component';
import { DisplayNewComponent } from './display-new/display-new.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CardComponent,
    SearchComponent,
    PopupComponent,
    FavoriteComponent,
    DisplayNewComponent
  ],
  entryComponents: [AppComponent, PopupComponent],
  imports: [
    BrowserModule, MatCardModule,
    MatGridListModule,MatButtonModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatNativeDateModule,
    HttpModule,
    MatTabsModule
  ],
  providers: [SearchService, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
