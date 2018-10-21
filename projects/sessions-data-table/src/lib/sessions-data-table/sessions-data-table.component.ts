//import { Component, OnInit, ViewChild } from '@angular/core';
//import { MatPaginator, MatSort } from '@angular/material';
//import { SessionsDataTableDataSource } from './sessions-data-table-datasource';

/*@Component({
  selector: 'lib-sessions-data-table',
  templateUrl: './sessions-data-table.component.html',
  styleUrls: ['./sessions-data-table.component.css']
})
export class SessionsDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SessionsDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 // displayedColumns = ['id', 'name'];

 // ngOnInit() {
 //   this.dataSource = new SessionsDataTableDataSource(this.paginator, this.sort);
 // }
//}



import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SessionsDataTableDataSource } from './sessions-data-table-datasource';

@Component({
  selector: 'lib-sessions-data-table',
  templateUrl: './sessions-data-table.component.html',
  styleUrls: ['./sessions-data-table.component.css']
})

export class SessionsDataTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: SessionsDataTableDataSource;
 @Input() set data(_data: any[]) {
    this.dataSource = new SessionsDataTableDataSource(this.paginator, _data, this.sort);
    this.displayedColumns = Object.keys(_data[0]);
    
  }
 

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: Array<string>;
}

