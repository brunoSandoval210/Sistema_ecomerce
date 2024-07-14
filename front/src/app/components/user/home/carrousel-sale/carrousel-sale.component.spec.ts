import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselSaleComponent } from './carrousel-sale.component';

describe('CarrouselSaleComponent', () => {
  let component: CarrouselSaleComponent;
  let fixture: ComponentFixture<CarrouselSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
