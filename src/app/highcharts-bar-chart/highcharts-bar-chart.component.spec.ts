import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsBarChartComponent } from './highcharts-bar-chart.component';

describe('HighchartsBarChartComponent', () => {
  let component: HighchartsBarChartComponent;
  let fixture: ComponentFixture<HighchartsBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighchartsBarChartComponent]
    });
    fixture = TestBed.createComponent(HighchartsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
