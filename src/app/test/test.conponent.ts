import { NgModule,Component, OnInit,ViewChild} from '@angular/core';
import {FormControl, Validators,FormControlDirective,FormGroup,FormBuilder,FormControlName} from '@angular/forms';
import {MatPaginator,MatTableDataSource,MatSort} from '@angular/material';
import { SessionService } from '../session.service';
import { sessions } from '../session.object';
import { NgForm } from '@angular/forms';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
   styleUrls: ['./test.component.css']
})


export class TestComponent  implements OnInit{
  @ViewChild('myForm') formValues; // Added this
  public sessions: any;
  submitData = new sessions();

displayedColumns: string[] = ['session_name', 'session_startdate', 'session_enddate', 'date_created' ,'status','Actions' ];
   public dataSource: MatTableDataSource < Element[] > ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
 
  constructor(private SessionService: SessionService,private confirmationDialogService: ConfirmationDialogService) { }


 ngOnInit() {
   this.getSessions();
   this.openConfirmationDialog();
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
              status: string; 
            


            }

 
            
          this.SessionService.getCurrentSession().subscribe(data => {
               this.sessions = data;
               this.sessions["response"].map(row => {      
                   row.isEditable = false;        
          });
               this.dataSource = new MatTableDataSource(this.sessions["response"] );
               this.dataSource.paginator = this.paginator; 
             //   this.sessions.data.map(row => {      
          // row.isEditable = false;        
         //  });  
              console.log(this.dataSource.data)
            });

          }// End of getSessions function



    submitForm(form) {
            let data = this.submitData;
            data.session_startdate = this.submitData.session_startdate.toISOString().split('T')[0];
            data.session_enddate = this.submitData.session_enddate.toISOString().split('T')[0];
            this.SessionService.createSession(this.submitData).subscribe((response) => {
            this.formValues.resetForm();
            this.getSessions();
            });
    }

      public updateSession(element){
         // this.dataSource.data.filter(row => element.isEditable).map(r => { r.isEditable = false; return r })
                element.isEditable = false;

                  console.log(element);
      };


      public editSession(element){
             //hideing edit form for all
             this.dataSource.data.map(r => { r["isEditable"] = false; return r })
              element.isEditable = true;
          
          /*  this.dataSource.data.forEach(function (row) {
                   return row["isEditable"]=false;
             });*/
                  
       };

        public closeSession(element){
             console.log("closeSession");
       };

       public deleteSession(element){
             console.log("deleteSession");
                  
       };

public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
 
            
}
 

 