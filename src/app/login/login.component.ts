import { NgModule,Component, OnInit,ViewChild} from '@angular/core';
import {FormControl, Validators,FormControlDirective,FormGroup,FormBuilder,FormControlName} from '@angular/forms';
//import { login } from './login.object';
 import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//loginData = new login();
 
  @ViewChild('loginForm') formValues; // Added this

  constructor(private LoginService: LoginService) { }

  ngOnInit() {
  }

  logIn(formData){
  	// let data = this.loginData; 
  	 // console.log(JSON.stringify(formData));

   this.LoginService.verifyLogin( formData).subscribe(data => {
            //    let data = this.submitData; 
              //  console.log(data);
                 this.formValues.resetForm();
            });
      


  }



}
