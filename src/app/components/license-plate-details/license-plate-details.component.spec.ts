import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateDetailsComponent } from './license-plate-details.component';

describe('LicensePlateDetailsComponent', () => {
  let component: LicensePlateDetailsComponent;
  let fixture: ComponentFixture<LicensePlateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePlateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
