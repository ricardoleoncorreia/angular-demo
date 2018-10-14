import { Component, OnInit } from '@angular/core';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  lineChart: Chart = new Chart({
      title: {text: 'Solar Employment Growth by Sector, 2010-2016'},
      subtitle: {text: 'Source: thesolarfoundation.com'},
      yAxis: { title: { text: 'Number of Employees' } },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
      plotOptions: { series: { pointStart: 2010 } },
      series: [
        { name: 'Installation', data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175] },
        { name: 'Manufacturing', data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434] },
        { name: 'Sales & Distribution', data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387] },
        { name: 'Project Development', data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227] },
        { name: 'Other', data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111] }
      ],
      responsive: {
          rules: [{
              condition: { maxWidth: 500 },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  });

  combinedChart: Chart = new Chart({
      title: { text: 'Combination chart' },
      xAxis: { categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'] },
      labels: {
          items: [{
              html: 'Total fruit consumption',
              style: { left: '50px', top: '18px', color: 'black' }
          }]
      },
      series: [
        { type: 'column', name: 'Jane', data: [3, 2, 1, 3, 4] },
        { type: 'column', name: 'John', data: [2, 3, 5, 7, 6] },
        { type: 'column', name: 'Joe', data: [4, 3, 3, 9, 0] },
        { type: 'spline', name: 'Average', data: [3, 2.67, 3, 6.33, 3.33], },
      ]
  });

  pieChart: Chart = new Chart({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: { text: 'Browser market shares in January, 2018' },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            }
        }
    },
    series: [{
        name: 'Brands',
        data: [
          { name: 'Chrome', y: 61.41, sliced: true, selected: true },
          { name: 'Internet Explorer', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Edge', y: 4.67 },
          { name: 'Safari', y: 4.18 },
          { name: 'Sogou Explorer', y: 1.64 },
          { name: 'Opera', y: 1.6 },
          { name: 'QQ', y: 1.2 },
          { name: 'Other', y: 2.61 }
        ]
    }]
});

  constructor() { }

  ngOnInit() {
  }

}
