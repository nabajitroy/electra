import { NgModule,Component, OnInit,ViewChild} from '@angular/core';
import {FormControl, Validators,FormControlDirective,FormGroup,FormBuilder,FormControlName} from '@angular/forms';
import {MatPaginator,MatTableDataSource,MatSort} from '@angular/material';
import { SessionService } from '../session.service';
import { sessions } from '../session.object';
import { NgForm } from '@angular/forms';
import { AlertsService } from 'angular-alert-module'; 

import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'],
  providers:[ConfirmationDialogService]
})


export class SessionsComponent  implements OnInit{
  @ViewChild('myForm') formValues; // Added this
  public sessions: any;
  submitData = new sessions();

displayedColumns: string[] = ['session_name', 'session_startdate', 'session_enddate', 'date_created' ,'status','Actions' ];
   public dataSource: MatTableDataSource < Element[] > ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
 
  constructor(private SessionService: SessionService,private alerts: AlertsService,private confirmationDialogService: ConfirmationDialogService  ) { }


 ngOnInit() {
   this.getSessions();
      
   
     
  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  public  getSessions(){
            
          interface row{
              session_id: string;
              session_name: string;
              session_startdate: string;
              session_enddate: string;
              date_created: string;
              session_status: string; 
            }

 
            
          this.SessionService.getCurrentSession().subscribe(data => {
               this.sessions = data;
               this.sessions["response"].map(row => {      
                   row.isEditable = false;  

                });
               this.dataSource = new MatTableDataSource(this.sessions["response"] );
               this.dataSource.paginator = this.paginator; 
               
            });

          }// End of getSessions function



    submitForm(form) {
            let data = this.submitData; 

           // data.session_startdate = this.submitData.session_startdate.toISOString().split('T')[0];
           // data.session_enddate = this.submitData.session_enddate.toISOString().split('T')[0];
            this.SessionService.createSession(this.submitData).subscribe((response) => {
            this.formValues.resetForm(); 
            this.alerts.setMessage('Configurations session data saved successfully!','success');
            this.getSessions();
            });
    }

      public updateSession(element){
         // this.dataSource.data.filter(row => element.isEditable).map(r => { r.isEditable = false; return r })
          element.isEditable = false;

          this.SessionService.updateSession(element).subscribe((response) => {
          this.alerts.setMessage('Configurations session data updated successfully!','success');
          console.log('Configurations session data updated successfully!')
          this.getSessions();
          });
      };


      public editSession(element){
             //hideing edit form for all
             this.dataSource.data.map(r => { r["isEditable"] = false; return r })
              element.isEditable = true;
          
          /*  this.dataSource.data.forEach(function (row) {
                   return row["isEditable"]=false;
             });*/
                  
       };

        public openCloseSession(element){
              
            this.SessionService.openCloseSession(this.submitData).subscribe((response) => {
            this.formValues.resetForm();
            this.getSessions();
            });
                
       };

       public deleteSession(element){
           this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
             .then((confirmed) =>  {

                   if(confirmed){
                        this.SessionService.deleteSession(element).subscribe((response) => {
                        this.alerts.setMessage('Session data deleted successfully!','success');  
                        this.getSessions();
                      });   

                   } 

                 }

               )// end of .than
            




             .catch(() => console.log('User dismissed the dialog  '));
  
             
        } // end of deleteSession function  


       public cancelUpdateSession(element){
          element.isEditable = false;
       }


   
 
            
}
 

 /*
function delete(){

               this.SessionService.deleteSession(this.submitData).subscribe((response) => {
                   this.alerts.setMessage('Session data deleted successfully!','success');  
                this.getSessions();
            });   

       }
 */