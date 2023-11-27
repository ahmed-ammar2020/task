import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexBarChartComponent } from './apex-bar-chart.component';

describe('ApexBarChartComponent', () => {
  let component: ApexBarChartComponent;
  let fixture: ComponentFixture<ApexBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexBarChartComponent]
    });
    fixture = TestBed.createComponent(ApexBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
