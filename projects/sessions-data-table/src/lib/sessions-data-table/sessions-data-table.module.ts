import { NgModule,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsDataTableComponent } from './sessions-data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [SessionsDataTableComponent],
  exports: [SessionsDataTableComponent]
})
export class SessionsDataTableModule { }