import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {AppMaterialsModule } from './app.materials' 
import { RouterModule, Routes } from '@angular/router';
//import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SessionsComponent } from './sessions/sessions.component';
import { TestComponent } from './test/test.conponent';
 import { HomeComponent } from './home/home.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
 

import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ElectraBoardComponent } from './electra-board/electra-board.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';




/*const appRoutes: Routes = [
  { path: 'admin/sessions', component: SessionsComponent }, 
   { path: 'test', component: TestComponent }, 
];*/


const appRoutes:Routes = [
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   },
   {
     path: 'home',
     component: HomeComponent
      
   },

   {
     path: 'admin/sessions',
     component: SessionsComponent
      
   },
   {
     path: 'dashboard',
     component: DashboardComponent
      
   },
   { path: 'test',
    component: TestComponent 
   },

]










@NgModule({
  declarations: [
    AppComponent,
   // NavComponent,
    SessionsComponent,
    TestComponent,
    HomeComponent,
    AppComponent,
    ConfirmationDialogComponent,
    ElectraBoardComponent,
    DashboardComponent , 
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule, 
    AppMaterialsModule,
    RouterModule.forRoot(appRoutes), 
    HttpClientModule,
   NgbModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule,
   MatIconModule,
   MatButtonModule,
     
  ],
  exports: [ 
  ],
  providers: [ ConfirmationDialogService ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule { }
