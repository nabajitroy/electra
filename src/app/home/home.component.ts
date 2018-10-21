import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  teams: any = [];
  session: any = [];
  constructor( private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getCurrentSession() 
     .subscribe(data => {
          this.session = data;
          // console.log(JSON.stringify( data ))
     });

    this.homeService.getAllTeamPlayers() 
     .subscribe(data => {
          this.teams = data;
         // console.log(JSON.stringify( this.teams.response ))
     });
  }

}
