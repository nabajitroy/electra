import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
const routes: Routes = [
 { path: 'admin/sessions', component: SessionsComponent }, 
];

@NgModule({
    declarations: [
   
   SessionsComponent,
    
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
