import { BrowserModule } from '@angular/platform-browser';
import { NgModule,OnInit,Component} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatPaginator,MatTableDataSource} from '@angular/material';
// import { MatPaginatorModule } from '@angular/material';

import {FormControl, Validators,FormsModule, ReactiveFormsModule} from '@angular/forms';
 
import { LayoutModule } from '@angular/cdk/layout'; 
  // Import alert library
import { AlertsModule } from 'angular-alert-module';
 
import { 
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule, 
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatTableModule, 
      MatPaginatorModule,
      MatProgressSpinnerModule
      
  } from '@angular/material';

 

@NgModule({
  declarations: [ 
  
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTableModule, 
    MatPaginatorModule,  
    MatProgressSpinnerModule,
    // Specify alert library as an import
    AlertsModule.forRoot()
  ],
   exports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTableModule ,
    MatPaginatorModule,  
    MatProgressSpinnerModule,
    AlertsModule 
  ],
  providers: [
     MatDatepickerModule 
  ],
})
 
export class AppMaterialsModule implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}