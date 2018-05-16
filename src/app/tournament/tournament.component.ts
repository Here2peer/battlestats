import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  public shouldShow = true;
  public activeTab = 'myTourneys';
  constructor() { }
  ngOnInit() {
  }



}
