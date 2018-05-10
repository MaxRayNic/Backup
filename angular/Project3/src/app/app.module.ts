import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { SearchComponent } from "./search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { DisplayComponent } from "./display/display.component";
import { CardComponent } from "./card/card.component";
import { SearchService } from "./search.service";
import { UpdateService } from "./update.service";
import {
  MatExpansionPanel,
  MatAccordion,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatDividerModule,
  MatDialogRef
} from "@angular/material";

import { CdkTableModule } from "@angular/cdk/table";
import { HttpModule } from "@angular/http";
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
  MatTooltipModule
} from "@angular/material";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FavoriteComponent } from "./favorite/favorite.component";
import { DisplayNewComponent } from "./display-new/display-new.component";
import { CardFancyComponent } from "./card-fancy/card-fancy.component";
import { SearchResultComponent } from "./search-result/search-result.component";

const appRoutes: Routes = [
  {
    path: "home",
    component: SearchComponent
  },
  {
    path: "searchResult",
    component: SearchResultComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CardComponent,
    SearchComponent,

    FavoriteComponent,
    DisplayNewComponent,
    CardFancyComponent,
    SearchResultComponent
  ],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
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
    MatTabsModule,
    MatChipsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [SearchService, UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
