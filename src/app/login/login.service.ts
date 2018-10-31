import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  verifyLogin(data){
  	console.log(JSON.stringify(data));
	    return this.http.post('api/authentication/getToken',data);
	}
}
