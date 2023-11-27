import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsLineChartComponent } from './highcharts-line-chart.component';

describe('HighchartsLineChartComponent', () => {
  let component: HighchartsLineChartComponent;
  let fixture: ComponentFixture<HighchartsLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighchartsLineChartComponent]
    });
    fixture = TestBed.createComponent(HighchartsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
