import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferListPageComponent } from './offer-list.component';

describe('AllOffersPageComponent', () => {
  let component: OfferListPageComponent;
  let fixture: ComponentFixture<OfferListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferListPageComponent]
    });
    fixture = TestBed.createComponent(OfferListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
