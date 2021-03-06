import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SampleTableDataSource } from './sample-table-datasource';

@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SampleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  sampleData: any[] = [
    {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Helium'},
    {id: 3, name: 'Lithium'},
    {id: 4, name: 'Beryllium'},
    {id: 5, name: 'Boron'},
    {id: 6, name: 'Carbon'},
    {id: 7, name: 'Nitrogen'},
    {id: 8, name: 'Oxygen'},
    {id: 9, name: 'Fluorine'},
    {id: 10, name: 'Neon'},
    {id: 11, name: 'Sodium'},
    {id: 12, name: 'Magnesium'},
    {id: 13, name: 'Aluminum'},
    {id: 14, name: 'Silicon'},
    {id: 15, name: 'Phosphorus'},
    {id: 16, name: 'Sulfur'},
    {id: 17, name: 'Chlorine'},
    {id: 18, name: 'Argon'},
    {id: 19, name: 'Potassium'},
    {id: 20, name: 'Calcium'},
  ];

  ngOnInit() {
    this.dataSource = new SampleTableDataSource(this.paginator, this.sort, this.sampleData);
  }

  applyFilter(value: string): void {
    this.dataSource = new SampleTableDataSource(
                            this.paginator,
                            this.sort,
                            this.sampleData.filter(this.filterElement(value)));
  }

  filterElement(valueToCompare: string) {
    const lowerValueToCompare = valueToCompare.toLowerCase();
    return function(filterValue) {
      return filterValue.name.toLowerCase().includes(lowerValueToCompare);
    };
  }

}
