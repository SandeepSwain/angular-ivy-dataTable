import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceDataService } from './../service-data.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {

   @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [
    'index',
    'name.firstName',
    'address.city',
    'company',
    'phone',
    'age',
    'registered',
  ];

  // public dataLists = [];
  dataLists: MatTableDataSource<any>;
  constructor(private servicedata: ServiceDataService) {}

  getProperty = (obj, path) => path.split('.').reduce((o, p) => o && o[p], obj);
  ngOnInit() {
    // this.servicedata
    //   .getdataTable()
    //   .subscribe((data) => (this.dataLists = data));
    // this.servicedata.getdataTable().subscribe((data) => {
    //   this.dataLists = new MatTableDataSource(data);
    //   this.dataLists.sortingDataAccessor = (obj, property) =>
    //     this.getProperty(obj, property);
    //   this.dataLists.sort = this.sort;
    // });
  }
  ngAfterViewInit() {
    this.servicedata.getdataTable().subscribe((data) => {
      this.dataLists = new MatTableDataSource(data);
      this.dataLists.sortingDataAccessor = (obj, property) =>
        this.getProperty(obj, property);
      this.dataLists.sort = this.sort;
    });
  }
}

}