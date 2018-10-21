import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }
	  getCurrentSession(){
	     return this.http.get('/admin/getSessions');
	  }

     createSession(sessionData){
     	sessionData.session_startdate = new DatePipe('en-US').transform(sessionData.session_startdate, 'yyyy-MM-dd HH:mm:ss');
		sessionData.session_enddate = new DatePipe('en-US').transform(sessionData.session_enddate, 'yyyy-MM-dd HH:mm:ss')
	     return  this.http.post('/admin/createSession',sessionData);
	  }

	  openCloseSession(sessionData){
     	console.log(JSON.stringify(sessionData));
	     return  this.http.put('/admin/openCloseSession',sessionData);
	  }
      
      updateSession(sessionData){
		sessionData.session_startdate = new DatePipe('en-US').transform(sessionData.session_startdate, 'yyyy-MM-dd HH:mm:ss');
		sessionData.session_enddate = new DatePipe('en-US').transform(sessionData.session_enddate, 'yyyy-MM-dd HH:mm:ss')
		sessionData.last_modified = new DatePipe('en-US').transform(sessionData.last_modified, 'yyyy-MM-dd HH:mm:ss')
	     return  this.http.put('/admin/updateSession/'+sessionData.session_id,sessionData);
	  }

        deleteSession(sessionData){ 
        console.log(JSON.stringify(sessionData));	
	     return  this.http.put('/admin/deleteSession/'+sessionData.session_id,sessionData);
	  }

}


