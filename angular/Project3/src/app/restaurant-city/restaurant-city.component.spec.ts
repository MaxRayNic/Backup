import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCityComponent } from './restaurant-city.component';

describe('RestaurantCityComponent', () => {
  let component: RestaurantCityComponent;
  let fixture: ComponentFixture<RestaurantCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
