import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDoPageComponent } from './how-do-page.component';

describe('HowDoPageComponent', () => {
  let component: HowDoPageComponent;
  let fixture: ComponentFixture<HowDoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowDoPageComponent]
    });
    fixture = TestBed.createComponent(HowDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
