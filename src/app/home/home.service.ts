import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  getAllTeamPlayers(){
     return this.http.get('api/teams/getTeamPlayers');
  }
  getCurrentSession(){
     return this.http.get('api/teams/getCurrentSession');
  }

}
