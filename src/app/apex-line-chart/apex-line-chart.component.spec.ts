import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexLineChartComponent } from './apex-line-chart.component';

describe('ApexLineChartComponent', () => {
  let component: ApexLineChartComponent;
  let fixture: ComponentFixture<ApexLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApexLineChartComponent]
    });
    fixture = TestBed.createComponent(ApexLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
