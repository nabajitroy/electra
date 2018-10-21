import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import {Chart} from 'chart.js';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-electra-board',
  templateUrl: './electra-board.component.html',
  styleUrls: ['./electra-board.component.css']
})

export class ElectraBoardComponent {
  
  constructor(private DashboardService: DashboardService) { }

 Barchart: any;
ngOnInit() {
  
 let names= [];
 let votes= [];
    this.DashboardService.getVoteResult()
      .subscribe(res => {
       
   names = res['response'].map(res => res.member_firstname);
   votes = res['response'].map(res => res.vote_count );
         this.Barchart = new Chart('canvas', {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
        
      })


   
 


























  } //on init
}