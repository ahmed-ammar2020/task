import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApexLineChartComponent } from './apex-line-chart/apex-line-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexBarChartComponent } from './apex-bar-chart/apex-bar-chart.component';
import { HighchartsLineChartComponent } from './highcharts-line-chart/highcharts-line-chart.component';
import { HighchartsBarChartComponent } from './highcharts-bar-chart/highcharts-bar-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    ApexLineChartComponent,
    ApexBarChartComponent,
    HighchartsLineChartComponent,
    HighchartsBarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
